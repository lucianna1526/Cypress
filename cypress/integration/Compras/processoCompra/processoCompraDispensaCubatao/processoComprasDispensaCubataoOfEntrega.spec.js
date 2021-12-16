class processoComprasDispensaCubataoOfEntrega {
  entregaCubatao() {
    it("Acessa Modulo Compras", () => {
      /*if (cy.find('button[nat="botaoSideMenu"]').length == 0){
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                }*/

      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.wait(5000);
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          cy.wait(5000);
        }
      });
    });

    it("Preenche Ordem de Fornecimento/Entrega", () => {
      //Acessa Pedido de Compras
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Autorização de entrega pelo pedido")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });
  }
}

export default new processoComprasDispensaCubataoOfEntrega();
