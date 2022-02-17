import Utils from "../Utils";

import notaEmpenhoSpec from "./NotaEmpenho/notaEmpenho.spec";
import notaEmpenhoFornecedorSpec from "./NotaEmpenho/notaEmpenhoFornecedor.spec";
import notaEmpenhoLicitacaoSpec from "./NotaEmpenho/notaEmpenhoLicitacao.spec";
import notaEmpenhoEventoHistoricoSpec from "./NotaEmpenho/notaEmpenhoEventoHistorico.spec";
import notaEmpenhoPacerlasSpec from "./NotaEmpenho/notaEmpenhoPacerlas.spec";

import notaLiquidacaoSpec from "./notaLiquidacao/notaLiquidacao.spec";
import notaPagamentoSpec from "./notaPagamento/notaPagamento.spec";

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
   /*  describe.skip("Fluxo - Nota de Empenho", () => {
     notaEmpenhoSpec.geraEmpenho();
     notaEmpenhoFornecedorSpec.geraEmpenhoFornecedor();
     notaEmpenhoLicitacaoSpec.geraEmpenhoLicitacao();
     notaEmpenhoEventoHistoricoSpec.geraEmpenhoEventoHistorico();
     notaEmpenhoPacerlasSpec.geraEmpenhoParcela();
      
    }) 
    describe("Fluxo - Nota de Liquidaçao", () => {
     notaLiquidacaoSpec.geraLiquidacao(); 
      
    }) */
    describe("Fluxo - Nota de Pagamento", () => {
      notaLiquidacaoSpec.geraLiquidacao();
      notaPagamentoSpec.geraPagamento();
    })
    
  }
    
}

export default new setup();