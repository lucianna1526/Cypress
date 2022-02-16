import Utils from "../Utils";

import notaEmpenhoSpec from "./NotaEmpenho/notaEmpenho.spec";
import notaEmpenhoFornecedorSpec from "./NotaEmpenho/notaEmpenhoFornecedor.spec";
import notaEmpenhoLicitacaoSpec from "./NotaEmpenho/notaEmpenhoLicitacao.spec";
import notaEmpenhoEventoHistoricoSpec from "./NotaEmpenho/notaEmpenhoEventoHistorico.spec";
import notaEmpenhoPacerlasSpec from "./NotaEmpenho/notaEmpenhoPacerlas.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Orçamento", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.orcamento();
      
    });
  }
  orcamento() {
    describe("Fluxo - Nota de Empenho", () => {
     notaEmpenhoSpec.geraEmpenho();
     notaEmpenhoFornecedorSpec.geraEmpenhoFornecedor();
     notaEmpenhoLicitacaoSpec.geraEmpenhoLicitacao();
     notaEmpenhoEventoHistoricoSpec.geraEmpenhoEventoHistorico();
     notaEmpenhoPacerlasSpec.geraEmpenhoParcela();
      
    })
    describe("Fluxo - Nota de Liquidaçao", () => {
      
      
    })
    describe("Fluxo - Nota de Pagamento", () => {
      
    })
    
  }
    
}

export default new setup();