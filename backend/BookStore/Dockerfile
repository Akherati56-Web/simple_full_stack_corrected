
FROM composer:2.4 as build

COPY . /var/www/html/BookStore

WORKDIR /var/www/html/BookStore

RUN composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction

RUN compsoer install

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
