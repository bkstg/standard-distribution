FROM php:7-apache

RUN a2enmod rewrite
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
    && docker-php-ext-install -j$(nproc) iconv \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd

COPY .docker/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY . /var/www/html

EXPOSE 80
WORKDIR /var/www/html
