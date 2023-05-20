# Aplicação Laravel + React - README

Este repositório contém uma aplicação web desenvolvida usando Laravel (backend) e React (frontend). A aplicação é executada localmente e utiliza o banco de dados SQLite. O objetivo da aplicação é permitir que os usuários criem contas, façam login, sejam maiores de 18 anos para se cadastrar, editem suas contas e as excluam.

## Pré-requisitos
Certifique-se de ter os seguintes requisitos instalados em seu sistema:
- PHP >= 7.4
- Composer
- Node.js >= 12
- npm >= 6
- SQLite (o banco de dados é criado automaticamente durante a configuração inicial)

## Instalação
Siga as etapas abaixo para configurar e executar a aplicação localmente:

1. Clone este repositório para o seu ambiente local.
2. Abra um terminal e navegue até o diretório raiz da aplicação.

### Configuração do Backend (Laravel)
0. entre no diretório `cd backend` e Execute o comando `php artisan serve` para iniciar o servidor
O backend agora está configurado e sendo executado no endereço `http://localhost:8000`.

<!-- 1. Execute o comando `composer install` para instalar as dependências do Laravel.
2. Faça uma cópia do arquivo `.env.example` e renomeie-a para `.env`. Certifique-se de configurar as informações corretas do banco de dados nesse arquivo.
3. Execute o comando `php artisan key:generate` para gerar uma chave de criptografia única para a aplicação.
4. Execute o comando `php artisan migrate` para criar as tabelas necessárias no banco de dados.
5. Execute o comando `php artisan serve` para iniciar o servidor de desenvolvimento do Laravel. -->

### Configuração do Frontend (React)
1. Abra outro terminal e navegue até o diretório `frontend` dentro do diretório raiz da aplicação e Execute o comando `npm run dev`
O frontend agora está configurado e sendo executado no endereço `http://localhost:3000`.
Abra o endereço `http://localhost:3000` no navegador e faça o teste.
<!-- 2. Execute o comando `npm install` para instalar as dependências do React.
3. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento do React. -->


## Uso

A aplicação consiste nas seguintes funcionalidades:

- **Criar conta**: Acesse a página de registro fornecendo um nome de usuário, endereço de email e senha válidos. A conta será criada no banco de dados.
- **Fazer login**: Na página de login, informe o email e a senha corretos para acessar a conta.
- **Verificar email**: Durante o processo de registro, a aplicação verifica se o email fornecido já existe no banco de dados.
- **Verificar idade**: A aplicação exige que os usuários sejam maiores de 18 anos para se cadastrar.
- **Editar conta**: Após fazer login, os usuários podem editar as informações da conta, incluindo nome de usuário, endereço de email e senha.
- **Excluir conta**: Os usuários têm a opção de excluir permanentemente suas contas.