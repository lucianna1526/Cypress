import acessaModuloCompras from "../../AcessaModuloCompras";
import processoComprasDispensaFaseCredenciamento from "./processoComprasDispensaFaseCredenciamento.spec";

class processoComprasDispensa {
  processoCompras() {
    it("Preenche Processo de Compras - Aba Principal", () => {
      //Acessa modulo compras e aguarda 5 segundos
      acessaModuloCompras.acessarCompras();
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Processo de compras")
        .click()
        .type("{downarrow}")
        .type("{enter}");
      cy.wait(1000);

      //Modalidade
      cy.get('input[nat="processodeComprasPrincipalModalidade"]').type("1");

      //Organograma
      cy.get('input[nat="processodeComprasPrincipalOrganograma"]')
        .click()
        .type("13.2201.0042.2194");

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

      cy.get('[nat="processodeComprasPrincipalAdicionar"]').click();

      cy.wait(5000);

      //Seleciona vinculo de requisições
      cy.get(
        '[class="ui-grid-cell-contents ui-grid-disable-selection clickable"]'
      ).click();

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

      //Chama Classe Fase Credenciamento
    });

    processoComprasDispensaFaseCredenciamento.credenciamento();
  }
}

export default new processoComprasDispensa();
