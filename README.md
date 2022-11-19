<h1 align="center"> PROJETO DE BUSCA DE FILMES </h1>

<h3> Projeto desenvolvido, visando a obtenção de listagem de filmes derivados de outras API's. </h3>

<h2>Dependências</h2>

- Node 14
- Typeorm 0.2.41
- TypeORM 0.2.45
- MySQL 2.18.1

<h2>Configurações</h2>

### clone o projeto

- https://github.com/weverton-icaro/GetFilmsProject.git

### instale as dependências

- yarn

### configure o banco de dados no arquivo .env

- configuração voltada para utilização do banco mysql

### inicie o servidor

- yarn dev

### popule o banco de dados

- faça um get para o endpoint http://localhost:3001/films

### buscas por filmes

- faça buscas atraves de um endpoint get http://localhost:3001/films/list, passando os seguintes parametros por request.body:

{
"title":"", - Nome do filme
"original_title":"", - Nome original do filme
"release":"", - Ano de lançamento do filme
"director":"", - Diretor do filme
"score":"", - Nota do filme
"page": 1, - Número da página
"limit": 10 - Quantidade de filmes exibidos por página
}
