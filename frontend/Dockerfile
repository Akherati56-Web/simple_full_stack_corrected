# docker/nginx/Dockerfile
FROM nginx:1.20
ADD react.nginx.conf /etc/nginx/conf.d/default.conf
COPY vite_project /var/www/html/vite_project