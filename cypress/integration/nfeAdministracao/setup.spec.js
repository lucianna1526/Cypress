import Utils from "../Utils";

import gestaoPrestadorSpec from "./gestaoPrestador.spec";

import notaFiscalAvulsaSpec from "./notaFiscalAvulsa.spec";

import notaFiscalEletronicaSpec from "./notaFiscalEletronica.spec";

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
    });

    describe("Nota Fiscal Eletronica Avulsa", () => {
      notaFiscalAvulsaSpec.geraNotaFiscalAvulsa();
    });

    describe("Nota Fiscal Eletronica", () => {
      notaFiscalEletronicaSpec.geraNotaFiscalEletronica();
    });
  }
}

export default new setup();
