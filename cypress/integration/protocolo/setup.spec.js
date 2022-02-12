import Utils from "../Utils";

import autuacaoProcessoSpec from "./autuacaoProcesso.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Protocolo", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.autuacao();
      
    });
  }
  autuacao() {
    describe("Autuaçao / Processo", () => {
      autuacaoProcessoSpec.autuacao();
    })
    
  }
    
}

export default new setup();