class Utils {
  goHome() {
    cy.visit("/");
  }

  preencherLogin() {
    //cy.intercept("GET", "**/sigAutomacao/**").as("getUrl");
    cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu').as('getUrl');
    cy.get("#usuario").focus().type("automacao");
    cy.get("#iPassword").focus().type("1010");
    //clica em entrar
    cy.get("input.ng-scope").click();
    cy.wait("@getUrl",{timeout: 150000});
    cy.get('[nat="COMPRAS E LICITAÇÕES"]', { timeout: 30000 });
  }
  0;
}

export default new Utils();
