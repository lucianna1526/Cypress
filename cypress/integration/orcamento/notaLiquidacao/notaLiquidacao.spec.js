import { formatedDate2PtBR } from "../../Utils/helpers";
import { formatedMonth2PtBR } from "../../Utils/helpers";

class notaLiquidacao {
  geraLiquidacao() {
    it("ORÇAMENTO: NL - Nota de liquidação", () => {
      cy.moduloMenu("ORÇAMENTO", "NL - Nota de liquidação");
    });

    it("Nota de Liquidação - Valida Modal Pesquisa e insere numero de Ficha", () => {
      cy.get('button[nat="cadastroNotaLiquidacaoFichaPesquisa"]')
        .click()
        .wait(2000);
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
    }); //

    it("Nota de Liquidação - Valida Modal Pesquisa e insere numero de Empenho", () => {
      cy.get('button[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]').click();
      cy.wait(2000);
      cy.get('button[nat="botaoCarregar"]').first().click();

      //Clica no botão ADICIONAR
      cy.get(
        'button[nat="cadastroNotaLiquidacaoLiquidacoesGridabrirTelaDeCadastro"]'
      ).click();
    });

    it("Nota de Liquidação - Informa valor da liquidação maior que o saldo a ser liquidado", () => {
      cy.get('input[nat="cadastroNotaLiquidacaoItemDataLiquidacao"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      cy.get('input[nat="cadastroNotaLiquidacaoItemDataVencimento"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      //Informa um valor maior do que o saldo a ser liquidado
      cy.get('input[nat="cadastroNotaLiquidacaoItemValorBruto"]')
        .dblclick()
        .type("10,00")
        .wait(2000);

      cy.get('input[nat="cadastroNotaLiquidacaoItemMesReferencia"]')
        .click()
        .type(formatedMonth2PtBR())
        .wait(2000);
      cy.get(
        'button[nat="cadastroNotaLiquidacaoItemAnoReferencia BotaoProximo"]',
        { force: true },
        { timeout: 5000 }
      ).click();

      //Ao abrir o modal, preenche os campos e adiciona parcela da nota de liquidação
      cy.get('button[nat="SalvarFechar"]', { timeout: 2000 }).click();

      //valida se a nota de Liquidação foi salva com sucesso
      cy.get(".modal-body", { timeout: 1000 })
        .should("be.visible")
        .contains(/maior que o saldo da nota de empenho/);
      cy.get(".modal-footer>button").click();
    });

    it("Nota de Liquidação - Informa valor da liquidação dentro do saldo a ser liquidado", () => {
      cy.get('input[nat="cadastroNotaLiquidacaoItemDataLiquidacao"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      cy.get('input[nat="cadastroNotaLiquidacaoItemDataVencimento"]')
        .dblclick()
        .type(formatedDate2PtBR())
        .wait(2000);

      //Informa um valor maior do que o saldo a ser liquidado
      cy.get('input[nat="cadastroNotaLiquidacaoItemValorBruto"]')
        .dblclick()
        .type("8,00")
        .wait(2000);

      //Ao abrir o modal, preenche os campos e adiciona parcela da nota de liquidação
      cy.get('button[nat="SalvarFechar"]', { timeout: 2000 }).click();

      //valida se a nota de Liquidação foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 1000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>button").click();
    });
  }
}
export default new notaLiquidacao();
