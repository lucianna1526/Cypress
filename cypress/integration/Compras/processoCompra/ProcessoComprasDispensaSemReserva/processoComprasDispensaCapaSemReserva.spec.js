
class processoComprasDispensaSemReserva {
  processoComprasSemReserva() {
    it("Preenche Processo de Compras - Aba Principal", () => {
      //Acessa modulo compras e aguarda 5 segundos
      cy.moduloMenu('COMPRAS E LICITAÇÕES','Processo de compras')
      

      //Modalidade
      cy.get('input[nat="processodeComprasPrincipalModalidade"]').type("1");

      //Organograma
      cy.get('input[nat="processodeComprasPrincipalOrganograma"]')
        .click()
        .type("19.1901.0034.2139");

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
        .type("Não")
        .wait(500)
        .type("{enter}");
      cy.focused().tab();

      //Obs./Objeto
      cy.get('textarea[nat="processodeComprasPrincipalObsObjeto"]').type(
        "TESTE DE COMPRAS AUTOMATIZADO"
      );

      //Solicitante
      cy.get('input[nat="processodeComprasPrincipalSolicitante"]').type("SOLICITANTE TESTE AUTOMATIZADO");

      //Processo Protocolo
      cy.get('input[nat="processodeComprasPrincipalProcessoProtocolo"]').type("2022014911");

      //Adicionar e Sair
      cy.get('button[nat="cadastroProcessoCompraCrudSalvar"]').click();

      //Confirma Inclusão
      cy.get('button[nat="pdBtnAlertOKSim"]').click();

      cy.get(".md-toast-content")
        .should(
          "have.text",
          "          Registro salvo com sucesso!              OK      "
        )
        .screenshot();
    });
          it('Modal', () => {
      cy.get('[nat="processodeComprasPrincipalAdicionar"]').click();

      cy.wait(5000);

      //Seleciona vinculo de requisições
      cy.get(
        '[class="ui-grid-cell-contents ui-grid-disable-selection clickable"]'
        ,{timeout: 10000}
      ).first().click();

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

export default new processoComprasDispensaSemReserva();
