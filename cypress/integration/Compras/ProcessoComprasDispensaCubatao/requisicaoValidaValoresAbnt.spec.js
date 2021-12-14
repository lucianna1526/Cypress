class requisicaoValidaValoresAbnt {
  ReqvalidaCampos() {
    describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
      it("Acessa Modulo Compras", () => {
        /*if (cy.find('button[nat="botaoSideMenu"]').length == 0){
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                }*/

        cy.get("body").then(($body) => {
          // if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          //}
        });
      });
      it("Valida campos obrigátorios", () => {
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]').click();
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Requisição de compras")
          .click()
          .type("{enter}");
        cy.wait(1000);

        cy.get('[nat="cadastroRequisicaoComprasCrudLimpar"]')
          .click()
          .wait(5000);

        cy.get('button[nat="cadastroRequisicaoComprasCodigoAnterior"')
          .click()
          .wait(1000);
      });

      it("Validação PRINCIPAL->RESUMO Arredondamento Total Pedido", () => {
        cy.get(
          '[nat="cadastroRequisicaoComprasDadosPrincipaisTotalPedido"] > div>div>span'
        ).contains("10,62");
      });

      it("Validação PRINCIPAL->RESUMO Arredondamento Total Autorizado", () => {
        cy.get(
          '[nat="cadastroRequisicaoComprasDadosPrincipaisTotalAutorizado"] > div>div>span'
        ).contains("10,62");
      });

      it("Validação Valores na GRID", () => {
        cy.get('li[nat="Produtos"]').click().wait(1000);

        cy.get(
          'div[nat="cadastroRequisicaoComprasProdutosGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div'
        ).as("grid");

        cy.get("@grid").within(($list) => {
          //cy.screenshot('linhaGrid')
          cy.get('span:contains("1,77")').should("length", 7);
          /*
                        const $el = cy.find("selector")
                        if ($el.length > 0) {
                            cy.wrap($el).first().click();
                        }*/
        });
        cy.get("@grid").within(() => {
          cy.get('span:contains("1,76")').should("length", 7);
        });
        //cy.get('[role="gridcell"]>[class="ui-grid-cell-contents"]>span[title]').
        /*
                [role="gridcell"]>[class="ui-grid-cell-contents"]>span[title] soma dos produtos na requisição de compra
                [nat="cadastroRequisicaoComprasDadosPrincipaisTotalPedido"]>div>div>[class="form-control pd-label-input-leitura"] total pedido
                [nat="cadastroRequisicaoComprasDadosPrincipaisTotalAutorizado"]>div>div>[class="form-control pd-label-input-leitura"] total autorizado

                */
      });
      it("Validação Arredondamento SOMA Valor Autorizado", () => {
        cy.get(
          ".ui-grid-footer-cell-row > .ui-grid-coluiGrid-000A > .ui-grid-cell-contents > span"
        ).contains("10,62");
      });
      it("Validação Arredondamento SOMA Valor TOTAL", () => {
        cy.get(
          ".ui-grid-footer-cell-row > .ui-grid-coluiGrid-000A > .ui-grid-cell-contents > span"
        ).contains("10,62");
      });

      it("Validação 1 RETORNO BANCO - arredondamento 1,7750 para 1,78", () => {
        // --INSERE ITEM 1 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("76212", "1", "1.7750", "1,78");
      });

      it("Validação 2 RETORNO BANCO  - arredondamento 1,7650 para 1,176", () => {
        // --INSERE ITEM 2 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("73539", "1", "1.7650", "1,76");
      });

      it("Validação 3 RETORNO BANCO  RETORNO BANCO  - arredondamento 1,7751 para 1,78", () => {
        // --INSERE ITEM 3 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("73538", "1", "1.7751", "1,78");
      });

      it("Validação 4 RETORNO BANCO  - arredondamento 1,7651 para 1,77", () => {
        // --INSERE ITEM 4 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("73536", "1", "1.7651", "1,77");
      });

      it("Validação 5 RETORNO BANCO  - arredondamento 1,7649 para 1,76", () => {
        // --INSERE ITEM 5 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("73534", "1", "1.7649", "1,76");
      });

      it("Validação 6 RETORNO BANCO  - arredondamento 1,7749 para 1,79", () => {
        // --INSERE ITEM 5 NA REQUISIÇÃO--
        cy.requisicaoValidaProduto("73257", "1", "1.7749", "1,77");
      });
    });
  }
}
export default new requisicaoValidaValoresAbnt();
