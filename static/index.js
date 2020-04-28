var Router = ReactRouterDOM.Router;
var Route = ReactRouterDOM.Route;
var BrowserRouter = ReactRouterDOM.BrowserRouter;
var Switch = ReactRouterDOM.Switch;
var Link = ReactRouterDOM.Link;

var CATEGORIES = [{"name": "Announcements", "region": "euw", "entries": 3650}, {"name": "Ask the Community", "region": "na", "entries": 65}, {"name": "Battlegrounds", "region": "euw", "entries": 146}, {"name": "Boards Feedback", "region": "euw", "entries": 1621}, {"name": "Breaking News", "region": "na", "entries": 2}, {"name": "Bug Reports", "region": "euw", "entries": 983}, {"name": "Bugs", "region": "pbe", "entries": 4387}, {"name": "Bugy - audio", "region": "pbe", "entries": 4}, {"name": "Bugy - ostatn\u00ed", "region": "pbe", "entries": 4}, {"name": "Champions & Gameplay", "region": "euw", "entries": 1414}, {"name": "Champions & Gameplay Feedback - Now Disabled", "region": "pbe", "entries": 3277}, {"name": "Champions & Skins", "region": "na", "entries": 797}, {"name": "Clash", "region": "na", "entries": 2}, {"name": "Client Discussion", "region": "euw", "entries": 1086}, {"name": "Client Support", "region": "euw", "entries": 40}, {"name": "Community Creations", "region": "na", "entries": 1414}, {"name": "Community Reporters (Private)", "region": "na", "entries": 1}, {"name": "Concepts & Creations", "region": "na", "entries": 2664}, {"name": "Cosplay", "region": "euw", "entries": 30}, {"name": "Creations & Concepts", "region": "euw", "entries": 216}, {"name": "DC test", "region": "na", "entries": 6}, {"name": "Dev Corner", "region": "na", "entries": 9563}, {"name": "Discuss the Boards", "region": "na", "entries": 79}, {"name": "Discussions", "region": "na", "entries": 1}, {"name": "D\u00edcs\u00e9retek", "region": "pbe", "entries": 4}, {"name": "Egy\u00e9b bugok (nem magyar hib\u00e1k)", "region": "pbe", "entries": 12}, {"name": "Esports", "region": "euw", "entries": 1179}, {"name": "Events & Tournaments", "region": "euw", "entries": 128}, {"name": "Fan Fiction", "region": "euw", "entries": 117}, {"name": "Feature Feedback", "region": "pbe", "entries": 2423}, {"name": "Fogalmaz\u00e1sbeli javaslatok", "region": "pbe", "entries": 54}, {"name": "Gameplay", "region": "na", "entries": 9588}, {"name": "Games, Contests & Jokes", "region": "euw", "entries": 341}, {"name": "General Discussion", "region": "na", "entries": 1077}, {"name": "General PBE Feedback - Now Disabled", "region": "pbe", "entries": 3266}, {"name": "Help Desk", "region": "na", "entries": 151}, {"name": "Hib\u00e1k a szinkronban", "region": "pbe", "entries": 47}, {"name": "Live Gameplay Balance", "region": "na", "entries": 407}, {"name": "Live Incident Breakdown", "region": "na", "entries": 353}, {"name": "Looking For Game", "region": "na", "entries": 7}, {"name": "Looking For Team", "region": "na", "entries": 1}, {"name": "Magyar fogalmak megvitat\u00e1sa", "region": "pbe", "entries": 10}, {"name": "Maps & Modes", "region": "euw", "entries": 605}, {"name": "Mechs vs Minions", "region": "na", "entries": 178}, {"name": "Memes & Games", "region": "na", "entries": 1297}, {"name": "Minden egy\u00e9b", "region": "pbe", "entries": 58}, {"name": "New Player Advice", "region": "euw", "entries": 85}, {"name": "N\u00e1vrhy na vylep\u0161en\u00ed", "region": "pbe", "entries": 9}, {"name": "OLD Memes & Games", "region": "na", "entries": 3}, {"name": "Obecn\u00e1 diskuze", "region": "pbe", "entries": 4}, {"name": "Off-topic", "region": "euw", "entries": 1912}, {"name": "Ostatn\u00ed", "region": "pbe", "entries": 2}, {"name": "Pentakill", "region": "na", "entries": 81}, {"name": "Player Behavior", "region": "na", "entries": 1498}, {"name": "Player Behaviour", "region": "euw", "entries": 555}, {"name": "Ragnar\u00f6k", "region": "euw", "entries": 11}, {"name": "Report a Bug", "region": "na", "entries": 5298}, {"name": "Roleplaying", "region": "na", "entries": 47}, {"name": "Service Status", "region": "na", "entries": 2}, {"name": "Site Feedback - Now Disabled", "region": "pbe", "entries": 248}, {"name": "Sound & Music", "region": "na", "entries": 562}, {"name": "Story, Art, & Sound", "region": "na", "entries": 10022}, {"name": "Streams & Videos", "region": "euw", "entries": 146}, {"name": "Suggestions & Bug Reports", "region": "euw", "entries": 414}, {"name": "Sz\u00f6veges hib\u00e1k", "region": "pbe", "entries": 100}, {"name": "Teamfight Tactics", "region": "na", "entries": 8}, {"name": "Teams, Clubs & Tournaments", "region": "euw", "entries": 50}, {"name": "Teams, Clubs & Tournaments EUNE", "region": "euw", "entries": 2}, {"name": "Technical Support", "region": "euw", "entries": 4483}, {"name": "Test Riot Official", "region": "na", "entries": 1}, {"name": "Tips & Tricks", "region": "na", "entries": 265}, {"name": "V\u00e9lem\u00e9nyek a szinkronr\u00f3l", "region": "pbe", "entries": 24}, {"name": "[ARCHIVED] Alpha Client Bugs", "region": "na", "entries": 18}, {"name": "[ARCHIVED] Fantasy LCS", "region": "na", "entries": 84}, {"name": "[ARCHIVED] Gameplay+", "region": "na", "entries": 10}, {"name": "[ARCHIVED] General Discussion", "region": "na", "entries": 3856}, {"name": "[ARCHIVED] Help & Support", "region": "na", "entries": 35029}, {"name": "[ARCHIVED] Miscellaneous", "region": "na", "entries": 6829}, {"name": "[ARCHIVED] Mobile App Discussion", "region": "na", "entries": 75}, {"name": "[ARCHIVED] Player Recruitment", "region": "na", "entries": 22}, {"name": "[ARCHIVED] Thunderdome: Team PVC", "region": "na", "entries": 26}, {"name": "\u00c1ltal\u00e1nos v\u00e9lem\u00e9nyek", "region": "pbe", "entries": 17}]


  
class App extends React.Component{
	constructor(props) {
		super(props)
	}
	
