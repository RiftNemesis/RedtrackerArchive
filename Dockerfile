FROM python:3.12.0a5-alpine
COPY index/* /app/index/
COPY static/* /app/static/
COPY templates/* /app/templates/
COPY index.py /app/index.py
COPY requirements.txt /app/requirements.txt
COPY redtracker_full.json /app/redtracker_full.json
COPY all_authors_stats.json /app/all_authors_stats.json
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5555
ENTRYPOINT ["python","-u","./index.py"]