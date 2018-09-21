FROM alpine:3.8

RUN apk update && apk upgrade
RUN apk add \
    php7 \
    apache2 \
    php7-pdo \
    php7-pdo_mysql \
    php7-opcache \
    php7-json \
    php7-mbstring \
    php7-session \
    php7-iconv \
    php7-gd \
    php7-xml \
    php7-simplexml \
    php7-tokenizer \
    php7-dom \
    php7-apache2

# Make directories to avoid errors.
RUN mkdir /run/apache2 && \
    mkdir /var/log/php

# Log everything to standard outs for docker.
RUN ln -sf /dev/stdout /var/log/apache2/access.log && \
    ln -sf /dev/stderr /var/log/apache2/error.log && \
    ln -sf /dev/stderr /var/log/php/error.log

# Create application and add config.
COPY . /var/www/html
COPY ./config/docker/apache2/apache.conf /etc/apache2/conf.d/app.conf
COPY ./config/docker/php/php.ini /etc/php/conf.d/99-app.ini

WORKDIR /var/www/html

CMD ["httpd", "-DFOREGROUND"]

EXPOSE 80
