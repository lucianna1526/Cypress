class ccfiscalAvulsoExclusao {
  excluiDuamAvulso() {
    it("ARRECADAÇÃO: C/C fiscal avulso - Exclusao", () => {
      cy.moduloMenu("ARRECADAÇÃO", "C/C fiscal avulso", "");
    });

    it("ARRECADAÇÃO: Exclui DUAM AVULSO", () => {
      //Volta DUAM Anterior
      cy.get('[nat="cadastroContaCorrenteFiscalDuamAnterior"]').click();

      //Clica no botão excluir
      cy.get('[nat="cadastroContaCorrenteFiscalCrudExcluir"]').click();
      //valida mensagem 'Somente o usuário Administrador tem permissão para Excluir Duam. Deseja fazer login como Administrador?'
      cy.get(".modal-body", { timeout: 4000 }).should(
        "contain",
        "Somente o usuário Administrador tem permissão para Excluir Duam. Deseja fazer login como Administrador?"
      );
      cy.get(".modal-footer > .btn-default").click();

      //Valida Modal de Autenticação
      cy.get('[ng-transclude="header"] > ._md > .md-toolbar-tools', {
        timeout: 10000,
      }).contains("Autenticação", { timeout: 4000 });

      //Autentica Usuario Administrador
      cy.get('[label="Usuário"]>div>div>input').type("ADM.AUTOMACAO");
      cy.get('[label="Senha"]>div>div>input').type("1010");
      cy.get('button[aria-label="Validar"]').click();

      //valida modal 'Cadastro de Motivo da Exclusão do Duam'
      cy.get('[ng-transclude="header"] > ._md > .md-toolbar-tools', {
        timeout: 4000,
      }).should("contain", "Cadastro de Motivo da Exclusão do Duam");

      //Digita texto com o motivo da exclusão
      cy.get('pd-input-area>div>div>textarea[maxlength="1000"]').type(
        "DIGITA MOTIVO EXCLUSAO DUAM - AUTOMACAO"
      );

      //Clica no botao SALVAR E EXCLUIR
      cy.get("pd-tela-padrao-footer > .md-raised").click();

      //valida mensagem 'Registro excluido com sucesso!'
      cy.get(".md-toast-content", { timeout: 4000 }).should(
        "be.visible",
        "          Registro excluido com sucesso! OK      "
      );
    });
  }
}

export default new ccfiscalAvulsoExclusao();
