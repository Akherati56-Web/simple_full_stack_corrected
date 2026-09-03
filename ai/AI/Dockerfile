FROM django:latest

WORKDIR /app
# COPY requirements.txt ./
# RUN pip install -r requirements.txt

RUN pip install djangorestframework
RUN pip install markdown
RUN pip install django-filter
RUN pip install psycopg2-binary
RUN pip install django-cors-headers
RUN pip install djongo



COPY . .

EXPOSE 8088
CMD ["python", "manage.py", "runserver", "0.0.0.0:8088"]
