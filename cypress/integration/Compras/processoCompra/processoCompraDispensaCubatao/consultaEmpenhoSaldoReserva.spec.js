class consultaEmpenhoSaldoReserva {
  /*---Valida o saldo da reserva, quando o empenho gerado foi no valor total
     e o campo manter saldo da reserva está como SIM---*/
  validaEmpenhoSaldoReservaSim() {
    it("Valida empenho gerado utilizando valor total da reserva", () => {
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.wait(5000);
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          cy.wait(5000);

          //Acessa Pedido de Compras
          cy.get('button[nat="botaoSideMenu"]').click();
          cy.get('input[nat="buscaMenuVertical"]')
            .type("Pedido de compra")
            .click()
            .type("{downarrow}")
            .type("{enter}");

          //Volta para o ultimo pedido
          cy.get('button[nat="cadastroPedidoCompraNPedidoAnterior"]')
            .click()
            .wait(3000);

          //Clica na Aba - Dados orçamentários
          cy.get('[nat="Dados orçamentários"] > .nav-link').click();
          cy.get('[nat="botaoEditar"]').click();

          //Valida grid da Parcela, se o valor da parcela é igual ao valor da reserva
          cy.get(
            'div[nat="cadastroPedidoCompraDadosOrcamentariosParcelasEmpenhoGrid"]'
          ).as("grid");

          cy.get("@grid").contains("10,62").should("length", 1);

          //Valida Span na tela Cadastro de Parcelas do Pedido de Compras com valor total da reserva R$ 10,62
          cy.get(
            '[nat="cadastroPedidoCompraParcelaValorPedido"]>div>div>span>span'
          )
            .should("have.text", "10,62")
            .wait(1000)
            .type("{esc}")
            .wait(2000);

          //Acessa tela de cadastro de requisição de compras
          cy.get('button[nat="botaoSideMenu"]').click();
          cy.get('input[nat="buscaMenuVertical"]')
            .type("Requisição de compras")
            .type("{downarrow}")
            .click()
            .type("{enter}");

          //Volta para a ultima requisição
          cy.get('button[nat="cadastroRequisicaoComprasCodigoAnterior"]')
            .click()
            .wait(3000);

          //Clica na Aba - Reserva
          cy.get('li[nat="Reservas"]').click().wait(1000);
          cy.get('div[nat="cadastroRequisicaoComprasReservasGrid"]').as("grid");

          cy.get("@grid")
            .find('button[nat="botaoAuditar"]')
            .parents(".ui-grid-row")
            .find(".ui-grid-cell-contents")
            .as("coluna");

          //Valor Reservado R$ 10,62 - Grid
          cy.get("@coluna").eq(3).contains("10,62").should("length", 1);

          //Valor suplementado R$ 10,62 - Grid
          cy.get("@coluna").eq(4).contains("10,62").should("length", 1);

          //Valor Total R$ 10,62 - Rodapé Grid
          cy.get('div[nat="cadastroRequisicaoComprasReservasGrid"]')
            .find(".ui-grid-footer-cell")
            .as("footer");

          cy.get("@footer").eq(3).contains("10,62").should("length", 1);

          cy.get("@footer").eq(4).contains("10,62").should("length", 1);
        }
      });
    });
  }
}

export default new consultaEmpenhoSaldoReserva();
