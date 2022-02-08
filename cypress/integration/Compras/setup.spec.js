import Utils from "../Utils";

//--Processo compras Dispensa sem reserva--//
import ativaDesativaReservaDotacaoSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/ativaDesativaReservaDotacaoSemReserva.spec";
import processoComprasDispensaRequisicaoSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaRequisicaoSemReserva.spec";
import consultaSaldoFichaReservaDispensaSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/consultaSaldoFichaReservaDispensaSemReserva.spec";
import processoComprasDispensaCapaSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaCapaSemReserva.spec";
import processoComprasDispensaFaseCredenciamentoSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaFaseCredenciamentoSemReserva.spec";
import processoComprasDispensaFaseJulgamentoSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaFaseJulgamentoSemReserva.spec";
import processoComprasDispensaGeraAutorizacaoCompraSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaGeraAutorizacaoCompraSemReserva.spec";
import processoComprasDispensaPedidoComprasSemReservaSpec from "././processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaPedidoCompraSemReserva.spec";
import processoComprasDispensaOfSemReservaSpec from './processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaOfSemReserva.spec'
import processoComprasDispensaEmsSemReservaSpec from "././processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaEmsSemReserva.spec"
import processoComprasDispensaValidaPedidoSimNaoSemReservaSpec from './processoCompra/ProcessoComprasDispensaSemReserva/processoComprasDispensaValidaPedidoSimNaoSemReserva.spec'	
import anulacaoEmpenhoDispensaSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/anulacaoEmpenhoDispensaSemReserva.spec";
import validaSaldoReservaAnulacaoEmpenhoSemReservaSpec from "./processoCompra/ProcessoComprasDispensaSemReserva/validacoesPosAnulacaoEmpenhoSemReserva/validaSaldoReservaAnulacaoEmpenhoSemReserva.spec";
import cancelaLiberacaoRequisicaoComprasSemReservaSpec from './processoCompra/ProcessoComprasDispensaSemReserva/cancelaLiberacaoRequisicaoComprasSemReserva.spec';
import liberaRequisicaoComprasSemReservaSpec from './processoCompra/ProcessoComprasDispensaSemReserva/liberaRequisicaoComprasSemReserva.spec';

//--Processo Compras Dispensa com Reserva--//
import consultaSaldoFichaReservaDispensaSpec from "./processoCompra/ProcessoComprasDispensa/consultaSaldoFichaReservaDispensa.spec";
import processoComprasDispensaRequisicaoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaRequisicao.spec";
import processoComprasDispensaCapaSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaCapa.spec";
import processoComprasDispensaFaseCredenciamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseCredenciamento.spec";
import processoComprasDispensaFaseJulgamentoSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaFaseJulgamento.spec";
import processoComprasDispensaGeraAutorizacaoCompraSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaGeraAutorizacaoCompra.spec";
import processoComprasDispensaPedidoComprasSpec from "././processoCompra/ProcessoComprasDispensa/processoComprasDispensaPedidoCompra.spec";
import processoComprasDispensaOfSpec from './processoCompra/ProcessoComprasDispensa/processoComprasDispensaOf.spec'
import processoComprasDispensaValidaPedidoSimNaoSpec from './processoCompra/ProcessoComprasDispensa/processoComprasDispensaValidaPedidoSimNao.spec'	
import processoComprasDispensaEmsSpec from "././processoCompra/ProcessoComprasDispensa/processoComprasDispensaEms.spec"
import anulacaoEmpenhoDispensaSpec from "./processoCompra/ProcessoComprasDispensa/anulacaoEmpenhoDispensa.spec";
import validaSaldoReservaAnulacaoEmpenhoSpec from "./processoCompra/ProcessoComprasDispensa/validacoesPosAnulacaoEmpenho/validaSaldoReservaAnulacaoEmpenho.spec";
import cancelaLiberacaoRequisicaoComprasSpec from "./processoCompra/processoCompraDispensaCubatao/cancelaLiberacaoRequisicaoCompras.spec";
//-----------------------------//

//--Processo Compras Dispensa Cubatão--//
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
import consultaSaldoFichaReservaSpec from "./processoCompra/processoCompraDispensaCubatao/consultaSaldoFichaReservaDispensa.spec";
import liberaRequisicaoComprasSpec from "./processoCompra/processoCompraDispensaCubatao/liberaRequisicaoCompras.spec";
import cancelaLiberacaoRequisicaoCompras from "./processoCompra/processoCompraDispensaCubatao/cancelaLiberacaoRequisicaoCompras.spec";
import consultaEmpenhoSaldoReservaSpec from "./processoCompra/processoCompraDispensaCubatao/consultaEmpenhoSaldoReserva.spec";
import validaSaldoReservaPedidoComprasSpec from "./processoCompra/processoCompraDispensaCubatao/validaSaldosReservaPedidoCompras/validaSaldoReservaPedidoCompras.spec";



import requisicaoInsereDadosSpec from "./RequisicaoProdutos/requisicaoInsereDados.spec";
import requisicaoValidaCamposObrigatoriosAbntSpec from "./RequisicaoProdutos/requisicaoValidaValoresAbnt.spec";

