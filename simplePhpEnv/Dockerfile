FROM php:8.0-apache

RUN apt-get update
RUN apt-get upgrade -y
RUN docker-php-ext-install mysqli

# Use the default production configuration
# RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"