	render(){
		return (
			<div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/search' component={SearchPage}/>
                        <Route path='/post' component={PostPage}/>
                    </Switch>
                </div>
			</div>
		)
	}
}

class Navbar extends React.Component{
	constructor(props) {
		super(props)
        this.state = {
            search:''
        }
        this.updateSearch = this.updateSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}
    
    
    
    updateSearch(event){
        this.setState({
            search:event.target.value
        })
    }
    
    handleSubmit(event){
        event.preventDefault();
        if (this.state.search.startsWith("https://")){
            console.log("push bar")
            this.props.history.push({
              pathname: '/post',
              search: "?" + this.state.search,
              state:""
            });
        }else{
            this.props.history.push({
              pathname: '/search',
              search: "?search=" + this.state.search
            });
        }
        this.props.triggerParamsChange()
    }
	
	render(){
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">Redtracker Archive</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li className={(this.props.page == "search")?"active":""}><a href="/search">Search</a></li>
                    <li className={(this.props.page == "post")?"active":""}><a href="/post">Post</a></li>
                  </ul>
                  <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search" value={this.state.search} onChange={this.updateSearch}/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
              </div>
            </nav>
        )
    }
    
}
                
    
class Home extends React.Component{
	constructor(props) {
		super(props)
	}
	
	render(){
        return (
            <div>
                <Navbar history={this.props.history} />
                <div className="container">
                    <h3>Redtracker Archive</h3>
                    <br /><br />
                    This site contains all League of Legends Red Posts from English Boards of NA, EUW and PBE.<br />
                    You can use the post page to get directly a specific post given its URL.<br />
                    You can use the search page to find posts, with filter by keywords, category and author.<br />
                    You can submit an URL or keywords in the top bar search field.
                </div>
            </div>
        )
    }
    
}

