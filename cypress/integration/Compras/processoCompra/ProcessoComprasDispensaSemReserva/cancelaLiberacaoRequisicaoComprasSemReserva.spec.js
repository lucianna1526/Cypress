import { formatedDate2PtBR } from "../../../Utils/helpers.js";
class cancelaLiberacaoRequisicaoComprasSemReserva {
  //Cancela liberação requisição de compras
  //Descrição: Cancela a libera requisição de compras para validar saldo da ficha
  //Status: Em desenvolvimento
  //Autor: Jeandes Wesley
  //Data: 27/12/2021
  //Observação:
  //*****************************************************************************************************************************
  //Função para cancelar a liberação da requisição de compra
  cancelaLiberacaoRequisicaoSemReserva() {
    it("COMPRAS E LICITAÇÕES: Libera requisições compras", () => {
      cy.moduloMenu("COMPRAS E LICITAÇÕES","Libera requisições compras");
    })
    it("Cancela liberação de requisição de compras", () => {
      

      //Informa o TIPO
      cy.get('[nat="liberaRequisicaoComprasTipoSelect"]',{timeout:10000})
        .click()
        .type("Liberados")
        .type("{enter}");

      //Localiza requisição de compras na grid
      cy.get('div[nat="liberaRequisicaoComprasRequisicoesGrid"]').as("grid"); //caputra a grid

      cy.get("@grid")
        .find(`div[title='${formatedDate2PtBR()}']`)
        .first()
        .click()
        .wait(1000);

      //cy.get("@grid").find(".ui-grid-viewport").as("coluna");

      cy.get('[nat="liberaRequisicaoComprasCancelarLiberacao"]').click();
    });
  }
}

export default new cancelaLiberacaoRequisicaoComprasSemReserva();
