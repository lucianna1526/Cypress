class anulacaoNotaLiquidacaoExclusao {
  excluiAnulacaoNotaLiquidacao() {
    it("ORÇAMENTO: ANL - Anulação de liquidação", () => {
      cy.moduloMenu("ORÇAMENTO", "ANL - Anulação de liquidação");
    });

    it("Nota de Liquidação / Anulação de liquidação - Seleciona anulacao para exclusao", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoLiquidacaoFichaPesquisa"]')
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

      //Pesquisa Pre Empenho
      cy.get('button[nat="anulacaoLiquidacaoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa liquidação
      cy.get('button[nat="anulacaoLiquidacaoLiquidacaoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Seleciona grid nota de liquidacao", () => {
      //Seleciona a linha da grid da anulacao da liquidacao com valor R$ 1,00
      cy.gridClicar('div[nat="anulacaoLiquidacaoGrid"]', "1,00", "");
    });

    it("Seleciona grid nota de liquidacao e exclui o documento fiscal", () => {
      //Seleciona a linha da grid da anulacao da liquidacao com valor R$ 1,00
      cy.gridClicar(
        'div[nat="anulacaoLiquidacaoDocumentosFiscaisGrid"]',
        "8,00",
        ""
      );
      //Seleciona a linha da grid da anulacao da liquidacao com valor R$ 1,00
      cy.gridClicar('div[nat="anulacaoLiquidacaoGrid"]', "1,00", "");

      //Clica no botão de excluir
      //cy.get(":nth-of-type(10)>div>button", { timeout: 4000 }).click();

      cy.get(
        'div[nat="anulacaoLiquidacaoDocumentosFiscaisGrid"] [nat=botaoExcluir]',
        { timeout: 4000 }
      ).click();

      //valida alert "Tem certeza que deseja excluir o registro?"
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Tem certeza que deseja excluir o registro?"
      );
      cy.get(".modal-footer > .btn-default").click();
      //Valida alert "Registro excluído com sucesso!"
      cy.get(".md-toast-text", { timeout: 1000 }).should(
        "contain",
        "Registro excluído com sucesso!"
      );
      cy.get(".md-toast-content>.md-action").click();
    });
  }
}

export default new anulacaoNotaLiquidacaoExclusao();