import requisicaoSolicitacaoComprasSpec from "./cadastroSolicitacaoCompras/cadastroValidaCamposObrigatorios.spec";
import cadastroSolicitacaoValidaSaldoFichaSpec from "./cadastroSolicitacaoCompras/cadastroSolicitacaoValidaSaldoFicha.spec";
import cadastroSolicitacaoCompras from "./cadastroSolicitacaoCompras/cadastroSolicitacaoCompras.spec";

//import requisicaoValidaValoresAbntCubataoSpec from "./processoCompra/processoCompraDispensaCubatao/requisicaoValidaValoresAbntCubatao.spec";

import ativaDesativaReservaDotacaoSpec from "./processoCompra/ProcessoComprasDispensa/ativaDesativaReservaDotacao.spec";
import anulacaoEmpenhoSpec from "./processoCompra/processoCompraDispensaCubatao/anulacaoEmpenho.spec";
import processoComprasDispensaValidaPedidoSIMNAOSpec from "./processoCompra/ProcessoComprasDispensa/processoComprasDispensaValidaPedidoSIMNAO.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Compras", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      //this.requisicaoCompras();
      //this.processoComprasDispensa();
      this.processoComprasDispensaSemReserva();
      //this.processoComprasDispensaCubatao();
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
   //requisicaoInsereDadosSpec.reqInsereDados();
    //requisicaoValidaCamposObrigatoriosAbntSpec.ReqvalidaCampos();    
  }

  processoComprasDispensa() {
    //Executa Suite Processo de Compras Dispensa com Reserva de Dotação
   
    describe("Parte 1", () => { 
    ativaDesativaReservaDotacaoSpec.ativaReserva();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoExecucaoOrcamentariaInicial(); 
    
    processoComprasDispensaRequisicaoSpec.requisicao();  
  
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasFinal();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoFinal();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoExecucaoOrcamentariaFinal();
    cancelaLiberacaoRequisicaoComprasSpec.cancelaLiberacaoRequisicao();  

    liberaRequisicaoComprasSpec.liberaRequisicao();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoFinal();
    cancelaLiberacaoRequisicaoComprasSpec.cancelaLiberacaoRequisicao();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();

    liberaRequisicaoComprasSpec.liberaRequisicao();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoFinal();
    cancelaLiberacaoRequisicaoComprasSpec.cancelaLiberacaoRequisicao();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();
    liberaRequisicaoComprasSpec.liberaRequisicao();
    });


    describe("Parte 2", () => { 
    processoComprasDispensaCapaSpec.processoCompras();
    processoComprasDispensaFaseCredenciamentoSpec.credenciamento();
    processoComprasDispensaFaseJulgamentoSpec.julgamento();
    processoComprasDispensaGeraAutorizacaoCompraSpec.geraAutorizacao();
    processoComprasDispensaValidaPedidoSimNaoSpec.validaPedidoSimNao();
    processoComprasDispensaOfSpec.entregaDispensa();
    processoComprasDispensaEmsSpec.emsDispensa();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasFinal();
    });
    
    //PARTE 3
    describe("Parte 3", () => {
    anulacaoEmpenhoDispensaSpec.anulaEmpenhoEMS();
    anulacaoEmpenhoDispensaSpec.anulacaoEmpenho();  
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial(); 
    validaSaldoReservaAnulacaoEmpenhoSpec.validaGeraEmpenhoSaldoCotacaoCancelado();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();
    ativaDesativaReservaDotacaoSpec.desativaReserva();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoExecucaoOrcamentariaInicial();
    ativaDesativaReservaDotacaoSpec.ativaReserva(); 
    
 
    validaSaldoReservaAnulacaoEmpenhoSpec.validaGeraEmpenhoSaldoCotacaoCancelado()
    anulacaoEmpenhoDispensaSpec.excluiAnulacaoEmpenhoPedido();
    anulacaoEmpenhoDispensaSpec.anulacaoEmpenhoMantemSaldo();
    validaSaldoReservaAnulacaoEmpenhoSpec.geraEmpenhoAposExcluiAnulacao()   
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();  

    processoComprasDispensaValidaPedidoSimNaoSpec.validaPedidoSimNao(); 
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasFinal();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoFinal();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoExecucaoOrcamentariaFinal();
    anulacaoEmpenhoDispensaSpec.anulacaoEmpenho();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoFichasInicial();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaDispensaSpec.consultaSaldoExecucaoOrcamentariaInicial();
 });
   
    
  }

  processoComprasDispensaSemReserva() {
    describe("Parte 1", () => { 
      ativaDesativaReservaDotacaoSemReservaSpec.desativaReservaSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoReservaDotacaoInicialSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoExecucaoOrcamentariaInicialSemReserva(); 
      
      processoComprasDispensaRequisicaoSemReservaSpec.requisicaoSemReserva(); 
    
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva();     
      cancelaLiberacaoRequisicaoComprasSemReservaSpec.cancelaLiberacaoRequisicaoSemReserva();   
  
      liberaRequisicaoComprasSemReservaSpec.liberaRequisicaoSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva();     
      
      });
  /*
   
      describe("Parte 2", () => { 
      processoComprasDispensaCapaSemReservaSpec.processoComprasSemReserva();
      processoComprasDispensaFaseCredenciamentoSemReservaSpec.credenciamentoSemReserva();
      processoComprasDispensaFaseJulgamentoSemReservaSpec.julgamentoSemReserva();
      processoComprasDispensaGeraAutorizacaoCompraSemReservaSpec.geraAutorizacaoSemReserva();
      processoComprasDispensaValidaPedidoSimNaoSemReservaSpec.validaPedidoSimNaoSemReserva();
      processoComprasDispensaOfSemReservaSpec.entregaDispensaSemReserva();
      processoComprasDispensaEmsSemReservaSpec.emsDispensaSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasFinalSemReserva(); 
      });
      
      //PARTE 3
      describe("Parte 3", () => {
      anulacaoEmpenhoDispensaSemReservaSpec.anulaEmpenhoEMSSemReserva();
      anulacaoEmpenhoDispensaSemReservaSpec.anulacaoEmpenhoCancelaSaldoSemReserva() 
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva(); 
      validaSaldoReservaAnulacaoEmpenhoSemReservaSpec.validaGeraEmpenhoSaldoCotacaoCanceladoSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasFinalSemReserva();
      ativaDesativaReservaDotacaoSemReservaSpec.ativaReservaSemReserva(); 
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoReservaDotacaoFinalSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoExecucaoOrcamentariaFinalSemReserva();
      ativaDesativaReservaDotacaoSemReservaSpec.desativaReservaSemReserva(); 
      
   
      validaSaldoReservaAnulacaoEmpenhoSemReservaSpec.validaGeraEmpenhoSaldoCotacaoCanceladoSemReserva();
      anulacaoEmpenhoDispensaSemReservaSpec.excluiAnulacaoEmpenhoPedidoSemReserva();
      anulacaoEmpenhoDispensaSemReservaSpec.anulacaoEmpenhoMantemSaldoSemReserva();
      validaSaldoReservaAnulacaoEmpenhoSemReservaSpec.geraEmpenhoAposExcluiAnulacaoSemReserva()   
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva();  
  
      processoComprasDispensaValidaPedidoSimNaoSemReservaSpec.validaPedidoSimNaoSemReserva(); 
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasFinalSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoReservaDotacaoFinalSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoExecucaoOrcamentariaFinalSemReserva();
      anulacaoEmpenhoDispensaSemReservaSpec.anulacaoEmpenhoCancelaSaldoSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoFichasInicialSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoReservaDotacaoInicialSemReserva();
      consultaSaldoFichaReservaDispensaSemReservaSpec.consultaSaldoExecucaoOrcamentariaInicialSemReserva(); 
      });*/
  }

  processoComprasDispensaCubatao() {
    //---Executa Suite Processo de Compras Dispensa Cubatao---//
    //requisicaoValidaCamposObrigatoriosCubataoSpec.validarCamposReqCubatao();

    //----Consulta saldo inicial, gera requisição e valida saldo final----/
    //Parte 1 
   /*  consultaSaldoFichaReservaSpec.consultaSaldoFichasInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaInicial();

    requisicaoInsereDadosCubataoSpec.reqInsereDadosCubatao();
    requisicaoValidaValoresAbntCubataoSpec.validaCamposAbntCubataoReq();

    consultaSaldoFichaReservaSpec.consultaSaldoFichasFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaFinal(); 
    //----Libera requisição de compra e valida o saldo inicial----/

    cancelaLiberacaoRequisicaoComprasSpec.cancelaLiberacaoRequisicao();
    consultaSaldoFichaReservaSpec.consultaSaldoFichasInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoInicial();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaInicial();  
    liberaRequisicaoComprasSpec.liberaRequisicao();   */

    //Parte 2
  /*    processoComprasDispensaCubataoCapaSpec.processoComprasCubatao();
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

    /*   //Parte 3
      consultaEmpenhoSaldoReservaSpec.validaEmpenhoSaldoReservaSim();
      consultaSaldoFichaReservaSpec.consultaSaldoFichasFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoReservaDotacaoFinal();
    consultaSaldoFichaReservaSpec.consultaSaldoExecucaoOrcamentariaFinal(); 
    anulacaoEmpenhoSpec.anulaEmpenhoEMS();
   anulacaoEmpenhoSpec.anulacaoEmpenho();
    anulacaoEmpenhoSpec.validaSaldoFicha();   */

    validaSaldoReservaPedidoComprasSpec.validaSaldoInicialFicha();
    validaSaldoReservaPedidoComprasSpec.anulaLiquidacaoRemoveEms();
    validaSaldoReservaPedidoComprasSpec.excluiAnulacaoLiquidacao();
    validaSaldoReservaPedidoComprasSpec.anulacaoEmpenho();
    validaSaldoReservaPedidoComprasSpec.insereEntregaSemSaldo();
    validaSaldoReservaPedidoComprasSpec.validaSaldoFinalFicha();
    
  }
}

export default new setup();
