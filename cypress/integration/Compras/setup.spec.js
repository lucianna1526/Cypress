import Utils from "../Utils";
import processoComprasDispensaRequisicaoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaRequisicao.spec";
import processoComprasDispensaCapaSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaCapa.spec";
import processoComprasDispensaFaseCredenciamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseCredenciamento.spec";
import processoComprasDispensaFaseJulgamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseJulgamento.spec";
import processoComprasDispensaGeraAutorizacaoCompraSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaGeraAutorizacaoCompra.spec";
import requisicaoInsereDadosSpec from "./RequisicaoProdutos/requisicaoInsereDados.spec";
import requisicaoValidaCamposObrigatoriosAbntSpec from "./RequisicaoProdutos/requisicaoValidaValoresAbnt.spec";

import requisicaoSolicitacaoComprasSpec from "./cadastroSolicitacaoCompras/cadastroValidaCamposObrigatorios.spec";
import cadastroSolicitacaoValidaSaldoFichaSpec from "./cadastroSolicitacaoCompras/cadastroSolicitacaoValidaSaldoFicha.spec";
import cadastroSolicitacaoCompras from "./cadastroSolicitacaoCompras/cadastroSolicitacaoCompras.spec";
class setup {
  constructor() {
    describe("Executa Suite Modulo Compras", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        cy.wait(5000);
      });
      //this.requisicaoCompras();
      //this.processoComprasDispensa();
      this.solicitacaoCompras();
    });
  }
  solicitacaoCompras() {
    //requisiçao]
    console.log("Chama solicitação de compras");
    //cadastroSolicitacaoValidaSaldoFichaSpec.validaSaldoFicha("5.000,00");
    cadastroSolicitacaoCompras.cadInsereDados();
    //requirsicaoSolicitacaoComprasSpec.ReqvalidaCampos();
    //requirsicaoSolicitacaoComprasSpec.reqInsereDados();
  }

  requisicaoCompras() {
    //requisiçao]
    console.log("Chama Requisicao COmpras");
    requisicaoInsereDadosSpec.reqInsereDados();
    requisicaoValidaCamposObrigatoriosAbntSpec.ReqvalidaCampos();
  }

  processoComprasDispensa() {
    //Executa Suite Processo de Compras Dispensa
    processoComprasDispensaRequisicaoSpec.requisicao();
    processoComprasDispensaCapaSpec.processoCompras();
    processoComprasDispensaFaseCredenciamentoSpec.credenciamento();
    processoComprasDispensaFaseJulgamentoSpec.julgamento();
    processoComprasDispensaGeraAutorizacaoCompraSpec.geraAutorizacao();
  }
}

export default new setup();
