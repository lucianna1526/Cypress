import Utils from "../Utils";

import gestaoPrestadorSpec from "./gestaoPrestador.spec";

import notaFiscalAvulsaSpc from "./notaFiscalAvulsa.spc";

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
     describe.skip("Fluxo - Gestão do Prestador", () => {
      
      gestaoPrestadorSpec.replicarNfe();
      
    })

    describe('Nota Fiscal Eletronica Avulsa', () => {
      notaFiscalAvulsaSpc.geraNotaFiscalAvulsa();
    });
  }
    
}

export default new setup();