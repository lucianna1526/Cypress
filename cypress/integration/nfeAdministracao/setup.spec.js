import Utils from "../Utils";

import gestaoPrestadorSpec from "./gestaoPrestador.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Nfe Administração", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.nfeadministracao();
      
    });
  }
  nfeadministracao() {
     describe("Fluxo - Gestão do Prestador", () => {
      
      gestaoPrestadorSpec.replicarNfe();
      
    })
  }
    
}

export default new setup();