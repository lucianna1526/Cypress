import { formatedMonth2PtBR } from "../../Utils/helpers";

class notaEmpenhoAnulacao {
  anulaEmpenho() {
    it("ORÇAMENTO: NE - Nota de empenho", () => {
      cy.moduloMenu("ORÇAMENTO", "ANE - Anulação de empenho");
    });

    it("Nota de Empenho / Anulação de Empenho - Valida Modal Pesquisa e insere numero de Ficha", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoEmpenhoFichaPesquisa"]').click().wait(4000);
      cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {
        timeout: 100000,
      });
      cy.get('input[nat="fichaOrcamentariaFicha"]')
        .click()
        .type("20222090", { Delay: 10 });
      cy.get('button[nat="Pesquisar"]').click();
      cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {
        timeout: 60000,
      });
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa Pre Empenho
      cy.get('button[nat="anulacaoEmpenhoPreEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Nota de Empenho / Anulação de Empenho", () => {
      //Clica no botao ADICIONAR
      cy.get('button[nat="anulacaoEmpenhoGridabrirTelaDeCadastro"]').click();

      //Informa data da anulação
      cy.get('button[nat="cadastroAnulacaoEmpenhoDataBotaoPopUp"]').click();
      cy.get('ul[role="presentation"]>li>span>button[ng-disabled]', {
        timeout: 10000,
      }).click();
      //Informa numero de processo
      cy.get('input[nat="cadastroAnulacaoEmpenhoProcesso1"]')
        .click()
        .type("2022014911")
        .wait(1000);

      //Informa tipo de anulação
      cy.get('[nat="cadastroAnulacaoEmpenhoTipoAnulacaoSelect"]')
        .click()
        .type("Anulação")
        .type("{enter}");

      //Informa o valor da anulação
      const mesAtual = formatedMonth2PtBR(); //Recebe mes atual para inserir valor da parcela
      const meses = [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      cy.get(
        `input[nat="cadastroAnulacaoEmpenhoParcela${
          meses[parseInt(mesAtual) - 1]
        }"]`
      ).type("1,00", { Delay: 10 }, { timeout: 3000 });

      //CLica no botão ADICIONAR E SAIR
      cy.get('button[nat="cadastroAnulacaoEmpenhoCrudSalvarFechar"]').click();

      //valida se a anulação de empenho foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 1000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>.md-action").click();
    });
  }
}
export default new notaEmpenhoAnulacao();
