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
      //this.requisicaoCompras();
      //this.processoComprasDispensa();
      //this.processoComprasDispensaSemReserva();
      //this.processoComprasDispensaCubatao();
      //this.solicitacaoCompras();
    });
  }
  ccp() {
    describe("CCP - Contribuinte", () => {
      pesquisaContribuinteSpec.atualizaDivida();
    })
    
  }
    
}

export default new setup();