import Utils from "../Utils";

import notaEmpenhoSpec from "./NotaEmpenho/notaEmpenho.spec";
import notaEmpenhoFornecedorSpec from "./NotaEmpenho/notaEmpenhoFornecedor.spec";
import notaEmpenhoLicitacaoSpec from "./NotaEmpenho/notaEmpenhoLicitacao.spec";
import notaEmpenhoEventoHistoricoSpec from "./NotaEmpenho/notaEmpenhoEventoHistorico.spec";
import notaEmpenhoPacerlasSpec from "./NotaEmpenho/notaEmpenhoPacerlas.spec";

import notaLiquidacaoSpec from "./notaLiquidacao/notaLiquidacao.spec";
import notaPagamentoSpec from "./notaPagamento/notaPagamento.spec";
<<<<<<< HEAD
import notaLiquidacaoDocumentoSpec from "./notaLiquidacao/notaLiquidacaoDocumento.spec";
=======
>>>>>>> origin/master

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
      
<<<<<<< HEAD
    })*/ 
    describe("Fluxo - Nota de Liquidaçao", () => {
     //notaLiquidacaoSpec.geraLiquidacao(); 
     notaLiquidacaoDocumentoSpec.geraLiquidacaoDocumentos();
      
    })
    describe("Fluxo - Nota de Pagamento", () => {
      //notaPagamentoSpec.geraPagamento();
=======
    }) 
    describe("Fluxo - Nota de Liquidaçao", () => {
     notaLiquidacaoSpec.geraLiquidacao(); 
      
    }) */
    describe("Fluxo - Nota de Pagamento", () => {
      notaLiquidacaoSpec.geraLiquidacao();
      notaPagamentoSpec.geraPagamento();
>>>>>>> origin/master
    })
    
  }
    
}

export default new setup();