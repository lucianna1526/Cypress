class requisicaoValidaCamposObrigatoriosCubatao {
  validarCamposReqCubatao() {
    describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
      it("Acessa Modulo Compras", () => {
        cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
      });
      it("Valida campos obrigátorios", () => {
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]').click().wait(2000);
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Requisição de compras")
          .click()
          .type("{enter}");
        cy.wait(1000);
        cy.get('[nat="cadastroRequisicaoComprasCrudSalvar"]').click();
      });
    });
  }
}
export default new requisicaoValidaCamposObrigatoriosCubatao();
