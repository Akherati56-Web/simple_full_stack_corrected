
# frontend
FROM node:14.9 as frontend

WORKDIR /var/www/html/BookStore

COPY . .

RUN npm install

# backend
FROM composer:2.4 as backend

COPY . /var/www/html/BookStore

WORKDIR /var/www/html/BookStore

RUN composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction

RUN composer dump-autoload

# docker/php/Dockerfile
FROM php:8.2-fpm

RUN apt-get update
RUN apt-get install -y openssl zip unzip git curl
RUN apt-get install -y libzip-dev libonig-dev libicu-dev
RUN apt-get install -y autoconf pkg-config libssl-dev 

RUN docker-php-ext-install bcmath mbstring intl opcache

RUN apt install -y g++ libpq-dev zlib1g-dev

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

RUN docker-php-ext-install pdo pdo_mysql

COPY . /var/www/html/BookStore

COPY --from=backend /var/www/html/BookStore/vendor /var/www/html/BookStore/vendor
# Copy Frontend backend
COPY --from=frontend /app/node_modules/ ./node_modules/
COPY --from=frontend /app/public/js/ ./public/js/
COPY --from=frontend /app/public/css/ ./public/css/
COPY --from=frontend /app/public/mix-manifest.json ./public/mix-manifest.json

CMD [ "npm", "run", "dev" ]