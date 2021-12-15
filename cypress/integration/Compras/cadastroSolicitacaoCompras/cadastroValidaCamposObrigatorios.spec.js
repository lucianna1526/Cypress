class requisicaoValidaCamposObrigatorios {
  ReqvalidaCampos() {
    describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
      it("Acessa Modulo Compras", () => {
        cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
      });
      it("Valida campos obrigátorios", () => {
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]').click().wait(2000);
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Solicitação de compra")
          .click()
          .type("{enter}")
          .wait(1000);

        cy.get('button[nat="Salvar"]').click().wait(1000);

        cy.get(".has-error > div").should("have.length", 1);
        cy.get("[id='sigModule']").should("contain", "Campo obrigatório");
      });
    });
  }
}
export default new requisicaoValidaCamposObrigatorios();
