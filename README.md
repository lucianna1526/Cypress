# Testes _end-to-end_ Prodata com Cypress

Projeto da Ferramenta de automação de testes end to end escritos com Cypress.

## Pré-requisitos

Para executar o projeto você precisa:

- [git](https://git-scm.com/downloads) (Usar a versão `2.33.0` a utilizada no momento da descrição desse documento)
- [nodejs](https://nodejs.org/en/blog/release/v14.18.0) (Usar a versão `14.18.0` a utilizada no momento da descrição desse documento)
- NPM (Usar a versão `6.14.15` a utilizada no momento da descrição desse documento)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (Usar a versao `96.0.4664.110` a utilizada no momento da descrição desse documento)
- [Visual Studio Code(https://code.visualstudio.com/Download) (Pode ser utilizado sempre a ultima versao disponivel)]

**Nota:** Ao instalar o nodejs, o NPM é instalado automaticamente.

## Instalação

- Para instalar as dependencias de desenvolvimento, execute: npm install
- Para instalar o nodejs: https://nodejs.org/en/
- Para instalar o cypress executar: npm install cypress@9.1.1 --save-dev

## Configuração das variáveis do ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do [`cypress.env.example.json`](./cypress.env.example.json) arquivos como `cypress.env.json`, e definir os valores apropriados para todas as variáveis.

**Nota:** O arquivo `cypress.env.json` não é trackeado pelo git

## Executando os testes

Neste projeto, você pode executar testes em modos interativos(grafico) e em modo headless(terminal).

## Modo Headless

npx cypress run --spec .\cypress\integration\Compras\setup.spec.js

## Modo Interativo

./node_modules/.bin/cypress open

## Desenvolvido pela equipe de testes:

[Jeandes Wesley Martins](https://github.com/jeandeswesley).
[Hevener Ancelmo Pereira](https://github.com/hevener10).
