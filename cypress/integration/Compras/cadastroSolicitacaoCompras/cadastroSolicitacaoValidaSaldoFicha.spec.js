class requisicaoValidaSaldoFicha {
  validaSaldoFicha() {
    //describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
    it("Acessa Modulo Compras", () => {
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });
    });
    it("Consulta Saldo Ficha", () => {
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click().wait(2000);

      cy.get('input[nat="buscaMenuVertical"]')
        .type("Saldo de Fichas")
        .click()
        .type("{enter}")
        .wait(1000);

      cy.get('input[nat="consultaSaldoFichaFicha"]')
        .type("20211506")
        .tab()
        .wait(2000);

      cy.get('button[nat="consultaSaldoFichaPesquisar"]').click().wait(1000);

      cy.get('div[title="5.000,00"]>span').screenshot("SaldoFicha").should(
        "have.text",
        "5.000,00"
        //parseFloat(valorEsperado).toFixed(4).replace(".", ",")
      );

      /*EXEMPLO PROCURA BOTÂO NA GRID
        cy.get(
          'div[nat="consultaSaldoFichaGrid"]>div>div>div>div[class="ui-grid-canvas"]'
        )
          .screenshot("linhaGrid")
          .contains("20211506")
          .parents(".row")
          .find("button['botaoDeletar']")
          .click();*/
      cy.get('[title="Ir para menu geral"]').click();
    });
    //});
  }
}
export default new requisicaoValidaSaldoFicha();
