# Meus resultados
Projeto para apresentação de resultados de futebol, criado na discplina de Computação Móvel


Documentação para preparação do ambiente de desenvolvimento
https://react-native.rocketseat.dev/


#### Tarefas prévias
* Preparação da logo ([Canva.com](http://bit.ly/meusresultadosufopa))
* Preparação do protótipo ([Figma](http://bit.ly/meusresultadosprototipo))

1. Criar projeto no GitHub
  - Novo repositório

2. Clonar projeto no repositório local
  - Git clone <link do projeto>

2. Criar projeto React Native
```
  - npx create-expo-app meusresultados --template
```

3. Executar projeto (web)
* Para executar o projeto é necessário instalar as dependências que ele necessita
```
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```
* Executar o projeto (dependendo do destino pode ser usado um destes comandos)
```
  npm run web
  npm run android
  npm run ios
```

4. Componentes
  - 4.1. [Text](https://reactnative.dev/docs/text)
  - 4.2. [View](https://reactnative.dev/docs/view)
  - 4.3. [TextInput](https://reactnative.dev/docs/textinput)
  - 4.4. [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)

5. Estilização Simples
  * Recomedável estudar CSS, responsividade e Flexbox

6. Estilização com [StyleSheet](https://reactnative.dev/docs/stylesheet)

7. Organização do projeto
  * src (pasta com o código fonte)
  * screens (pasta contendo as telas do app)
      * Home (página principal do app)
        - index.tsx (arquivo contendo o código da página)
        - styles.ts (arquivo de estilização)

## OBS:
* Componentes começam com letra maíuscula
* Para criar componentes a extensão do arquivo tem que ser .tsx

## 08/05/2023

- Adicionar logo
https://reactnative.dev/docs/images

- Path Mapping
  * biblioteca babbel-plugin-module-resolver
  * https://github.com/tleunen/babel-plugin-module-resolver

  * Parar aplicação
  * Instalar o plugin
    * 

Adicionar no arquivo babel.config.js
    plugins: [
      ["module-resolver", {
        root: ['./src'],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
        },
      }],
    ],

Adicionar tipagem nos mapeamentos para aparecer nas sugestões
No arquivo tsconfig.json


Estilização com styled-components
https://styled-components.com/

npm install styled-components@latest

npm install --save-dev @types/styled-components @types/styled-components-react-native

plugin VSCode 
vscode-styled-component

Extensão cores VSCODE
color highligth

Erro no TSconfig
npm install --save @types/hoist-non-react-statics
https://www.npmjs.com/package/@types/hoist-non-react-statics


