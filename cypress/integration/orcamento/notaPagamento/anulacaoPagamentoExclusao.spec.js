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
    it("Nota de Pagamento / Anulação de pagamento - Seleciona na GRID a retencao da anulacao de pagamento e exclui", () => {
      //Descomentar esse trecho para quando precisar excluir a retencao
      //Seleciona a linha da grid de pagmento o valor R$ 5,00
      /*cy.gridClicar('div[nat="anulacaoPagamentoGrid"]', "5,00", "");
      //Seleciona a linha da grid de retencao do pagmento o valor R$ 5,00
      cy.gridClicar(
        'div[nat="anulacaoPagamentoRentecaoGrid"]',
        "15 - INSS TERCEIROS",
        ""
      );
      //Clica no botão de excluir
      cy.get(
        "md-content#pdDivBody>div>ui-view>div>pd-index-modulo>div>div>div>pd-tela-padrao>div>form>div>div>pd-tela-padrao-body>div:nth-of-type(4)>pd-grid>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div:nth-of-type(11)>div>button"
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
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>.md-action").click();*/
    });
    it("Nota de Pagamento / Anulação de pagamento - Seleciona na GRID a anulacao de pagamento e exclui", () => {
      //Seleciona a linha da grid de pagmento o valor R$ 5,00
      cy.gridClicar('div[nat="anulacaoPagamentoGrid"]', "5,00", "").click();
      //Clica no botão de excluir
      cy.get(
        "md-content#pdDivBody>div>ui-view>div>pd-index-modulo>div>div>div>pd-tela-padrao>div>form>div>div>pd-tela-padrao-body>div:nth-of-type(4)>pd-grid>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div:nth-of-type(11)>div>button"
      ).click();
      //valida alert "Tem certeza que deseja excluir o registro?"
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Tem certeza que deseja excluir o registro?"
      );
      cy.get(".modal-footer > .btn-default").click();
      cy.wait(4000);
      //Valida alert "Registro excluído com sucesso!"
      cy.get(".md-toast-text", { timeout: 6000 }).should(
        "contain",
        "Registro excluído com sucesso!"
      );
    });
  }
}
export default new anulacaoPagamentoExclusao();