class SearchPage extends React.Component{
    
	constructor(props) {
		super(props)
        this.triggerParamsChange = this.triggerParamsChange.bind(this)
	}
    
    triggerParamsChange(){
        this.search.triggerParamsChange()
    }
	
	render(){
        return (
            <div>
                <Navbar page="search" history={this.props.history} triggerParamsChange={this.triggerParamsChange}/>
                <div className="container">
                    <Search history={this.props.history}  ref={search => this.search = search}/>
                </div>
            </div>
        )
    }
}

class Search extends React.Component{
	constructor(props) {
		super(props)
        var urlParams = new URLSearchParams(this.props.history.location.search);
        this.state = {
            search_value:(urlParams.has("search"))?urlParams.get("search"):'',
            categories:{
                "na":[],
                "pbe":[],
                "euw":[]
            },
            category:(urlParams.has("category"))?encodeURIComponent(urlParams.get("category")):'',
            author:(urlParams.has("author"))?urlParams.get("author"):'',
            page:(urlParams.has("page"))?urlParams.get("page"):'',
            suggestions:[],
            posts:[]
        }
        
        this.updateSearch_value = this.updateSearch_value.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.updateAuthor = this.updateAuthor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.search = this.search.bind(this)
        this.triggerParamsChange = this.triggerParamsChange.bind(this)
        
    }
    
    componentDidMount() {
        var categories = {
            "na":[],
            "pbe":[],
            "euw":[]
        }
        
        for(var i in CATEGORIES){
            categories[CATEGORIES[i]["region"]].push(CATEGORIES[i])
        }
        
        this.setState({
            categories:categories
        })
        
        this.search()
        window.onpopstate = (event) => {
             this.setState(event.state.state)
        };
    }
    
    updateSearch_value(event){
        this.setState({
            search_value:event.target.value,
            page:1
        })
    }
    
    updateCategory(event){
        this.setState({
            category:event.target.value,
            page:1
        })
    }
    
    updateAuthor(event){
        this.setState({
            author:event.target.value,
            page:1
        })
        
        if(event.target.value.length >=3){
            
            axios.get("/api/author_suggest/"+event.target.value)
              .then(res => {
                this.setState({suggestions:res.data.list_autocomplete.concat(res.data.list_suggestions)})
              })
              .catch(error =>  {
                console.log(error);
                this.setState({suggestions:[]})
              })
        }else{
            this.setState({suggestions:[]})
        }
    }
    
    triggerParamsChange(){
        var urlParams = new URLSearchParams(this.props.history.location.search);
        this.setState({
            search_value:(urlParams.has("search"))?urlParams.get("search"):'',
            category:'',
            author:'',
            page:'',
            suggestions:[],
            posts:[]
        }, () => this.search())
        
    }
    
    search(page=1){
        
        var params = []
        if(!this.state.search_value=="") params["search"] = this.state.search_value
        if(!this.state.category=="") params["category"] = this.state.category
        if(!this.state.author=="") params["author"] = this.state.author
        if(page > 1 )
            params["page"] = page
        else if(this.state.page != '' )
            params["page"] = this.state.page
        
        var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        
        
        
            axios.get("/api/search?"+queryString)
              .then(res => {
                this.setState({
                    posts:res.data.results,
                    page:res.data.page,
                    total_results:res.data.total_results
                }, () => {
                    if(this.props.history.location.search == ((queryString=="")?"":"?" + queryString)){
                        this.props.history.replace({
                          pathname: '/search',
                          search: (queryString=="")?"":"?" + queryString,
                          state: this.state
                        })
                    }else{
                        this.props.history.push({
                          pathname: '/search',
                          search: (queryString=="")?"":"?" + queryString,
                          state: this.state
                        })
                    }}
                )
              })
              .catch(error =>  {
                console.log(error);
              })
    }
    
