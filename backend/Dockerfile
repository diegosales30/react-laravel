# Define a imagem base
FROM php:7.4-apache

# Instala o Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# Define o diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos da aplicação para o diretório de trabalho
COPY . .

# Executa o composer update para instalar as dependências
RUN composer update --no-plugins --no-scripts

# Executa as migrations e seeds
RUN php artisan migrate --seed

# Expõe a porta para acesso externo
EXPOSE 80

# Define o comando de inicialização
CMD ["apache2-foreground"]