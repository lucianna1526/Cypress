import Utils from "../Utils";

import notaEmpenhoSpec from "./NotaEmpenho/notaEmpenho.spec";
import notaEmpenhoFornecedorSpec from "./NotaEmpenho/notaEmpenhoFornecedor.spec";
import notaEmpenhoLicitacaoSpec from "./NotaEmpenho/notaEmpenhoLicitacao.spec";
import notaEmpenhoEventoHistoricoSpec from "./NotaEmpenho/notaEmpenhoEventoHistorico.spec";
import notaEmpenhoParcelasSpec from "./NotaEmpenho/notaEmpenhoParcelas.spec";

import notaLiquidacaoSpec from "./notaLiquidacao/notaLiquidacao.spec";
import notaLiquidacaoDocumentoSpec from "./notaLiquidacao/notaLiquidacaoDocumento.spec";

import notaPagamentoSpec from "./notaPagamento/notaPagamento.spec";
import notaLiquidacaoRetencoesSpec from "./notaLiquidacao/notaLiquidacaoRetencoes.spec";

import notaEmpenhoAnulacaoSpec from "./NotaEmpenho/notaEmpenhoAnulacao.spec";
import notaLiquidacaoAnulacaoSpec from "./notaLiquidacao/notaLiquidacaoAnulacao.spec";
import notaPagamentoAnulacaoSpec from "./notaPagamento/notaPagamentoAnulacao.spec";

import anulacaoPagamentoExclusaoSpec from "./notaPagamento/anulacaoPagamentoExclusao.spec";
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
    describe.skip("Fluxo - Nota de Empenho", () => {
      notaEmpenhoSpec.geraEmpenho();
      notaEmpenhoFornecedorSpec.geraEmpenhoFornecedor();
      notaEmpenhoLicitacaoSpec.geraEmpenhoLicitacao();
      notaEmpenhoEventoHistoricoSpec.geraEmpenhoEventoHistorico();
      notaEmpenhoParcelasSpec.geraEmpenhoParcela();
    });
    describe.skip("Fluxo - Nota de Liquidaçao", () => {
      notaLiquidacaoSpec.geraLiquidacao();
      notaLiquidacaoDocumentoSpec.geraLiquidacaoDocumentos();
      notaLiquidacaoRetencoesSpec.geraLiquidacaoRetencao();
    });
    describe.skip("Fluxo - Nota de Pagamento", () => {
      notaPagamentoSpec.geraPagamento();
    });

    describe.skip("Fluxo - Anulação de Empenho", () => {
      notaEmpenhoAnulacaoSpec.anulaEmpenho();
    });

    describe.skip("Fluxo - Anulação de Liquidação", () => {
      notaLiquidacaoAnulacaoSpec.anulaLiquidacao();
    });

    describe.skip("Fluxo - Anulação de Pagamento", () => {
      notaPagamentoAnulacaoSpec.anulaPagamento();
    });

    describe.skip("Fluxo de despesa sem reserva", () => {
      notaEmpenhoSpec.geraEmpenho();
      notaEmpenhoFornecedorSpec.geraEmpenhoFornecedor();
      notaEmpenhoLicitacaoSpec.geraEmpenhoLicitacao();
      notaEmpenhoEventoHistoricoSpec.geraEmpenhoEventoHistorico();
      notaEmpenhoParcelasSpec.geraEmpenhoParcela();

      notaEmpenhoAnulacaoSpec.anulaEmpenho();

      notaLiquidacaoSpec.geraLiquidacao();
      notaLiquidacaoDocumentoSpec.geraLiquidacaoDocumentos();
      notaLiquidacaoRetencoesSpec.geraLiquidacaoRetencao();

      notaLiquidacaoAnulacaoSpec.anulaLiquidacao();

      notaPagamentoSpec.geraPagamento();

      notaPagamentoAnulacaoSpec.anulaPagamento();
    });

    describe("Fluxo de exclusao da despesa sem reserva", () => {
      anulacaoPagamentoExclusaoSpec.excluiAnulacaoPagamento();
    });
  }
}

export default new setup();
