class ccfiscalAvulso {
  geraDuamAvulso() {
    it("ARRECADAÇÃO: C/C fiscal avulso", () => {
      cy.moduloMenu("ARRECADAÇÃO", "C/C fiscal avulso", "");
    });

    it("ARRECADAÇÃO: Valida campos obrigatórios DUAM AVULSO", () => {
      cy.get('[nat="cadastroContaCorrenteFiscalCcpDescricao"]').should(
        "have.value",
        ""
      );
      cy.get('[nat="cadastroContaCorrenteFiscalCcpDescricao"]').should(
        "have.value",
        ""
      );
      //Clica no botão Salvar
      cy.get('[nat="cadastroContaCorrenteFiscalCrudSalvar"]').click();

      //valida mensagem 'Por favor, verifique os campos inválidos'
      cy.get(".md-toast-content", { timeout: 4000 }).should(
        "be.visible",
        "Por favor, verifique os campos inválidos"
      );
    });

    it("ARRECADAÇÃO: Gera DUAM AVULSO", () => {
      //Descomente esse trecho para editar duam avulso
      //cy.get('[nat="cadastroContaCorrenteFiscalDuamAnterior"]', {
      //  timeout: 8000,

      cy.autoComplete(
        '[nat="cadastroContaCorrenteFiscalRecDescricao"]',
        "TAXA BOMBEIROS VALOR FIXO"
      );
      cy.get('textarea[nat="cadastroContaCorrenteFiscalObs"]').type(
        "OBSERVAÇÃO AUTOMACAO",
        { delay: 10 }
      );
      cy.autoComplete(
        '[nat="cadastroContaCorrenteFiscalCcpDescricao"]',
        "GILMAR ALVES DA SILVA"
      );
      //Clica no botão salvar
      cy.get('[nat="cadastroContaCorrenteFiscalCrudSalvar"]').click();
      //valida mensagem 'A Receita Cadastrada como anual já foi lançada para o Contribuinte informado. Deseja salvar mesmo assim?'
      cy.get(".modal-body", { timeout: 1000 }).should(
        "contain",
        "A Receita Cadastrada como anual já foi lançada para o Contribuinte informado. Deseja salvar mesmo assim?"
      );
      cy.get(".modal-footer > .btn-default").click();
      //valida mensagem 'Registro salvo com sucesso!'
      cy.get(".md-toast-content", { timeout: 1000 }).should(
        "be.visible",
        "          Registro salvo com sucesso! OK      "
      );
      cy.get(":nth-child(8) > pd-grid > .pd-grid-div", { timeout: 4000 }).as(
        "grid"
      );
      cy.get("@grid")
        .contains("5101", { timeout: 4000 }) //varre procurando o elemento que contem a receita 5101
        .first()
        .click()
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        });
      //Clica no botao de editar na grid
      cy.get("button[nat=botaoEditar]").click();
      //valida modal 'Cadastro de receita de duam'
      cy.get('[ng-transclude="header"] > ._md > .md-toolbar-tools', {
        timeout: 4000,
      }).should("contain", "Cadastro de receita de duam");
      //Quantidade
      cy.get('pd-input-text[label="Quantidade"]>div>div>input[type="numeric"]')
        .clear()
        .type("1,00");
      //Valor
      cy.get('pd-input-text[label="Valor"]>div>div>input[type="numeric"]')
        .clear()
        .type("10,00");
      //Clica no Botao SALVAR E FECHAR
      cy.get('button[nat="SalvarFechar"]').click();
      //valida mensagem 'Registro salvo com sucesso!'
      cy.get(".md-toast-content", { timeout: 4000 }).should(
        "be.visible",
        "          Registro salvo com sucesso! OK      "
      );
      //valida mensagem 'Receita(s) da parcela 0 calculada com sucesso!'
      cy.get(".md-toast-content", { timeout: 4000 }).should(
        "contain",
        "Receita(s) da parcela 0 calculada com sucesso!"
      );
      cy.get("@grid")
        .contains("10,00", { timeout: 4000 })
        .first()
        .click()
        .parents(".ui-grid-viewport")
        .scrollTo("left", {
          easing: "linear",
          duration: 2000,
        }); //varre procurando o elemento que contem o valor 10,00

      //Clica no botao imprimir
      cy.get("button[nat=cadastroContaCorrenteFiscalImprimirDuam]").click();

      //Valida Modal Informar a data de pagamento
      cy.get('[ng-transclude="header"] > ._md > .md-toolbar-tools', {
        timeout: 10000,
      }).should("be.visible", "Informar a data de pagamento", {
        timeout: 4000,
      });

      //Clica em imprimir no modal
      cy.get('button[nat="popupInformarDataPagamentoImprimir"]').click();

      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }
}

export default new ccfiscalAvulso();
