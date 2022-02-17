import Utils from "../Utils";

import pesquisaContribuinteSpec from "./dividaAtiva/pesquisaContribuinte.spec";
import extornoRepactucacaoSpec from "./dividaAtiva/extornoRepactuacao.spec";
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
      pesquisaContribuinteSpec.acessaCCI();
      pesquisaContribuinteSpec.carregaContribuinte("KEISCIANE MARTINAS FERREIRA");
      pesquisaContribuinteSpec.atualizaDivida();
      pesquisaContribuinteSpec.validaExtratos();
      pesquisaContribuinteSpec.simularRepactuacao();
      pesquisaContribuinteSpec.repactucaoesAnteriores();
      pesquisaContribuinteSpec.homologaSimulacao();
      pesquisaContribuinteSpec.pagamentoAvista();
      pesquisaContribuinteSpec.carregaContribuinte("DROGARIA EVARISTO MENDONÇA LTDA");
      pesquisaContribuinteSpec.testaCertidaoNegativa();
    })
    describe("Extorno de repacuação", () => {
      extornoRepactucacaoSpec.acessaExtornoRepactuacao();
      extornoRepactucacaoSpec.validaExtornoEmBranco();
      extornoRepactucacaoSpec.extornaRepactuacao();
    })
    
  }
    
}

export default new setup();