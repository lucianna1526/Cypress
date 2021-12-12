// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
//Importa dependencia que faz upload de arquivos
import "cypress-file-upload";
// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

//insere plugin tab
require("cypress-plugin-tab");

//Preserva o cookie, previne de ser resetado depois de cada teste
Cypress.Cookies.defaults({
  preserve: "JSESSIONID",
});

//Reinscreve o clear, depois de cada teste ele fazia reload na pagina.
Cypress.LocalStorage.clear = function (keys, ls, rs) {
  return;
};
