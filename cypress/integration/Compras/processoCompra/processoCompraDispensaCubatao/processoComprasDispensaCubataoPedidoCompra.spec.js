import { formatedDate2PtBR } from "../../../Utils/helpers.js";
class processoComprasDispensaCubataoPedidoCompra {
  pedidoCompraCubatao() {
    it("Pedido de Compras - Adiciona Parcela e Gera Empenho", () => {
      /* if (cy.find('button[nat="botaoSideMenu"]').length == 0) {
        cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
      }

      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.wait(10000);
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          cy.wait(10000);
        }
      });
    }); */

      /* it("Preenche Pedido de Compras", () => {
      //Acessa Pedido de Compras
      cy.wait(10000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Pedido de compra")
        .click()
        .type("{downarrow}")
        .type("{enter}"); */

      //seleciona Pedido -- descomente esse trecho para teste direto no pedido
      /* cy.get('input[nat="cadastroPedidoCompraNPedido"]')
        .type("17276")
        .type("{enter}");
        //Volta para o ultimo pedido
        cy.get('button[nat="cadastroPedidoCompraNPedidoAnterior"]')
        .click()
        .wait(3000);
        cy.wait(10000); */

      //Clica na Aba - Dados orçamentários

      cy.get('[nat="Dados orçamentários"] > .nav-link').click();

      //Manter saldo da reserva
      cy.get('[nat="cadastroPedidoCompraDadosOrcamentariosManterSaldoSelect"]')
        .click()
        .type("SIM")
        .wait(500)
        .type("{enter}");

      //Tipo de empenho
      cy.get('[nat="cadastroPedidoCompraDadosOrcamentariosTipoEmpenhoSelect"]')
        .click()
        .type("Ordinário")
        .wait(500)
        .type("{enter}");

      //Clica no botão SALVAR - Pedido de compra
      cy.get('[nat="cadastroPedidoCompraCrudSalvar"]').click().wait(5000);

      //---Insere Parcela---
      //Clica no botão ADICIONAR - Grid Parcela
      cy.get(
        '[nat="cadastroPedidoCompraDadosOrcamentariosParcelasEmpenhoGridabrirTelaDeCadastro"]'
      ).click();

      //Nº Parcela
      cy.get('input[nat="cadastroPedidoCompraParcelaNParcela"]')
        .wait(1000)
        .tab();

      //Data Vencimento
      cy.get('input[nat="cadastroPedidoCompraParcelaDataVencimento"]')
        .dblclick()
        .type(formatedDate2PtBR());
      //.type(joiformatedDate2PtBR());

      //Valor Parcela
      cy.get('input[nat="cadastroPedidoCompraParcelaValorParcela"]').type(
        "10,62"
      );

      //Adicionar e Sair
      cy.get(
        'button[nat="cadastroPedidoCompraParcelaCrudSalvarFechar"]'
      ).click();

      //---Fim Parcela---

      //Gerar Empenho
      cy.get('[nat="cadastroPedidoCompraGerarEmpenho"]').click().wait(8000);

      //Gera Entrega
      cy.get('[nat="cadastroPedidoCompraAbrirAutorizaçãoEntrega"]')
        .click()
        .wait(2000);
      //Adicionar Entrega
      cy.get('[nat="cadastroAutorizacaoEntregaPedidoCrudSalvar"]')
        .click()
        .wait(2000);
      //Clica botao EMS
      cy.get('[nat="cadastroAutorizacaoEntregaPedidoAbrirEms"]')
        .click()
        .wait(2000);
    });
  }
}

export default new processoComprasDispensaCubataoPedidoCompra();
