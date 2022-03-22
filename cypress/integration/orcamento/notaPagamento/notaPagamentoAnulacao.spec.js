import { formatedDate2PtBR } from "../../Utils/helpers";

class notaPagamentoAnulacao {
  anulaPagamento() {
    it("ORÇAMENTO: ANP - Anulação de Pagamento", () => {
      cy.moduloMenu("ORÇAMENTO", "ANP - Anulação de pagamento");
    });

    it("Nota de Pagamento / Anulação de pagamento - Valida Modal Pesquisa e insere numero de Ficha", () => {
      //Pesquisa Ficha
      cy.get('button[nat="anulacaoPagamentoFichaPesquisa"]').click().wait(4000);
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
      cy.get('button[nat="anulacaoPagamentoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa Liquidação
      cy.get('button[nat="anulacaoPagamentoLiquidacaoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Pesquisa pagamento
      cy.get('button[nat="anulacaoPagamentoPagamentoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();
    });

    it("Nota de Pagamento / Anulação de Pagamento com valor acima do saldo", () => {
      //Clica no botao ADICIONAR
      cy.get('button[nat="anulacaoPagamentoGridabrirTelaDeCadastro"]').click();

      //Informa data da anulação da pagamento
      cy.get('input[nat="cadastroAnulacaoPagamentoData"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      //Informa o valor da Anulação da pagamento
      cy.get('input[nat="cadastroAnulacaoPagamentoVlLiquido"]')
        .dblclick()
        .type("10,00")
        .wait(1000);

      //CLica no botão ADICIONAR E SAIR
      cy.get('button[nat="cadastroAnulacaoPagamentoCrudSalvarFechar"]').click();

      //valida se a anulação de pagamento foi salva com sucesso
      cy.get(".modal-body", { timeout: 1000 }).should(
        "contain",
        "Valor da anulação maior que saldo liquido da nota de pagamento!"
      );
      cy.get(".modal-footer>button").click();
    });

    it("Nota de Pagamento / Anulação de Pagamento com valor dentro do saldo", () => {
      //Informa o valor da Anulação da pagamento
      cy.get('input[nat="cadastroAnulacaoPagamentoVlLiquido"]')
        .dblclick()
        .type("5,00")
        .wait(1000);

      //CLica no botão ADICIONAR E SAIR
      cy.get('button[nat="cadastroAnulacaoPagamentoCrudSalvarFechar"]').click();

      //valida se a anulação de pagamento foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 5000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>button").click();
    });
  }
}
export default new notaPagamentoAnulacao();
