class executaSqlDeletaRetencaoPagamento {
  deletaRetencaoPagamento() {
    it("DATA REPORT: Consultas SQL - Alteraçoes", () => {
      cy.moduloMenu("DATA REPORT", "Procedimentos Sql");
    });

    it("Executa SQL para exclusao da retençao da anulaçao da nota de pagamento", () => {
      //valida alert "Todos os comandos executados de consulta ou alteração estão sendo auditados."
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Todos os comandos executados de consulta ou alteração estão sendo auditados."
      );
      cy.get(".modal-footer>#pdBtnAlertOK", { timeout: 4000 }).click();

      cy.get('li[nat="procedimentosSqlTabsAlterações"]', {
        timeout: 4000,
      }).click();
      //Valida aba Alterações
      cy.get('li[nat="procedimentosSqlTabsAlterações"]', {
        timeout: 5000,
      }).should("contain", "Alterações");

      cy.get(
        '.active > .pd-tab-content > [ng-keyup="vm.abrirHelpSQL($event)"] > [style="margin-bottom: 15px; padding-right: 15px; padding-left: 15px;"] > .ng-pristine > .ace_scroller > .ace_content',
        { timeout: 5000 }
      ).type(
        'delete from "SCH"."CADANP1" where "FICHA" in (select "FICHA" from "SCH"."CADANP1" where "FICHA" = 20222090) ',
        { delay: 10 }
      );
      cy.get(
        '[nat="procedimentosSqlTabsAlteracoesJustificativa"][aria-invalid="true"][maxlength="99999"]'
      ).type("AJUSTE AUTOMACAO", { delay: 10 });
      cy.get('button[nat="procedimentosSqlExecutar"]').click();

      //valida alert "Deseja realmente executar o SQL de alteração?"
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Deseja realmente executar o SQL de alteração?"
      );
      cy.get(".modal-footer > .btn-default", { timeout: 4000 }).click();
      cy.wait(3000);

      //valida alert "Procedimento SQL executado com sucesso. 0 linha(s) afetada(s)"
      cy.get(".modal-body", { timeout: 5000 }).contains(
        /Procedimento SQL executado com sucesso/
      );
      cy.get(".modal-footer>#pdBtnAlertOK", { timeout: 4000 }).click();
    });
  }
}

export default new executaSqlDeletaRetencaoPagamento();
