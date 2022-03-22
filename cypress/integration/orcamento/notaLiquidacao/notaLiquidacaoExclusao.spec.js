class notaLiquidacaoExclusao {
  excluiNotaLiquidacao() {
    it("ORÇAMENTO: NL - Nota de liquidação", () => {
      cy.moduloMenu("ORÇAMENTO", "NL - Nota de liquidação");
    });

    it("Nota de Liquidação - Exclusao", () => {
      cy.get('button[nat="cadastroNotaLiquidacaoFichaPesquisa"]')
        .click()
        .wait(2000);
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
      cy.get('button[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Seleciona grid nota de liquidacao", () => {
      //Seleciona a linha da grid da liquidacao com valor R$ 8,00
      cy.gridClicar(
        'div[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]',
        "8,00",
        ""
      );
    });

    it("Seleciona na grid a nota de liquidacao e exclui a retencao", () => {
      //Seleciona a linha da grid da retencao da liquidacao com valor R$ 1,00
      cy.get('div[nat="cadastroNotaLiquidacaoRetencoes"]').as("grid");

      cy.get("@grid", { ensureScrollable: false })
        .contains("1,00") //varre procurando o elemento que contem o o valor da nota fiscal a ser replicada
        .first()
        .click()
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        });

      //Clica no botão de excluir
      cy.get(
        '[nat="cadastroNotaLiquidacaoRetencoes"] .ui-grid-cell-contents [nat="botaoExcluir"]',
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
    it("Seleciona na grid a nota de liquidacao e exclui o documento fiscal", () => {
      //Seleciona a linha da grid da anulacao da liquidacao com valor R$ 1,00
      //cy.gridClicar('div[nat="anulacaoLiquidacaoRetencaoGrid""]', "1,00", "");

      //Clica no botão de excluir
      cy.get(
        '[nat="cadastroNotaLiquidacaoDocumentosGrid"] .ui-grid-cell-contents [nat="botaoExcluir"]',
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

    it("Seleciona na grid a nota de liquidacao e exclui", () => {
      //Seleciona a linha da grid da anulacao da liquidacao com valor R$ 1,00
      // cy.gridClicar('div[nat="anulacaoLiquidacaoGrid"]', "1,00", "");

      //Clica no botão de excluir
      cy.get(
        '[nat="cadastroNotaLiquidacaoLiquidacoesGrid"] .ui-grid-cell-contents [nat="botaoExcluir"]',
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

export default new notaLiquidacaoExclusao();
