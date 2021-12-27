import Utils from "../Utils";

import processoComprasDispensaRequisicaoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaRequisicao.spec";
import processoComprasDispensaCapaSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaCapa.spec";
import processoComprasDispensaFaseCredenciamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseCredenciamento.spec";
import processoComprasDispensaFaseJulgamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseJulgamento.spec";
import processoComprasDispensaGeraAutorizacaoCompraSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaGeraAutorizacaoCompra.spec";

import requisicaoInsereDadosCubataoSpec from "./processoCompra/processoCompraDispensaCubatao/requisicaoInsereDadosCubatao.spec";
import requisicaoValidaCamposObrigatoriosCubataoSpec from "./processoCompra/processoCompraDispensaCubatao/requisicaoValidaCamposObrigatoriosCubatao.spec";
import requisicaoValidaValoresAbntCubataoSpec from "./processoCompra/processoCompraDispensaCubatao/requisicaoValidaValoresAbntCubatao.spec";
import processoComprasDispensaCubataoCapaSpec from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoCapa.spec";
import processoComprasDispensaCubataoFaseCredenciamentoSpec from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoFaseCredenciamento.spec";
import processoComprasDispensaCubataoFaseJulgamentoSpec from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoFaseJulgamento.spec";
import processoComprasDispensaCubataoGeraAutorizacaoCompraSpec from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoGeraAutorizacaoCompra.spec";
import processoComprasDispensaCubataoAbntSpec from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoAbnt.spec";
import processoComprasDispensaCubataoPedidoCompra from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoPedidoCompra.spec";
import processoComprasDispensaCubataoEms from "./processoCompra/processoCompraDispensaCubatao/processoComprasDispensaCubataoEms.spec";
import consultaSaldoFichaReservaSpec from "./processoCompra/processoCompraDispensaCubatao/consultaSaldoFichaReserva.spec";
import liberaRequisicaoComprasSpec from "./processoCompra/processoCompraDispensaCubatao/liberaRequisicaoCompras.spec";

import requisicaoInsereDadosSpec from "./RequisicaoProdutos/requisicaoInsereDados.spec";
import requisicaoValidaCamposObrigatoriosAbntSpec from "./RequisicaoProdutos/requisicaoValidaValoresAbnt.spec";

import requisicaoSolicitacaoComprasSpec from "./cadastroSolicitacaoCompras/cadastroValidaCamposObrigatorios.spec";
import cadastroSolicitacaoValidaSaldoFichaSpec from "./cadastroSolicitacaoCompras/cadastroSolicitacaoValidaSaldoFicha.spec";
import cadastroSolicitacaoCompras from "./cadastroSolicitacaoCompras/cadastroSolicitacaoCompras.spec";
//import requisicaoValidaValoresAbntCubataoSpec from "./processoCompra/processoCompraDispensaCubatao/requisicaoValidaValoresAbntCubatao.spec";
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
      this.processoComprasDispensaCubatao();
      //this.solicitacaoCompras();
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

  processoComprasDispensaCubatao() {
    //---Executa Suite Processo de Compras Dispensa Cubatao---//
    //requisicaoValidaCamposObrigatoriosCubataoSpec.validarCamposReqCubatao();

    //----Consulta saldo inicial, gera requisição e valida saldo final----/
    consultaSaldoFichaReservaSpec.consultaSaldoFichasInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaInicial();

    requisicaoInsereDadosCubataoSpec.reqInsereDadosCubatao();
    requisicaoValidaValoresAbntCubataoSpec.validaCamposAbntCubataoReq();

    consultaSaldoFichaReservaSpec.consultaSaldoFichasFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaFinal();

    //----Libera requisição de compra e valida o saldo inicial----/
    //liberaRequisicaoComprasSpec.liberaRequisicao();
    //consultaSaldoFichaReservaSpec.consultaSaldoFichasInicial();
    //consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoInicial();
    //consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaInicial();
    /* 
    processoComprasDispensaCubataoCapaSpec.processoComprasCubatao();
    processoComprasDispensaCubataoFaseCredenciamentoSpec.credenciamentoCubatao();
    processoComprasDispensaCubataoFaseJulgamentoSpec.julgamentoCubatao();
    processoComprasDispensaCubataoGeraAutorizacaoCompraSpec.geraAutorizacaoCubatao();
    processoComprasDispensaCubataoAbntSpec.validaCapa();
    processoComprasDispensaCubataoAbntSpec.validaJulgamento();
    processoComprasDispensaCubataoAbntSpec.validaAutorizacaoCompra();
    processoComprasDispensaCubataoPedidoCompra.pedidoCompraCubatao();
    processoComprasDispensaCubataoEms.emsCubatao();
    processoComprasDispensaCubataoEms.validaEmsCubatao();
    processoComprasDispensaCubataoEms.validaEmsCubataoAbaItem();
    processoComprasDispensaCubataoEms.validaEmsCubataoAbaDocumentos();
    processoComprasDispensaCubataoEms.validaEmsCubataoAbaParcela(); */
  }
}

export default new setup();
