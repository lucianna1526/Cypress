import { formatedDate2PtBR } from "../../../Utils/helpers";

class requisicaoInsereDadosCubatao {
  reqInsereDadosCubatao() {
    it("Acessa Tela Cadastro de requisição de compras", () => {
      /*
        if (cy.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }*/
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });
    });
    it("Valida inserção de dados", () => {
      //Acessa modulo compras e aguarda 5 segundos
      //cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
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
        .type(formatedDate2PtBR());
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
        .type("20211498")
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

    //**************Valida lançamento com Valor maior que o saldo da Ficha **************/
    it("Validação de lançamento maior que o saldo da ficha", () => {
      //Informa o Produto
      cy.wait(5000);
      cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]')
        .type(76212)
        .type("{enter}")
        .wait(1000);
      //Informa Quantidade Pedida
      cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
        .type("1")
        .tab()
        .wait(1000);
      //Informa Valor Unitário
      cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
        .type("35000,10")
        .wait(100)
        .tab()
        .wait(1000);
      //Clica no botão ADICIONAR E SAIR
      cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarFechar"]')
        .click()
        .wait(1000);
      //Enviar e Liberar
      cy.get('button[nat="cadastroRequisicaoComprasEnviarLiberar"]')
        .click()
        .wait(1000);
      //Informa a data da reserva
      cy.get('input[nat="pdPopupPromptConfirmInput"]')
        .dblclick()
        .type(formatedDate2PtBR());
      //Clicar em OK Popup 'Informe a data da reserva'
      cy.get('button[nat="pdPopupPromptConfirmOk"]').click().wait(2000);
      //Valida Mensagem de erro
      cy.get(".modal-body")
        .text()
        .then((value) => {
          cy.log("Text value is :", value);
          expect(value).to.include("Saldo da ficha 20211498 insuficiente");
        });

      //clica em OK para fechar o alerta de saldo insuficiente
      cy.get('button[nat="pdBtnAlertOK"]').click().wait(2000);

      //Remove o item da requisição
      cy.get('div[nat="cadastroRequisicaoComprasProdutosGrid"]').as("grid"); //caputra a grid

      cy.get("@grid").find(".ui-grid-viewport").as("coluna");

      cy.get("@coluna").find('button[nat="botaoExcluir"]').click().wait(1000);
      //Clica no Alert "Tem certeza que deseja excluir o registro?"
      cy.get('button[nat="pdBtnAlertOKSim"]').click().wait(5000);

      //clica em adicionar produtos
      cy.get(
        'button[nat="cadastroRequisicaoComprasProdutosGridabrirTelaDeCadastro"]'
      )
        .click()
        .wait(1000);
    });
    //**************Finaliza lançamento com Valor maior que o saldo da Ficha **************/

    it("Validação 1 - arredondamento 1,7750 para 1,78", () => {
      // --INSERE ITEM 1 NA REQUISIÇÃO--
      cy.requisicaoAdicionarProduto("76212", "1", "1.7750", "1,78");
    });

    it("Validação 2 - arredondamento 1,7650 para 1,76", () => {
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

    it("Validação 6 - arredondamento 1,7749 para 1,77", () => {
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

      //Informa a data da reserva
      cy.get('input[nat="pdPopupPromptConfirmInput"]')
        .dblclick()
        .type(formatedDate2PtBR());

      //Clicar em OK Popup 'Informe a data da reserva'
      cy.get('button[nat="pdPopupPromptConfirmOk"]').click().wait(5000);
    });
  }
}
export default new requisicaoInsereDadosCubatao();
