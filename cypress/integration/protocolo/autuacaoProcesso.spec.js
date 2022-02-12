class autuacaoProcesso {
    autuacao(){
        //describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
    it("PROTOCOLO: Autuaçao - Processo", () => {
        cy.moduloMenu('PROTOCOLO','Autuação / processo');
       
      });
      
  
    }
}

export default new autuacaoProcesso();