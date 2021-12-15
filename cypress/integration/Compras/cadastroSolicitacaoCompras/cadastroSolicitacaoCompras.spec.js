//import acessaModuloCompras from '../AcessaModuloCompras'

class cadastroSolicitacaoCompras {
  cadInsereDados() {
    describe("Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios", () => {
      it("Acessa Modulo Compras", () => {
        cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
      });
      it("Acessa Modulo Solicitação de compra", () => {
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]').click().wait(2000);
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Solicitação de compra")
          .click()
          .type("{enter}")
          .wait(1000);
      });
      it("Grava Capa Solicitação de Compra", () => {
        //Observação da solicitaçõ de compra
        cy.get('[label="Observação"]>div>div>textarea').type(
          "Solicitação feito para valor saldo pelo Teste automatizado"
        );

        //Salva a solicitação de compra
        cy.get('button[nat="Salvar"]').click();

        //clica para adicionar produto
        cy.get(
          'button[nat="cadastroSolciitacaoCompraGridItensabrirTelaDeCadastro"]'
        ).click();
        cy.solicitacaoAdicionaProduto("68873", "1", "1,7750", "1,77");
      });
    });
  }
}
export default new cadastroSolicitacaoCompras();
