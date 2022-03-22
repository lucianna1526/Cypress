class notaEmpenhoAnulacaoExclusao {
  excluiAnulacaoEmpenho() {
    it("ORÇAMENTO: NE - Nota de empenho", () => {
      cy.moduloMenu("ORÇAMENTO", "ANE - Anulação de empenho");
    });

    it("Nota de Empenho / Anulação de Empenho - Valida Modal Pesquisa e insere numero de Ficha", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoEmpenhoFichaPesquisa"]').click().wait(4000);
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

      //Pesquisa Pre Empenho
      cy.get('button[nat="anulacaoEmpenhoPreEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });
    it("Seleciona grid da anulacao do empenho", () => {
      //Seleciona a linha da grid da liquidacao com valor R$ 1,00
      cy.gridClicar('div[nat="anulacaoEmpenhoGrid"]', "1,00", "");
    });
    it("Seleciona na grid a anulacao do empenho e exclui", () => {
      //Clica no botão de excluir
      cy.get(
        '[nat="anulacaoEmpenhoGrid"] .ui-grid-cell-contents [nat="botaoExcluir"]',
        { timeout: 4000 }
      ).click();

      //valida alert "Tem certeza que deseja excluir o registro?"
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Tem certeza que deseja excluir o registro?"
      );
      cy.get(".modal-footer > .btn-default", { timeout: 5000 }).click();
      //Valida alert "Registro excluído com sucesso!"
      cy.get(".md-toast-text", { timeout: 5000 }).should(
        "contain",
        "Registro excluído com sucesso!"
      );
    });
  }
}

export default new notaEmpenhoAnulacaoExclusao();
