import { formatedDate2PtBR } from "../../../Utils/helpers.js";

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
    it("Libera requisição de compras", () => {
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });

      //---Acessa menu e a view da tela de cadastro de requisição
      cy.wait(3000);
      cy.get('button[nat="botaoSideMenu"]').click().wait(2000);

      cy.get('input[nat="buscaMenuVertical"]')
        .type("Requisição de compras")
        .click()
        .type("{enter}");
      cy.wait(1000);
      //---Fim---//

      //Pesquisa Requisição com data do dia
      cy.get('button[nat="cadastroRequisicaoComprasCodigoPesquisa"]')
        .click()
        .wait(1000);

      //digita o valor que vamos procurar 10,62
      cy.get('input[nat="pesquisaRequisicaoComprasTotalPrevisto"]').type(
        "10,62"
      );

      //pesquisa no banco o valor
      cy.get('button[nat="pesquisaRequisicaoComprasPesquisar"]')
        .click()
        .wait(1000);

      cy.get('[nat="pesquisaRequisicaoComprasGrid"]').as("grid");

      cy.get("@grid")
        .find('[title="0"]')
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha1");

      //Clica no botão CARREGAR
      cy.get("@linha1").find('button[nat="botaoCarregar"]').click();
      //.parents(".row").contains("1,7650");
      //Clica no botão PESQUISAR
      /* cy.get('button[nat="pesquisaRequisicaoComprasPesquisar"]')
        .click()
        .wait(1000); */

      //Enviar
      cy.get('button[nat="cadastroRequisicaoComprasEnviar"]')
        .click()
        .wait(1000);

      //Acessa Tela Gerenciar Requisições
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Libera requisições compras")
        .click()
        .type("{enter}");
      cy.wait(2000);

      //Informa o TIPO
      cy.get('[nat="liberaRequisicaoComprasTipoSelect"]')
        .click()
        .type("A liberar")
        .type("{enter}");

      //Localiza requisição de compras na grid
      cy.get('div[nat="liberaRequisicaoComprasRequisicoesGrid"]').as("grid"); //caputra a grid

      cy.get("@grid")
        .find(`div[title='${formatedDate2PtBR()}']`)
        .first()
        .click()
        .wait(1000);

      //Clica no botão LIBERAR REQUISIÇÂO

      cy.get('[nat="liberaRequisicaoComprasLiberarRequisicao"]').click();
      //Informa a data da reserva
      cy.get('input[nat="pdPopupPromptConfirmInput"]')
        .dblclick()
        .type(formatedDate2PtBR());

      //Clicar em OK Popup 'Informe a data da reserva'
      cy.get('button[nat="pdPopupPromptConfirmOk"]').click().wait(5000);
    });
  }
}

export default new liberaRequisicaoCompras();
