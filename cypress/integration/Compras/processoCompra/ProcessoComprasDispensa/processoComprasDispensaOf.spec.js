class processoComprasDispensaOfEntrega {
    entregaDispensa() {
      it("Acessa Modulo Compras", () => {
        /*if (cy.find('button[nat="botaoSideMenu"]').length == 0){
                  cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                  }*/
  
        cy.get("body").then(($body) => {
          if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
            cy.wait(5000);
            cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
            cy.wait(5000);
          }
        });
      });
  
      it("Preenche Ordem de Fornecimento/Entrega", () => {
        //Acessa Pedido de Compras
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]').click();
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Autorização de entrega pelo pedido")
          .click()
          .type("{downarrow}")
          .type("{enter}");
      });

      it("Seleciona ultimo Pedido de compras gerado", () => {
        //Clica em Pesquisar Pedido
        cy.get('button[nat="cadastroAutorizacaoEntregaPedidoPedidoPesquisa"]').click();

        //Seleciona ultimo pedido na grid de pesquisa
        cy.get(
          '[nat="pesquisaPedidoCompraGrid"]'
        ).first();

        cy.get('[nat="botaoCarregar"]').first().click();

        //Clica em SALVAR
        cy.get('button[nat="cadastroAutorizacaoEntregaPedidoCrudSalvar"]').click();

          //Valida Mensagem de sucesso
       cy.get(".md-toast-text",{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
      });
    }
  }
  
  export default new processoComprasDispensaOfEntrega();
  