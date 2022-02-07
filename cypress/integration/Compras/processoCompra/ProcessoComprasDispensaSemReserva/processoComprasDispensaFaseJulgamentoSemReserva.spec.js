
class processoComprasDispensaJulgamentoSemReserva {
  julgamentoSemReserva() {
    it("Acessa - Fase Julgamento", () => {
      //Clica na Fase de julgamento
      cy.get('li[nat="Julgamento"]').click();

      //aguarda carregar os dados na grid
      cy.get('div[nat="cadastroPrecosFornecedoresCotacaoFornecedorGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000});

      //Informa valor unitario item 1
      cy.get('div[nat="cadastroPrecosFornecedoresGridServiceGrid1"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000}).contains("PROCESSADOR").dblclick();
      
      
    });
  it("Coloca preço do julgamento do item", () => {
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]',{timout:10000})
        .type("{selectall}")
        .type("100.00");

      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Aguarda mensagem de confirmação
      cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
    });
    it("Finaliza Julgamento do item", () => {
      //Julgar
      cy.get('button[nat="cadastroPrecosFornecedoresJulgar"]').click();

       //Clicar em OK Popup 'Julgamento concluído com sucesso!'
       //cy.get('button[nat="pdPopupPromptConfirmOk"]').click().wait(2000);
       
       //Valida Mensagem de sucesso
      cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Julgamento concluído com sucesso!');

      //Data da homologação/fechamento - Abre calendario
      cy.get(
        'button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoPopUp"]'
      ).click();

      //Data da homologação/fechamento - Seleciona data
      cy.get('ul[role="presentation"]>li>span>button[ng-disabled]',{timeout:10000}).click();

      //Salva Homologação
      cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoAux"]')
        .click();
        

         //Clicar em OK Popup 'Data de homologação salva com sucesso.'
       //cy.get('button[nat="pdPopupPromptConfirmOk"]').click();
       //Valida Mensagem de sucesso
       cy.get(".md-toast-text",{timeout:10000}).should('contain', 'Data de homologação salva com sucesso.');
         

      //##############FIM-JULGAMENTO###################
    });
    
  }
}
export default new processoComprasDispensaJulgamentoSemReserva();
