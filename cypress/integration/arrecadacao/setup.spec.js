import Utils from "../Utils";

import pesquisaContribuinteSpec from "./dividaAtiva/pesquisaContribuinte.spec";
import extornoRepactucacaoSpec from "./dividaAtiva/extornoRepactuacao.spec";

import ccfiscalAvulsoSpec from "./ccfiscal/ccfiscalAvulso.spec";
import ccfiscalAvulsoExclusaoSpec from "./ccfiscal/ccfiscalAvulsoExclusao.spec";

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
    describe.skip("CCP - Contribuinte", () => {
      pesquisaContribuinteSpec.acessaCCI();
      pesquisaContribuinteSpec.carregaContribuinte(
        "KEISCIANE MARTINAS FERREIRA"
      );
      pesquisaContribuinteSpec.atualizaDivida();
      pesquisaContribuinteSpec.validaExtratos();
      pesquisaContribuinteSpec.simularRepactuacao();
      pesquisaContribuinteSpec.repactucaoesAnteriores();
      pesquisaContribuinteSpec.homologaSimulacao();
      pesquisaContribuinteSpec.pagamentoAvista();
      pesquisaContribuinteSpec.carregaContribuinte(
        "DROGARIA EVARISTO MENDONÇA LTDA"
      );
      pesquisaContribuinteSpec.testaCertidaoNegativa();
    });
    describe.skip("Extorno de repacuação", () => {
      extornoRepactucacaoSpec.acessaExtornoRepactuacao();
      extornoRepactucacaoSpec.validaExtornoEmBranco();
      extornoRepactucacaoSpec.extornaRepactuacao();
    });
    describe("C/C Fiscal Avulso", () => {
      ccfiscalAvulsoSpec.geraDuamAvulso();
      ccfiscalAvulsoExclusaoSpec.excluiDuamAvulso();
    });
  }
}

export default new setup();
