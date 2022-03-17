import { formatedMonth2PtBR } from "../../Utils/helpers";

class notaEmpenhoParcelas {
  geraEmpenhoParcela() {
    //Recebe Mês de referencia da parcela
    const mesAtual = formatedMonth2PtBR();
    const janeiro = [
      {
        mesAtual,
        valor: "10,00",
      },
    ];
    const fevereiro = [
      {
        mesAtual,
        valor: "10,00",
      },
    ];
    const marco = [
      {
        mesAtual,
        valor: "10,00",
      },
    ];
    console.log(marco.mesAtual);
    const formatedMonth01 = "01";
    const formatedMonth02 = "02";
    const formatedMonth03 = "03";
    const formatedMonth04 = "04";
    const formatedMonth05 = "05";
    const formatedMonth06 = "06";
    const formatedMonth07 = "07";
    const formatedMonth08 = "08";
    const formatedMonth09 = "09";
    const formatedMonth10 = "10";
    const formatedMonth11 = "11";
    const formatedMonth12 = "12";

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
      cy.get(".md-toast-content>button").click();
    });
  }
}
export default new notaEmpenhoParcelas();
