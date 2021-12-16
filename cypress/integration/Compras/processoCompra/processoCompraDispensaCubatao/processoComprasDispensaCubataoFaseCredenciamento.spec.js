class processoComprasDispensaCubataoFaseCredenciamento {
  credenciamentoCubatao() {
    it("Acessa - Fase Credenciamento", () => {
      //Clica na aba de credenciamento
      cy.get('li[nat="Credenciamento"]').click().wait(1000);

      //Abre modal credenciamento
      cy.get(
        'button[nat="consultaFornecedorCotacaoFornedorGridabrirTelaDeCadastro"]'
      )
        .click()
        .wait(5000);

      //Informa o CNPJ do fornecedor
      cy.get('input[nat="cadastroFornecedorCotacaoFornecedor"]')
        .click()
        .type("2744987000184")
        .tab();

      //Salva e fecha o modal
      cy.get('button[nat="cadastroFornecedorCotacaoCrudSalvarFechar"]')
        .click()
        .wait(3000);

      //##############FIM-CREDENCIAMENTO###################
    });
  }
}
export default new processoComprasDispensaCubataoFaseCredenciamento();