    handleSubmit(event) {
        this.setState({
            posts:[]
        })
        event.preventDefault();
        this.search()
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Search :</label>
                        <input value={this.state.search_value} onChange={this.updateSearch_value} placeholder="Search" className="form-control"/>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-8">
                            <label>Category : </label>
                            <select id="category-select" 
                                className="form-control"
                                value={this.state.category}
                                onChange={this.updateCategory}
                                onSelect={this.updateCategory}
                                style={{ color: this.state.category != ""? 'black': 'grey'}}>
                                <option value="" data-default>Category</option>
                                <optgroup label="NA">
                                    {this.state.categories["na"].map(cat =>
                                        <option key={cat.region+cat.name} value={encodeURIComponent(cat.name)} title={"Number of entries : "+cat.entries}>{cat.name}</option>
                                    )}
                                </optgroup>
                                <optgroup label="PBE">
                                    {this.state.categories["pbe"].map(cat =>
                                        <option key={cat.region+cat.name} value={encodeURIComponent(cat.name)} title={"Number of entries : "+cat.entries}>{cat.name}</option>
                                    )}
                                </optgroup>
                                <optgroup label="EUW">
                                    {this.state.categories["euw"].map(cat =>
                                        <option key={cat.region+cat.name} value={encodeURIComponent(cat.name)} title={"Number of entries : "+cat.entries}>{cat.name}</option>
                                    )}
                                </optgroup>
                            </select>
                        </div>
                        <div className="col-md-4 author-selector">
                          <label>Author : </label>
                          <ReactAutocomplete
                            inputProps={{"placeholder":"Author","className":"form-control"}}
                            items={this.state.suggestions}
                            getItemValue={item => item.name}
                            renderItem={(item, highlighted) =>
                              <div
                                key={item.name}
                                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                title={"Number of entries : "+item.entries}
                              >
                                {item.name}
                              </div>
                            }
                            value={this.state.author}
                            onChange={/*e => this.setState({ author: e.target.value })*/this.updateAuthor}
                            onSelect={value => this.setState({ author:value })}
                          />
                    </div>
                </div>
                <input type="submit" value="Search" className="btn btn-default" />
                </form>
                {this.state.posts.length > 0 && <SearchList posts={this.state.posts} />}
                {this.state.posts.length > 0 && <Pager page={this.state.page} total_results={this.state.total_results} search={this.search}/>}
            </div>
        )
    }
    
}
                
    
class SearchList extends React.Component{
	constructor(props) {
		super(props)
	}
	
	render(){
        return (
                <div className="post">
                {this.props.posts.map((value, index) => {
                    return <div key={index} className="post-box"><Post data={value} collapsible/></div>
                })}
                </div>
        )
    }
    
}
  
class Pager extends React.Component{
	constructor(props) {
		super(props)
	}
	
	render(){
        return (
                <div className="pager">
                        {this.props.page > 3 && <button onClick={() => this.props.search(1)} className="btn btn-default">1</button>}
                        {this.props.page > 4 && <span>...</span>}
                        {this.props.page > 2 && <button onClick={() => this.props.search(this.props.page-2)} className="btn btn-default">{this.props.page-2}</button>}
                        {this.props.page > 1 && <button onClick={() => this.props.search(this.props.page-1)} className="btn btn-default">{this.props.page-1}</button>}
                        {<span title="current page" className="btn btn-default active">{this.props.page}</span>}
                        {(this.props.total_results / 25 >> 0)+1 - this.props.page > 0 && <button title="next page" onClick={() => this.props.search(this.props.page+1)} className="btn btn-default">{this.props.page+1}</button>}
                        {(this.props.total_results / 25 >> 0)+1 - this.props.page > 1 && <button title="next next page" onClick={() => this.props.search(this.props.page+2)} className="btn btn-default">{this.props.page+2}</button>}
                        {(this.props.total_results / 25 >> 0)+1 - this.props.page > 3 && <span>...</span>}
                        {(this.props.total_results / 25 >> 0)+1 - this.props.page > 2 && <button title="last page" onClick={() => this.props.search((this.props.total_results / 25 >> 0)+1)} className="btn btn-default">{(this.props.total_results / 25 >> 0)+1}</button>}
                </div>
        )
    }
    
}                
    
class PostPage extends React.Component{
	constructor(props) {
		super(props)
        this.state = {
            data: {},
            link:props.location.search.substr(1),
            searchLink:"",
            not_found:false,
            loading:true
        };
        this.updateSearchLink = this.updateSearchLink.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.triggerParamsChange = this.triggerParamsChange.bind(this)
	}
    
