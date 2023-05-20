# FROM node:14

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]

# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos da aplicação para o diretório de trabalho
COPY . .

# Instala as dependências
RUN npm install

# Compila a aplicação
RUN npm run build

# Expõe a porta para acesso externo
EXPOSE 3000

# Define o comando de inicialização
CMD ["npm", "start"]