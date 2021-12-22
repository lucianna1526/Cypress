class liberaRequisicaoCompras {
  //Libera requisição de compras
  //Descrição: Libera requisição de compras para validar saldo da ficha
  //Status: Em desenvolvimento
  //Autor: Jeandes Wesley
  //Data: 22/12/2021
  //Observação:
  //*****************************************************************************************************************************
  //Função para consultar o saldo Inicial da ficha modulo compras tela - Saldo de ficha
  liberaRequisicao() {
    it("Cancela liberação de requisição de compras", () => {
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });
      //Acessa Saldo de fichas
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Libera requisições compras")
        .click()
        .type("{enter}");
      cy.wait(2000);

      //Informa o TIPO
      cy.get('[nat="liberaRequisicaoComprasTipoSelect"]')
        .click()
        .type("Liberados")
        .type("{enter}");

      //Localiza requisição de compras na grid
      cy.get('div[nat="liberaRequisicaoComprasRequisicoesGrid"]').as("grid"); //caputra a grid

      cy.get("@grid")
        .find('div[title="22/12/2021"]')
        .first()
        .click()
        .wait(1000);

      //cy.get("@grid").find(".ui-grid-viewport").as("coluna");

      cy.get('[nat="liberaRequisicaoComprasCancelarLiberacao"]').click();
    });
  }
}

export default new liberaRequisicaoCompras();
