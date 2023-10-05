# Programação WEB
Repositório criado para guardar os códigos desenvolvidos durante as aulas de Programação WEB durante o 4º semestre do curso de Análise e Desenvolvimento de Sistemas na Fatec Indaiatuba

## Aula 02 - Introdução a Express, Node e Typescript (01.09.2023)
Código contruído conforme o passo-a-passo disponibilizado pelo professor em seu [repositório](https://github.com/felipez3r0/workshop-node-ts-intro).

Algumas anotações  dos comandos em terminal para iniciar o ambiente:
```
npm init -y
npm i express dotenv
npm i -D nodemon
npm i -D typescript @types/node @types/express ts-node-dev
npx tsc --init

npm run dev
```
### Sugestões
- Extensão [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer): habilita uma visualização mais bonita de arquivos do banco de dados SQLite no Visual Studio Code.
- O comando ```npm i``` instala todos os arquivos que constituem a pasta ```node_modules```.

### Atividade da aula
Terminar o passo-a-passo iniciado em sala de aula.
> O repositório com a atividade 02 finalizada pode ser encontrado [aqui](https://github.com/barbara-bruzon/introducao-express-node)


## Aula 03 - Introdução a React (15.09.2023)
Introdução ao React, que permite a criação de componentes reutilizáveis, juntamente com o JSX - extensão de sintaxe que permite usar o javascript e HTML num único arquivo.
Foi desenvolvido um site bem simples, contendo apenas uma texbox e um botão não funcional, para entender o funcionamento da lógica e boas práticas do React.

### Atividade da aula
- Criar um componente para inserir Input customizado com a cor do texto vermelha, que vai receber um valor inicial, tipo e um placeholder.
- Montar um formulário no App.tsx com nome, e-mail, telefone e um botão não funcional de enviar.
> O repositório com a atividade 03 finalizada pode ser encontrado [aqui](https://github.com/barbara-bruzon/intro-react)


## Aula 04 - Introdução a React 2 (22.09.2023)
Incluimos o React Router no projeto. Pode ser importado usando ```npm i react-router-dom``` e ajuda a construir um site com diversas páginas, pois "constrói" as URLs e links de direcionamento para elas. Também aplicamos o conceito de "componentização", montando os componentes das páginas e importando quando necessário.

### Atividade da aula
Criar as seguintes páginas para o projeto:
- Inicial com uma breve apresentação do nosso projeto
- Contato com o formulário que foi criado na última aula
- "Sobre" comentando sobre quem desenvolveu o projeto
- Um que liste uma série de tarefas sobre o projeto
> O repositório com a atividade 03 finalizada pode ser encontrado [aqui](https://github.com/barbara-bruzon/paginas-react)

## Aula 05 - Chakra (29.09.2023)
Nessa aula, começamos a utilizar o [Chakra](https://chakra-ui.com/) para montar o site. É possível importar templates completos e acrescentá-los ao trabalho. Ou seja, facilita bastante da hora de criar as aplicações, principalmente para quem tem difilculdade com o assunto (no caso, eu tenho bastante dificuldade com o design).

### Sugestões
- Ícones para utilizar nas aplicações por meio do [react-icons](https://react-icons.github.io/react-icons): para utilizar no código basta importar com ```npm i react-icons```
- Muitos templates com o [chakra](https://chakra-templates.dev/)
- Extensão [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow): destaca as indentações com cores, tornando mais fácil se encontrar no código

### Atividade da aula
Ajustar a página de tarefas para torná-la similar ao modelo fornecido pelo professor.
> O repositório com a atividade 03 finalizada pode ser encontrado [aqui](https://github.com/barbara-bruzon/react-n-chakra)