    posttimeago(date){
        return timeago.format(date)
    }
    
    componentDidMount(){
        if(this.state.link == "")
            this.props.history.replace({
                pathname: '/post',
                search: "",
                state: this.state
            })
        else
            this.findLink()
        window.onpopstate = (event) => {
            this.setState(event.state.state)
        };
    }
    
    findLink(){
        this.setState({loading:true},
            () => axios.get("/api/post?link="+this.state.link)
              .then(res => {
                this.setState({
                    data:res.data,
                    not_found:false,
                    loading:false
                },() => {
                    if(this.props.history.location.search == ((this.state.link=="")?"":"?" + this.state.link)){
                        this.props.history.replace({
                            pathname: '/post',
                            search: (this.state.link=="")?"":"?" + this.state.link,
                            state: this.state
                        })
                    } else {
                        this.props.history.push({
                            pathname: '/post',
                            search: (this.state.link=="")?"":"?" + this.state.link,
                            state: this.state
                        })
                     }
                  }
                )
              })
              .catch(error =>  {
                console.log(error);
                this.setState({data:{}, not_found:true,loading:false},
                        () => this.props.history.push({
                        pathname: '/post',
                        search: (this.state.link=="")?"":"?" + this.state.link,
                        state: this.state
                    }))
              })
        )
    }
    
    updateSearchLink(event){
        this.setState({
            searchLink:event.target.value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var searchLink = this.state.searchLink
        this.setState({
            link:searchLink
        },() => this.findLink())
    }
    
    triggerParamsChange(){
        this.setState ({
            data: {},
            link:this.props.history.location.search.substr(1),
            searchLink:this.props.history.location.search.substr(1),
            not_found:false,
            loading:true
        }, () => this.findLink() )
    }
	
	render(){
        return (
            <div>
                <Navbar page="post" history={this.props.history} triggerParamsChange={this.triggerParamsChange}/>
                <div className="container">
                    <div className="row">
                    {this.state.link=="" && 
                         <div className="col-md-12">You can retrieve a Red post with the link : <br />
                             <form onSubmit={this.handleSubmit} className="">
                                <div className="input-group">
                                    <input value={this.state.searchLink} onChange={this.updateSearchLink} placeholder="Link" className="form-control"/>
                                    <div className="input-group-btn">
                                        <input type="submit" value="Search" className="btn btn-default" />
                                    </div>
                                </div>
                            </form>
                    </div>}
                    {this.state.not_found && !this.state.link=="" && !this.state.loading && "Post not found"}
                    {!this.state.not_found && Object.keys(this.state.data).length > 0 && <Post data={this.state.data}/>} 
                    </div>
                </div>
            </div>
        )
    }
    
}
                
    
class Post extends React.Component{
	constructor(props) {
		super(props)
        this.state = {
            minimized:false
        }
        if(this.props.collapsible)this.state["minimized"] = true
        this.posttimeago = this.posttimeago.bind(this);
	}
    
    posttimeago(date){
        return timeago.format(date)
    }
	
	render(){
        return (
                <div className="post">
                    {!this.props.collapsible && <div className="post-title">{this.props.data.title}</div>}
                    {this.props.collapsible && <div className="post-title">
                         <a href={"/post?"+this.props.data.link}>{this.props.data.title}</a>
                         <button className="btn btn-default pull-right" onClick={() => this.setState({ minimized:!this.state.minimized })}>{(this.state.minimized)?"+":"-"}</button>
                     </div>}
                    <div className="post-info">
                        By <span className="post-author"><a href={"/search?author="+this.props.data.author}>{this.props.data.author}</a></span> 
                        &nbsp;in <span className="post-category"><a href={"/search?category="+encodeURIComponent(this.props.data.category)}>{this.props.data.category}</a></span> 
                        &nbsp;<span className="date" title={this.props.data.date}> {this.posttimeago(new Date(this.props.data.date))}</span>
                    </div>
                    {!this.state.minimized && <div>
                        <div className="parent_content" dangerouslySetInnerHTML={{__html: this.props.data.parent_content}}></div>
                        <div className="post_content" dangerouslySetInnerHTML={{__html: this.props.data.post_content}}></div>
                    </div>}
                </div>
        )
    }
    
}

ReactDOM.render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('app'));