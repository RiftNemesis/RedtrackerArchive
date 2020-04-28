from flask import Flask
from flask import Response
from flask import render_template
from flask import request
from flashtext import KeywordProcessor

import json

from whoosh.qparser import QueryParser
from whoosh.qparser import FuzzyTermPlugin
from whoosh.qparser import MultifieldParser
from whoosh.index import open_dir
from whoosh.query import Every, Term

from fuzzywuzzy import process


ix = open_dir("index")

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

with open("redtracker_full.json","r") as f:
    data = json.load(f)
indexed_data = {i["link"]:i for i in data}

# Authors suggestions data
with open("all_authors_stats.json","r") as f:
    all_authors_stats = json.load(f)
    all_indexed_authors_stats = {i["name"]:i for i in all_authors_stats}
    authors_name = [i["name"] for i in all_authors_stats]
    
def author_name_suggestion(name):
    list_autocomplete = [all_indexed_authors_stats[i] for i in all_indexed_authors_stats.keys() if i.lower().startswith(name.lower())]
    list_suggestions = [all_indexed_authors_stats[i[0]] for i in process.extract(name, authors_name, limit=10-len(list_autocomplete)) if i[1] > 70 and not all_indexed_authors_stats[i[0]] in list_autocomplete]
    return list_autocomplete, list_suggestions

@app.route('/')
def index():
    return render_template('index.html')
    return "".join(['<li> <a href="/post?link='+i["link"]+'">o</a></li>' for i in data[:20]])

@app.route('/api/post')
def post():
    parser = QueryParser("link", ix.schema)
    myquery = parser.parse(request.args.get('link'))
    with ix.searcher() as searcher:
        results = searcher.search(myquery)
        if results.is_empty():
            resp = Response(status=404)
        else:
            results_json = json.dumps( dict(results[0]), default=str)
            resp = Response(response=results_json,
                            status=200,
                            mimetype="application/json")

    return resp

@app.route('/api/search')
def search():
    print(request.args)
    search = request.args.get('search')
    author = request.args.get('author')
    category = request.args.get('category')
    page = int(request.args.get('page')) if not request.args.get('page') is None else 1
    print(search)
    
    if search is None and author is None and category is None:
        myquery = Every()
    else:
        if search is None:
            if not author is None:
                myquery = Term('author',author)
                if not category is None:
                    myquery = myquery & Term('category',category)
            else:
                 myquery = Term('category',category)
        else:
            myquery = MultifieldParser(["title","post_content"], ix.schema, plugins=[FuzzyTermPlugin()]).parse(search)

            if not author is None:
                myquery = myquery & Term('author',author)

            if not category is None:
                myquery = myquery & Term('category',category)
        
    with ix.searcher() as searcher:
        results = searcher.search_page(myquery, page, pagelen=25, sortedby="date", reverse=True)
        print(results.is_last_page())
        results_json = json.dumps( {"results":[dict(i) for i in results], "page":page, "total_results":results.total}, default=str)
        
            
    resp = Response(response=results_json,
                    status=200,
                    mimetype="application/json")

    return resp


@app.route('/api/author_suggest/<string:name>')
def author_suggest(name):
    list_autocomplete, list_suggestions = author_name_suggestion(name)
    results_json = json.dumps({"list_autocomplete":list_autocomplete,"list_suggestions":list_suggestions})
    resp = Response(response=results_json,
                    status=200,
                    mimetype="application/json")

    return resp
    
'''
def search():
    keywords = request.args.get('search').split(" ")
    keyword_processor = KeywordProcessor()
    for k in keywords:
        keyword_processor.add_keyword(k)
        
    thread_list = []
    for link, thread in indexed_data.items():
        kw_title = keyword_processor.extract_keywords(thread["title"])
        n_kw_title = len(kw_title)
        
        kw_body = keyword_processor.extract_keywords(thread["post_content"])
        n_kw_body = len(kw_body)
        
        if n_kw_title + n_kw_body > 0:
            thread_list.append({
                "link":link,
                "title":thread["title"],
                "n_kw":len(set(kw_title+kw_body))
            })
    ordered_thread_list = sorted(thread_list, key=lambda k: k['n_kw'], reverse=True) 
    
    return "".join(['<li> <a href="/post?link='+i["link"]+'">'+i["title"]+'</a></li>' for i in ordered_thread_list[:20]])
'''
    
@app.route('/<string:u_path>')
def joker(u_path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)