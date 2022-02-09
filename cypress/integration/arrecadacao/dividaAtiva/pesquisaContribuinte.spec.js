//import acessaModuloCompras from '../AcessaModuloCompras'

class pesquisaContribuinte {
  atualizaDivida() {
    //describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
    it("Acessa Modulo Solicitação de compra", () => {
      cy.moduloMenu('Arrecadação','Contribuinte - CCP','Pesquisa de contribuinte');
    });
    it("Grava Capa Solicitação de Compra", () => {
      //Observação da solicitaçõ de compra
      cy.get('input[nat="consultaPessoaContribuinte"]', {timeout: 60000});

    });
  }
}
export default new pesquisaContribuinte();
