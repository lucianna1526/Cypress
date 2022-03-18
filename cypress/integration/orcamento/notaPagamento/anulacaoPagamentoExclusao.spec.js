class anulacaoPagamentoExclusao {
  excluiAnulacaoPagamento() {
    it("ORÇAMENTO: ANP - EXCLUSAO da Anulação de Pagamento", () => {
      cy.moduloMenu("ORÇAMENTO", "ANP - Anulação de pagamento");
    });

    it("Nota de Pagamento / Anulação de pagamento - Valida Exclusao da Anulaçao de Pagamento", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoPagamentoFichaPesquisa"]').click().wait(4000);
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
      cy.get('button[nat="anulacaoPagamentoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa Liquidação
      cy.get('button[nat="anulacaoPagamentoLiquidacaoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa pagamento
      cy.get('button[nat="anulacaoPagamentoPagamentoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });
  }
}
export default new anulacaoPagamentoExclusao();
