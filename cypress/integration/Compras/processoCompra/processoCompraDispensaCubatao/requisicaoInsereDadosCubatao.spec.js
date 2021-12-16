//import acessaModuloCompras from '../AcessaModuloCompras'

class requisicaoInsereDadosCubatao {
  reqInsereDadosCubatao(natureza = 1) {
    describe("Acessa Tela Cadastro de requisição de compras, Valida inserção de dados", () => {
      it("Acessa Modulo Compras", () => {
        /*if (cy.find('button[nat="botaoSideMenu"]').length == 0){
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                }*/
        /* cy.get("body").then(($body) => {
          if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
            cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          }
        }); */
      });
      it("Valida inserção de dados", () => {
        //Acessa modulo compras e aguarda 5 segundos
        cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        cy.wait(3000);
        cy.get('button[nat="botaoSideMenu"]').click().wait(2000);

        cy.get('input[nat="buscaMenuVertical"]')
          .type("Requisição de compras")
          .click()
          .type("{enter}");
        cy.wait(1000);
        //Data da Requisição
        cy.get('input[nat="cadastroRequisicaoComprasData"]')
          .dblclick()
          .type("15/12/2021");
        //Organograma
        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisOrganograma"]'
        ).type("239.26.1.3");
        //Subgrupo
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisSubGrupo"]')
          .click()
          .type("736");
        //Ficha
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFicha"]')
          .click()
          .type("20211506")
          .type("{enter}")
          .tab();
        //Origem do recurso
        cy.get(
          '[nat="cadastroRequisicaoComprasDadosPrincipaisOrigemRecursoSelect"]'
        )
          .click()
          .type("{enter}");
        //cy.get('body').tab()
        cy.focused().tab();
        //Fonte
        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisFonte"]'
        ).click();
        cy.focused().tab().wait(2000);

        /*  
        //Detalhamento da Fonte - NAO UTILIZA PARA CUBATÃO

        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisDetalhamentoFonte"]'
        )
          .click()
          .type("10000")
          .wait(3000)
          .click()
          .type("{enter}"); */

        //Processo
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisProcesso"]')
          .click()
          .type("2021014279");
        //Salvar Button Capa
        cy.get('button[nat="cadastroRequisicaoComprasCrudSalvar"]').click();
        //Aguarda 5 segundos
        cy.wait(5000);
      });
      it("Validação 1 - arredondamento 1,7750 para 1,78", () => {
        // --INSERE ITEM 1 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("76212", "1", "1.7750", "1,78");
      });

      it("Validação 2 - arredondamento 1,7650 para 1,176", () => {
        // --INSERE ITEM 2 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("73539", "1", "1.7650", "1,76");
      });

      it("Validação 3 - arredondamento 1,7751 para 1,78", () => {
        // --INSERE ITEM 3 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("73538", "1", "1.7751", "1,78");
      });

      it("Validação 4 - arredondamento 1,7651 para 1,77", () => {
        // --INSERE ITEM 4 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("73536", "1", "1.7651", "1,77");
      });

      it("Validação 5 - arredondamento 1,7649 para 1,76", () => {
        // --INSERE ITEM 5 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("73534", "1", "1.7649", "1,76");
      });

      it("Validação 6 - arredondamento 1,7749 para 1,79", () => {
        // --INSERE ITEM 5 NA REQUISIÇÃO--
        cy.requisicaoAdicionarProduto("73257", "1", "1.7749", "1,77");
      });
      it("finaliza CAPA requisição", () => {
        //Fecha modal inserir produto
        cy.get('[aria-label="Fechar popup"]').click().wait(2000);

        //Enviar e Liberar
        cy.get('button[nat="cadastroRequisicaoComprasEnviarLiberar"]')
          .click()
          .wait(1000);

        //Clicar em OK Popup 'Informe a data da reserva'
        cy.get('button[nat="pdPopupPromptConfirmOk"]').click().wait(1000);
      });
    });
  }
}
export default new requisicaoInsereDadosCubatao();
