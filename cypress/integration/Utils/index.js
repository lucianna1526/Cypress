class Utils {
  goHome() {
    cy.visit("/");
  }

  preencherLogin() {
    cy.intercept("GET", "**/sigAutomacao/**").as("getUrl");
    cy.get("#usuario").focus().type("jwm");
    cy.get("#iPassword").focus().type("1010");
    //clica em entrar
    cy.get("input.ng-scope").click();
    cy.wait("@getUrl");
  }
}

export default new Utils();
