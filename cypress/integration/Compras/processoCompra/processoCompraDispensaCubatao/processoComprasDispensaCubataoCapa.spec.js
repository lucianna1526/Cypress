class processoComprasDispensaCubatao {
  processoComprasCubatao() {
    it("Preenche Processo de Compras - Aba Principal", () => {
      //Acessa modulo compras e aguarda 5 segundos
      //acessaModuloCompras.acessarCompras();
      it("Preenche dados Processo de Compras - Cubatao", () => {
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
      //cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Processo de compras")
        .click()
        .type("{downarrow}")
        .type("{enter}");
      cy.wait(1000);

      //Modalidade
      cy.get('input[nat="processodeComprasPrincipalModalidade"]').type("5");

      //Organograma
      cy.get('input[nat="processodeComprasPrincipalOrganograma"]')
        .click()
        .type("239.26.1.3");

      //Tipo julgamento
      cy.get('input[nat="processodeComprasPrincipalTipoJulgamento"]')
        .click()
        .type("1");

      //Situação
      cy.get('[nat="processodeComprasPrincipalSituacaoLicitacaoSelect"]')
        .click()
        .type("Abertura da cotação")
        .wait(500)
        .type("{enter}");
      cy.focused().tab();

      //status
      cy.get('[nat="processodeComprasPrincipalStatusSelect"]')
        .click()
        .type("Em Andamento")
        .wait(500)
        .type("{enter}");
      cy.focused().tab();

      //Tipo
      cy.get('[nat="processodeComprasPrincipalTipoSelect"]')
        .click()
        .type("Preço")
        .wait(500)
        .type("{enter}");

      //Obras
      cy.get('[nat="processodeComprasPrincipalObrasSelect"]')
        .click()
        .type("NÃO")
        .wait(500)
        .type("{enter}");
      cy.focused().tab();

      //Obs./Objeto
      cy.get('textarea[nat="processodeComprasPrincipalObsObjeto"]').type(
        "PROCESSO DE COMPRAS CADASTRADO ATRAVÉS DA AUTOMAÇÃO."
      );

      //Solicitante
      cy.get('input[nat="processodeComprasPrincipalSolicitante"]').type(
        "AUTOMAÇÃO DE TESTES"
      );

      //Salvar Capa
      cy.get('button[nat="cadastroProcessoCompraCrudSalvar"]').click();

      //Confirma Inclusão
      cy.get('button[nat="pdBtnAlertOKSim"]').click();

      cy.get(".md-toast-content")
        .should(
          "have.text",
          "          Registro salvo com sucesso!              OK      "
        )
        .screenshot();

      cy.get('[nat="processodeComprasPrincipalAdicionar"]').click();

      cy.wait(5000);

      //Seleciona vinculo de requisições

      cy.get('[nat="CellTemplate"]').contains("10,62").click().wait(3000);

      //vincula as requisições
      cy.get('[nat="pesquisaRequisicoesComprasVincularRequisicoes"]').click();

      //confirma vinculação
      cy.get('button[nat="pdBtnAlertOKSim"]').click();

      //cy.get(".md-toast-text").should('have.text',"          Registro salvo com sucesso!              OK      ").screenshot()

      //#criar validação de vinculação

      //fecha a tela de vinculo de requisições
      cy.get('[nat="pesquisaRequisicoesComprasCancelar"]').click().wait(5000);

      //##############FIM-CAPA###################

      //Clica na aba de credenciamento
      cy.get('li[nat="Credenciamento"]').click().wait(5000);
    });
  }
}

export default new processoComprasDispensaCubatao();
