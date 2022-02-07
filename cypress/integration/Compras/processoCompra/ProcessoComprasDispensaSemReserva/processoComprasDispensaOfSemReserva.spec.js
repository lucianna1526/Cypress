class processoComprasDispensaOfEntregaSemReserva {
    entregaDispensaSemReserva() {
      it("Acessa Modulo Compras - Preenche Ordem de Fornecimento/Entrega", () => {
        cy.moduloMenu("COMPRAS E LICITAÇÕES","Autorização de entrega pelo pedido")
      });
      it("Seleciona ultimo Pedido de compras gerado", () => {
        //Clica em Pesquisar Pedido
        cy.get('button[nat="cadastroAutorizacaoEntregaPedidoPedidoPesquisa"]',{timeout:10000}).click();

        //aguarda grid carregar
        cy.get('div[nat="pesquisaPedidoCompraGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000});

        //Seleciona ultimo pedido na grid de pesquisa
        cy.get(
          '[nat="pesquisaPedidoCompraGrid"]'
        ).first();

        cy.get('[nat="botaoCarregar"]').first().click();

        //Clica em SALVAR
        cy.get('button[nat="cadastroAutorizacaoEntregaPedidoCrudSalvar"]',{timeout:10000}).click();

          //Valida Mensagem de sucesso
       cy.get(".md-toast-text",{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
      });
    }
  }
  
  export default new processoComprasDispensaOfEntregaSemReserva();
  