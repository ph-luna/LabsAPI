# Labs API

Projeto desenvolvido para seleção da **WA Project**.  
O projeto consiste em uma restAPI que cadastre laboratórios e exames em **lote** e relacione esses dois se necessário.  
Desenvolvi esse projeto utilizando [Typescript](https://www.typescriptlang.org/) com o serviço em nuvem de banco de dados 
[MongoDB Atlas](https://www.mongodb.com/) e arquitetura **DDD (Domain-Driven Design)**.  
Também utilizei o [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para manter uma boa organização de código.

### Acessando a API.

A API está hospedada no serviço de Cloud **Heroku**: [LabsAPI](https://labs-api-wa-project.herokuapp.com/)  
Para testar a API recomendo utilizar a ferramenta [Insominia](https://insomnia.rest/download).
Copie o seguinte link ou baixe o arquivo para importar a **coleção** do Insominia com todas as rotas já configuradas:  

<https://labs-api-wa-project.herokuapp.com/insomnia-download>

### Executando Localmente

Para executar localmente é necessário ter instalado o [Node.JS](https://nodejs.org) no seu computador e o gerenciador de pacotes [Yarn](https://yarnpkg.com/).
Em seguida execute o seguinte comando no terminal do seu SO na **pasta raiz do projeto** para instalar todas as dependências:

```bash
yarn
```

Também é necessário configurar um arquivo **.env**, para isso apenas crie um arquivo com o nome exato ".env" na pasta raiz do projeto e preencha com as seguintes linhas:

> MONGODB_USER=_Seu Usuário do MongoDB Atlas_
>
> MONGODB_PASSWORD=_Sua Senha do MongoDB Atlas_

Caso precise das credencias entre em contato comigo pelo email: <ph.luna.vieira@gmail.com>

E por fim execute o seguinte comando para iniciar um servidor de desenvolvimento:

```bash
yarn dev
```
### Gerando Build

Esse projeto utiliza [Typescript](https://www.typescriptlang.org/) como linguagem de desenvolvimento portanto é necessário transpilar o código para Javascript se for executar o projeto em algum ambiente que não reconheça Typescript.
Por isso configurei o transpilador [BabelJs](https://babeljs.io/) para fazer esse serviço.

Para transpilar apenas digite o seguinte comando no terminal do seu SO:

```bash
yarn build
```

Esse comando ira gerar uma pasta chamada **"Dist"** na raiz do projeto com o código transpilado para **Javascript**.

Em seguida apenas execute o seguinte comando para executar localmente:

```bash
yarn start
```
