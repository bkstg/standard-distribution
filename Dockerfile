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
    php7-fileinfo \
    php7-dom \
    php7-apache2

# Make directories to avoid errors.
RUN mkdir /run/apache2

# Create application and add config.
COPY . /var/www/html
COPY ./config/docker/apache2/apache.conf /etc/apache2/conf.d/app.conf
COPY ./config/docker/php/php.ini /etc/php/conf.d/99-app.ini

# Set user and group for files and execution.
RUN chown -R apache:apache /var/www/html/var
RUN chown -R apache:apache /var/www/html/public

WORKDIR /var/www/html
CMD ["httpd", "-DFOREGROUND"]

EXPOSE 80
