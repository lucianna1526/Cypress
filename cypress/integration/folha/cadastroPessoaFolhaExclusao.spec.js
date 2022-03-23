class cadastroPessoaFolhaExclusao {
  cadastroPessoaExclusao() {
    it("Acessa Modulo GESTÃO PESSOAL e SubModulo FOLHA DE PAGAMENTO", () => {
      cy.moduloMenu("GESTÃO PESSOAL", "Pessoa", {
        subModulo: "folhaPagamentoButton",
      });
    });

    it("Valida duplicidade de cadastro", () => {
      //Clica no botao Pesquisar
      cy.get('button[nat="cadastroPessoaFolhaCodigoPesquisa"]', {
        timeout: 3000,
      }).click();

      //Valida Modal de Pesquisa de Pessoa
      cy.get('[nat="pesquisaPessoaPesquisa"]', { timeout: 10000 })
        .contains("Pesquisa de pessoa")
        .wait(3000);

      //Informa o CPF para pesquisa
      cy.get('input[nat="pesquisaPessoaCpfCnpj"]', { timeout: 4000 })
        .click()
        .type("92175457087", { Delay: 10 });

      //Clica no botão Pesquisar
      cy.get('button[nat="pesquisaPessoaPesquisaPesquisar"]', {
        timeout: 3000,
      }).click();

      // cy.get('[nat="pesquisaPessoaGrid"]', { timeout: 4000 }).as("grid");

      cy.get("body").then((body) => {
        if (
          body.find("[ng-class=\"{'md-capsule': toast.capsule}\"]").length > 0
        ) {
          cy.log("nao existe pessoa cadastrada com o cpf informado");

          //Sai do Modal de Pesquisa de Pessoa
          cy.get('[nat="pesquisaPessoaPesquisa"]', { timeout: 10000 })
            .contains("Pesquisa de pessoa")
            .wait(3000)
            .type("{esc}");
        } else {
          //Clica no botão Pesquisar
          cy.get('button[nat="pesquisaPessoaPesquisaPesquisar"]', {
            timeout: 3000,
          }).click();

          //Carrega item pesquisado
          cy.get('button[nat="botaoCarregar"]', { timeout: 4000 }).click();

          //Acessa aba DOCUMENTAÇAO
          cy.get("li[nat=cadastroPessoaFolhaTabsFolhaDocumentação]").click();

          //Seleciona item na grid
          cy.get(
            '[nat="cadastroPessoaFolhaDocumentacaoInformacoesProfissionais"] > :nth-child(1) > .pd-legend-fieldset'
          )
            .contains("OAB - Ordem dos Advogados do Brasil")
            .parents(".row");

          //Clica no botao Excluir da grid
          cy.get('[nat="botaoExcluir"]').click();

          //valida mensagem 'Tem certeza que deseja excluir o registro?'
          cy.get(".modal-body", { timeout: 5000 }).should(
            "contain",
            "Tem certeza que deseja excluir o registro?"
          );
          cy.get(".modal-footer > .btn-default", { timeout: 5000 }).click();

          //valida mensagem 'Registro excluido com sucesso!'
          cy.get(".md-toast-text", { timeout: 5000 }).should(
            "have.text",
            "      Registro excluído com sucesso!    "
          );
          cy.get(".md-toast-content>button").click();

          //Clica no botão EXCLUIR
          cy.get('button[nat="cadastroPessoaFolhaCrudExcluir"]', {
            timeout: 3000,
          }).click();

          //valida mensagem 'Tem certeza que deseja excluir o registro?'
          cy.get(".modal-body", { timeout: 5000 }).should(
            "contain",
            "Tem certeza que deseja excluir o registro?"
          );
          cy.get(".modal-footer > .btn-default").click();

          //valida mensagem 'Registro excluido com sucesso!'
          cy.get(".md-toast-text", { timeout: 5000 }).should(
            "have.text",
            "      Registro excluído com sucesso!    "
          );
          cy.get(".md-toast-content>button").click();
        }
      });
    });
  }
}
export default new cadastroPessoaFolhaExclusao();
