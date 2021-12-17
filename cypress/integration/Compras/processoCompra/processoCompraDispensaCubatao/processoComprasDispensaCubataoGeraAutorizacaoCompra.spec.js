class processoComprasDispensaCubataoGeraAutorizacaoCompra {
  geraAutorizacaoCubatao() {
    it("Acessa - Fase Gera autorização de compra", () => {
      //Clica na Fase Gera autorização de compra
      cy.get('li[nat="Gera autorização de compra"]').click().wait(5000);

      //Seleciona Fornecedores vencedores
      cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
        .wait(500)
        .click()
        .type("{downarrow}")
        .type("{enter}");

      //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
      cy.get('button[title="Gerar autorização"]').click().wait(5000);

      //Informa local de estoque
      cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]')
        .type("ABASTECIMENTO")
        .wait(1000)
        .type("{enter}");

      //Clica em GERAR NOVA AUTORIZAÇÃO
      cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
        .click()
        .wait(5000);

      //Clica no botão para abrir o Pedido de Compras
      cy.get('button[title="Abrir pedido de compra"]').click().wait(5000);

      //cy.get('.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools > [ng-click="fechar()"] > .md-blue-theme')
      //fecha tela
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools > [ng-click="fechar()"] > .md-blue-theme'
      )
        .click()
        .wait(1000);

      //fecha a tela
      cy.get('button[ng-click="fechar()"]').click().wait(1000);

      /*  //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(1000);

      cy.get('[ng-click="fechar()"] > .md-blue-theme').type("{esc}").wait(1000); */
    });
  }
}

export default new processoComprasDispensaCubataoGeraAutorizacaoCompra();
