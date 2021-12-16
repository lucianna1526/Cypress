class processoComprasDispensaCubataoJulgamento {
  julgamentoCubatao() {
    it("Acessa - Fase Julgamento", () => {
      //Clica na Fase de julgamento
      cy.get('li[nat="Julgamento"]').click().wait(3000);

      //Informa valor unitario item 1
      cy.get('[role="row"]').contains("T DE 1/2").dblclick().wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7750");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 2
      cy.get('[role="row"]')
        .contains("SUPORTE PARA FERRO DE T 1/2")
        .dblclick()
        .wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7650");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 3
      cy.get('[role="row"]')
        .contains("REGISTRO ESFERA 1/2")
        .dblclick()
        .wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7751");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 4
      cy.get('[role="row"]').contains("UNIÃO 3/8").dblclick().wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7651");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 5
      cy.get('[role="row"]').contains("UNIÃO 1/2").dblclick().wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7649");
      cy.get(
        'button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]'
      ).click();

      //Informa valor unitario item 6
      cy.get('[role="row"]')
        .contains("POSTE DE CONCRETO")
        .dblclick()
        .wait(5000);
      cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
        .type("{selectall}")
        .type("1.7749");
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
export default new processoComprasDispensaCubataoJulgamento();
