import { formatedMonth2PtBR } from "../../Utils/helpers";

class notaEmpenhoParcelas {
  geraEmpenhoParcela() {
    //Recebe Mês de referencia da parcela
    const mesAtual = formatedMonth2PtBR();

    it("ORÇAMENTO: NE - Nota de empenho/Parcelas", () => {
      cy.get('li[nat="Parcelas"]').click();
    });

    it("Nota de Empenho/Evento/Histórico - Insere Valor da Parcela", () => {
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
        `input[nat="cadastroNotaEmpenhoDespesaEmpenho${
          meses[parseInt(mesAtual) - 1]
        }"]`
      ).type("10,00", { Delay: 10 }, { timeout: 3000 });
    });

    it("Nota de Empenho Salva Empenho", () => {
      cy.get('[nat="cadastroNotaEmpenhoCrudSalvar"]').click();
      //valida se a nota de empenho foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 1000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>.md-action").click();
    });
  }
}
export default new notaEmpenhoParcelas();
