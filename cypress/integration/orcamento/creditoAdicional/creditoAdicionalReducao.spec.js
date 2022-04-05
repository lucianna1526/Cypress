import { formatedDate2PtBR } from "../../Utils/helpers";
class creditoAdicionalReducao {
  creditoAdicionalReducao() {
    it("ORÇAMENTO: NE - Nota de empenho", () => {
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.moduloMenu("ORÇAMENTO", "Crédito adicional");
    });

    it("Informa número da ficha para realizar a suplementação", () => {
      cy.get('input[nat="fichaInfoFicha"]').type("20221494").type("{enter}");
      cy.get('[nat="fichaInfoFicha"].ng-valid-maxlength').should(
        "have.value",
        "20221494"
      );
    });
    it("Adiciona a redução acima do saldo", () => {
      //Cilca no botão de adicionar
      cy.get('[nat="consultaCreditoAdicionalGridabrirTelaDeCadastro"]').click();
      //Informa a data da suplementação
      cy.get('input[nat="cadastroReservaDotacaoData"]').type(
        formatedDate2PtBR()
      );
      //Seleciona o tipo de suplementação
      cy.get('[nat="cadastroReservaDotacaoTipo2Select"]')
        .type("Redução")
        .type("{enter}");
      //Informa decreto
      cy.get('input[nat="cadastroReservaDotacaoSeqDecreto"]').type("46");
      //Informa tipo de alteração
      cy.get('[nat="cadastroReservaDotacaoTipoAlteracaoSelect"]')
        .type("82 - Reducao p/Remanejamento")
        .type("{enter}");
      //Informa o valor da redução
      cy.get('input[nat="cadastroReservaDotacaoValor"]').type("20000,00");
      //Informa o tipo de excesso
      cy.get('[nat="cadastroReservaDotacaoTipoExcessoSelect"]')
        .type("Outros")
        .type("{enter}");
      //Observação
      cy.get('textarea[nat="cadastroReservaDotacaoObservacao"]').type(
        "cadastro realizado através do teste automatizado"
      );
      //Adcionar e Sair
      cy.get('[nat="cadastroReservaDotacaoCrudSalvarFechar"]').click();
      //valida se a nota de pagamento foi salva com sucesso
      cy.get(".modal-body", { timeout: 5000 }).should(
        "contain",
        "Não é possível salvar. Ficha Orçamentária sem saldo para essa redução."
      );
      cy.get(".modal-footer>#pdBtnAlertOK", { timeout: 4000 }).click();
    });
    it("Adiciona redução dentro do saldo", () => {
      //Informa o valor da redução
      cy.get('input[nat="cadastroReservaDotacaoValor"]')
        .clear()
        .type("10000,00");
      //Adcionar e Sair
      cy.get('[nat="cadastroReservaDotacaoCrudSalvarFechar"]').click();
      //valida se a nota de pagamento foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 5000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      //Valida na grid o valor da suplementação
      cy.gridClicar('div[nat="consultaCreditoAdicionalGrid"]', "10.000,00", "");
    });
  }
}

export default new creditoAdicionalReducao();
