class requisicaoValidaSaldoFicha {
  validaSaldoFicha() {
    //describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
    it("COMPRAS E LICITAÇÕES: Saldo de fichas", () => {
        cy.moduloMenu("COMPRAS E LICITAÇÕES","Saldo de fichas");
    })
    it("Consulta Saldo Ficha", () => {
      

      cy.get('input[nat="consultaSaldoFichaFicha"]',{timeout:10000})
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
