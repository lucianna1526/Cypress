import Utils from "../Utils";

import autuacaoProcessoSpec from "./autuacao/autuacaoProcesso.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Protocolo", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.protocolo();
      
    });
  }
  protocolo() {
    describe("Fluxo - Protocolo", () => {
      //autuacaoProcessoSpec.cadastroProcessoCapa();
      autuacaoProcessoSpec.anexarDocumento();
      
    })
    
  }
    
}

export default new setup();