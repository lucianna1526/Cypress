class notaPagamentoExclusao {
  excluiPagamento() {
    it("ORÇAMENTO: NP - Nota de pagamento Exclusao", () => {
      cy.moduloMenu("ORÇAMENTO", "NP - Nota de pagamento");
    });

    it("Nota de Pagamento - Valida Modal Pesquisa e insere numero de Ficha", () => {
      cy.get('button[nat="cadastroNotaPagamentoFichaPesquisa"]')
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
    }); //

    it("Nota de Pagamento - Valida Modal Pesquisa e insere numero de Empenho", () => {
      cy.get('button[nat="cadastroNotaPagamentoNrEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Nota de Pagamento - Valida Modal Pesquisa e insere numero da Liquidação", () => {
      cy.get('button[nat="cadastroNotaPagamentoNrLiquidacaoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });
    it("Nota de Pagamento - Seleciona a retencao do pagamento na grid e exclui", () => {
      //Seleciona a linha da grid de pagmento o valor R$ 6,00
      cy.gridClicar('div[nat="cadastroNotaPagamentoGrid"]', "6,00", "");

      //Seleciona a linha da grid de retencao do pagmento o texto 15 - INSS TERCEIROS
      cy.gridClicar(
        'div[nat="cadastroNotaPagamentoRetencaoGrid"]',
        "INSS TERCEIROS",
        ""
      );
      //Clica no botão de excluir
      cy.get(
        '[nat="pd-grid>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div:nth-of-type(5)>div>button',
        {
          timeout: 4000,
        }
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
    it("Nota de Pagamento - Seleciona o pagamento na grid e exclui", () => {
      //Seleciona a linha da grid de pagmento o valor R$ 6,00
      cy.gridClicar('div[nat="cadastroNotaPagamentoGrid"]', "6,00", "");

      cy.get(
        ':nth-child(5) > pd-grid > .pd-grid-div>[nat="cadastroNotaPagamentoGrid"]'
      ).as("grid");

      cy.get("@grid", { ensureScrollable: false })
        .contains("6,00") //varre procurando o elemento que contem o o valor da nota fiscal a ser replicada
        .first()
        .click()
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        });

      //Clica no botão de excluir
      cy.get('.ui-grid-cell-contents > .btn[nat="botaoExcluir"]', {
        timeout: 4000,
      }).click();
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

export default new notaPagamentoExclusao();
