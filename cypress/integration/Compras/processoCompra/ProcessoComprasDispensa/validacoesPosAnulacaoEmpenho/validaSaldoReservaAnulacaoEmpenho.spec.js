class geraEmpenhoAposAnulacao {
    //Descrição: Após feito a anulação de empenho, marcando a flag: "Cancelar saldo da cotação", será feito
    // a validação da tentativa de se gerar um novo empenho na tela de gerar autorização de compras.
    validaGeraEmpenhoSaldoCotacaoCancelado(){
        it('Acessa - Fase Gera autorização de compra', () => {
                         
            cy.moduloMenu('COMPRAS E LICITAÇÕES', 'Gera autorização de compra');
           //Seleciona ultimo processo de compras na grid de pesquisa
      cy.get('button[nat="consultaAutorizacaoComprasNrCotacaoPesquisa"]')
      .click().wait(3000);
        cy.get(
          '[nat="pesquisaProcessoCompraGrid"]'
        ).first();

        cy.get('[nat="botaoCarregar"]').first().click();


         //Seleciona Fornecedores vencedores
         cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
         .wait(500)
         .click()
         .type('{downarrow}')
         .type('{enter}')

         //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
         cy.get('button[title="Gerar autorização"]')
         .click()
         //.wait(5000);

         //aguarda carregar grid
        cy.get('div[nat="popupGeraAutorizacaoComprasItensAutorizacaoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:60000})

          //Informa local de estoque
          cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]',{timeout: 10000})
          .type("FMMA - PRODUTOS")
          //.wait(1000)
          //.type("{enter}");
          
            cy.get('a[title="FMMA - PRODUTOS"]',{timeout:10000}).click();

          //Clica em GERAR NOVA AUTORIZAÇÃO
          cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
          .click()
          

          //Confirma validação da não existencia de saldo na cotação
      

      cy.get(".modal-body",{timeout:10000}).should(
        "have.text",
        "Não existe itens com saldo a ser gerado, nos filtros informados!"
      );

      cy.get('button[nat="pdBtnAlertOK"]',{timeout:10000}).click();

      cy.get('button[ng-click="fechar()"]').first().click();

        })
    }

    excluiAnulacaoSaldoCotacao(){
        //Descrição: Após feito a anulação de empenho, marcando a flag: "Cancelar saldo da cotação", 
        //será feito a exclusão dessa anualação e gerado uma nova anulação marcando a flag: "Não reservar novamente".
        it('Exclui Anulação de Empenho  flag: "Cancelar saldo da cotação"', () => {
        
            cy.moduloMenu('COMPRAS E LICITAÇÕES', 'Anulação de empenho');
        
    });
    it("Anulação de Empenho", () => {
      cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
      
      //Aguarda o load da grid
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 });

      //seleciona todos os elementos da grid
      cy.get('.ui-grid-selection-row-header-buttons').eq(0).click();
        })

    it("Exclui Anulação de Empenho", () => {
//seleciona a anualação do item depois que volta do modal
cy.get('div[nat="cadastroAnulacaoEmpenhoComprasGrid1"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 }).click();

//exlui a anulação do item
cy.get('button[nat="cadastroAnulacaoEmpenhoComprasExcluirAnulacao"]',{ timeout: 10000 }).click();

//confirma exclusão
cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();

//valida exclusão
cy.get(".md-toast-text").should("have.text", "      Anulação removida com sucesso!    ");
    });
    }

    geraEmpenhoAposExcluiAnulacao(){
      
      //Descrição: Após excluir a anulação de empenho, será gerado um novo pedido de compras e gerado um novo empenho.
        it('Acessa - Fase Gera autorização de compra e gera novo empenho', () => {
            //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
          cy.moduloMenu('COMPRAS E LICITAÇÕES', 'Gera autorização de compra');
            
  //Seleciona ultimo processo de compras na grid de pesquisa
  cy.get('button[nat="consultaAutorizacaoComprasNrCotacaoPesquisa"]')
  .click().wait(3000);
    cy.get(
      '[nat="pesquisaProcessoCompraGrid"]'
    ).first();

    cy.get('[nat="botaoCarregar"]').first().click();


     //Seleciona Fornecedores vencedores
     cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
     .wait(500)
     .click()
     .type('{downarrow}')
     .type('{enter}')

     //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
     cy.get('button[title="Gerar autorização"]')
     .click()
     .wait(5000);

          
            //Informa local de estoque
            cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]')
            .type("FMMA - PRODUTOS")
            .wait(1000)
            .type("{enter}");

            //Clica em GERAR NOVA AUTORIZAÇÃO
            cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
            .click()
            .wait(5000)
            //Aperta ESC pra sair das telas
            cy.get('[ng-click="fechar()"]').first().click().wait(5000);
        });
    } 
}

export default new geraEmpenhoAposAnulacao();