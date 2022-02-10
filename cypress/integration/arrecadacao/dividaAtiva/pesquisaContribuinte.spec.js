//import acessaModuloCompras from '../AcessaModuloCompras'

class pesquisaContribuinte {
  atualizaDivida() {
    //describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
    it("ARRECADAÇÃO: Contribuinte - CCP", () => {
      cy.moduloMenu('ARRECADAÇÃO','Contribuinte - CCP','Pesquisa de contribuinte');
    });
    it("Carrega Contribuinte", () => {
      //Observação da solicitaçõ de compra
      cy.get('input[nat="consultaPessoaContribuinte"]', {timeout: 60000});

      cy.get('[nat="consultaPessoaContribuintePesquisa"]').click();
      
      cy.get('div[nat="pesquisaPessoaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});

      cy.get('input[nat="pesquisaPessoaNome"]', {timeout: 60000}).type('keisciane');

      cy.get('[nat="pesquisaPessoaPesquisaPesquisar"]').click();

      cy.get('div[nat="pesquisaPessoaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});

      cy.get('[nat="botaoCarregar"]').first().click();

      cy.get('div[nat="consultaPessoaGridDuamItem"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000}).first();
    });
    it("Atualiza Divida", () => {
      cy.get('[nat="consultaPessoaAtualizaDivida"]').click();

      cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Divida atualizada com sucesso!');

      cy.get('.md-action').click({force: true});
    });
    it("Imprimir Duam",()=>{
      cy.get('[nat="consultaPessoaImprimirDuam"]').click();

      cy.get('div[nat="popupTalaoDividaDuamGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
      cy.get('[nat="popupTalaoDividaDuamImprimir"]',{timeout:10000}).click();

      cy.validaPDF("KEISCIANE");

      cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true});
    });
    it("Imprimir Duam",()=>{
      
    });

  }
}
export default new pesquisaContribuinte();
