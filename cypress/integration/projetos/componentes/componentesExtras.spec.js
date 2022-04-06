class componentesExtras {
  componentesExtrasTela() {
    it("Projetos: Componentes Extras", () => {
      cy.moduloMenu("PROJETOS", "Ccmponentes extras");
    });

    it("Valida insercao de dados", () => {
      //Clica no botao pesquisar
      cy.get('button[nat="testeArquiteturaGridRequisicoesPesquisar"]').click();

      //Clica no botao limpar
      cy.get('button[nat="testeArquiteturaGridRequisicoesLimpar"]').click();

      //Clica no botao rigth click
      cy.get('button[nat="testeArquiteturaGridRequisicoesRightClick"]').click();

      //Clica no botao pesquisar segunda vez
      cy.get('button[nat="testeArquiteturaGridRequisicoesPesquisar"]').click();

      //Clica no botao ADICIONAR
      cy.get(
        'button[nat="testeArquiteturaGridRequisicaoabrirTelaDeCadastro"]'
      ).click();

      //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(2000);

      //Valida na grid o valor da suplementação
      cy.gridClicar(
        'div[nat="testeArquiteturaGridRequisicao"]',
        "28/03/2022",
        ""
      ).first();
      cy.get("button[nat=botaoEditar]").first().click();

      //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(2000);

      //Clica no botao pesquisar 2
      cy.get('button[nat="testeArquiteturaGridRequisicoes2Pesquisar"]').click();

      //Clica no botao limpar 2
      cy.get('button[nat="testeArquiteturaGridRequisicoes2Limpar"]').click();

      //Clica no botao rigth click 2
      cy.get(
        'button[nat="testeArquiteturaGridRequisicoes2RightClick2"]'
      ).click();

      //Clica no botao pesquisar 2 segunda vez
      cy.get('button[nat="testeArquiteturaGridRequisicoes2Pesquisar"]').click();

      //Clica no botao ADICIONAR
      cy.get(
        'button[nat="testeArquiteturaGridRequisicoes2abrirTelaDeCadastro"]'
      ).click();

      //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(2000);

      //Valida na grid o valor da suplementação
      cy.gridClicar(
        "div[nat=testeArquiteturaGridRequisicoes2]",
        "28/03/2022",
        ""
      ).first();
      cy.get("button[nat=botaoEditar]").first().click();

      //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(2000);
    });
  }
}

export default new componentesExtras();
