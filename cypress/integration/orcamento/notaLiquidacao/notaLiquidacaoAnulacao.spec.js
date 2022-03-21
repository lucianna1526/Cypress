import { formatedDate2PtBR } from "../../Utils/helpers";

class notaLiquidacaoAnulacao {
  anulaLiquidacao() {
    it("ORÇAMENTO: ANL - Anulação de liquidação", () => {
      cy.moduloMenu("ORÇAMENTO", "ANL - Anulação de liquidação");
    });

    it("Nota de Liquidação / Anulação de liquidação - Valida Modal Pesquisa e insere numero de Ficha", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoLiquidacaoFichaPesquisa"]')
        .click()
        .wait(4000);
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
      cy.get('button[nat="anulacaoLiquidacaoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa liquidação
      cy.get('button[nat="anulacaoLiquidacaoLiquidacaoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Nota de Liquidação / Anulação de Liquidação com valor acima do saldo", () => {
      //Clica no botao ADICIONAR
      cy.get('button[nat="anulacaoLiquidacaoGridabrirTelaDeCadastro"]').click();

      //Informa data da anulação da liquidação
      cy.get('input[nat="cadastroAnulacaoLiquidacaoData"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      //Informa o valor da Anulação da liquidação
      cy.get('input[nat="cadastroAnulacaoLiquidacaoValorLiquido"]')
        .dblclick()
        .type("10,00")
        .wait(1000);

      //Informa numero de processo
      cy.get('input[nat="cadastroAnulacaoLiquidacaoProcesso"]')
        .click()
        .type("2022014911")
        .wait(1000);

      //Informa o historico da anulação
      cy.get('textarea[nat="cadastroAnulacaoLiquidacaoHistorico"]')
        .click()
        .type("ANULAÇAO DE LIQUIDAÇAO REALIZADO PELA AUTOMAÇAO", { Delay: 10 })
        .wait(1000);

      //CLica no botão ADICIONAR E SAIR
      cy.get(
        'button[nat="cadastroAnulacaoLiquidacaoCrudSalvarFechar"]'
      ).click();

      //valida se a anulação de liquidação foi salva com sucesso
      cy.get(".modal-body", { timeout: 2000 })
        .should("be.visible")
        .contains(/Valor da liquidação/i);
      cy.get(".modal-footer>button").click();
    });

    it("Nota de Liquidação / Anulação de Liquidação com valor dentro do saldo", () => {
      //Informa data da anulação da liquidação
      cy.get('input[nat="cadastroAnulacaoLiquidacaoData"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      //Informa o valor da Anulação da liquidação
      cy.get('input[nat="cadastroAnulacaoLiquidacaoValorLiquido"]')
        .dblclick()
        .type("1,00")
        .wait(1000);

      //Informa numero de processo
      cy.get('input[nat="cadastroAnulacaoLiquidacaoProcesso"]')
        .dblclick()
        .type("2022014911")
        .wait(1000);

      //Informa o historico da anulação
      cy.get('textarea[nat="cadastroAnulacaoLiquidacaoHistorico"]')
        .dblclick()
        .type("ANULAÇAO DE LIQUIDAÇAO REALIZADO PELA AUTOMAÇAO", { Delay: 10 })
        .wait(1000);

      //CLica no botão ADICIONAR E SAIR
      cy.get(
        'button[nat="cadastroAnulacaoLiquidacaoCrudSalvarFechar"]'
      ).click();

      //valida se a anulação de liquidação foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 1000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>button").click();
    });
  }
}
export default new notaLiquidacaoAnulacao();
