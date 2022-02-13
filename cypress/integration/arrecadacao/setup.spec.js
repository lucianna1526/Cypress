import Utils from "../Utils";

import pesquisaContribuinteSpec from "./dividaAtiva/pesquisaContribuinte.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Arrecadação", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.ccp();
      
    });
  }
  ccp() {
    describe("CCP - Contribuinte", () => {
      pesquisaContribuinteSpec.atualizaDivida();
    })
    
  }
    
}

export default new setup();