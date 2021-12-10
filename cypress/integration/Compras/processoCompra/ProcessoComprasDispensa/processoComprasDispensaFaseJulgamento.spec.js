
class processoComprasDispensaJulgamento {
  julgamento() {
    it("Acessa - Fase Julgamento", () => {
      //Clica na Fase de julgamento
      cy.get('li[nat="Julgamento"]').click().wait(3000);

      //Informa valor unitario item 1
      cy.get('[role="row"]').contains("LUPA").dblclick().wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.5576");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 2
      cy.get('[role="row"]').contains("QUADRO BRANCO").dblclick().wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.5676");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Julgar
      cy.get('button[nat="cadastroPrecosFornecedoresJulgar"]').click();

      //Data da homologação/fechamento - Abre calendario
      cy.get(
        'button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoPopUp"]'
      ).click();

      //Data da homologação/fechamento - Seleciona data
      cy.get('ul[role="presentation"]>li>span>button[ng-disabled]').click();

      //Salva Homologação
      cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoAux"]')
        .click()
        .wait(3000);

      //##############FIM-JULGAMENTO###################
    });
    
  }
}
export default new processoComprasDispensaJulgamento();
