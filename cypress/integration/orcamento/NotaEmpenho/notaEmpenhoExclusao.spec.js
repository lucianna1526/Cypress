class notaEmpenhoExclusao {
  excluiNotaEmpenho() {
    it("ORÇAMENTO: NE - Nota de empenho", () => {
      cy.moduloMenu("ORÇAMENTO", "NE - Nota de empenho");
    });

    it("Nota de Empenho/DadosNE - Exclui empenho", () => {
      cy.get('button[nat="cadastroNotaEmpenhoFichaPesquisa"]')
        .click()
        .wait(4000);
      cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {
        timeout: 100000,
      });
      cy.get('input[nat="fichaOrcamentariaFicha"]')
        .click()
        .type("20222090", { Delay: 10 });
      cy.get('button[nat="Pesquisar"]').click();
      cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {
        timeout: 60000,
      });
      cy.get('button[nat="botaoCarregar"]').first().click();

      cy.get('button[nat="cadastroNotaEmpenhoNrPreEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });
    it("Exclusao da Nota de Empenho", () => {
      //Clica no botão de excluir
      cy.get('button[nat="cadastroNotaEmpenhoCrudExcluir"]', {
        timeout: 4000,
      }).click();

      //valida alert "Tem certeza que deseja excluir o registro?"
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Tem certeza que deseja excluir o registro?"
      );
      cy.get(".modal-footer > .btn-default", { timeout: 5000 }).click();
      //Valida alert "Registro excluído com sucesso!"
      /*cy.get(".md-toast-text", { timeout: 5000 }).should(
        "contain",
        "Registro excluído com sucesso!"
      );*/
    });
  }
}

export default new notaEmpenhoExclusao();
