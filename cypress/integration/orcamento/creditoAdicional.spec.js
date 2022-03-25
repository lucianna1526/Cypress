class creditoAdicional {
  creditoAdicionalSuplementacao() {
    it("ORÇAMENTO: NE - Nota de empenho", () => {
      cy.moduloMenu("ORÇAMENTO", "Crédito adicional");
    });

    it("Informa número da ficha para realizar a suplementação", () => {
      cy.get('input[nat="fichaInfoFicha"]').type("202214941").type("{enter}");
      cy.get('[nat="fichaInfoFicha"]').should("have.value", "202214941");
    });
  }
}

export default new creditoAdicional();
