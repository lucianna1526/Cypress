import Utils from "../Utils";
import executaSqlDeletaRetencaoPagamento from "../dataReport/executaSqlDeletaRetencaoPagamento.spec";

class setup {
  constructor() {
    describe("Executa Suite Data Report", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.dataReport();
    });
  }
  dataReport() {
    describe("Executa SQL Deleta retençao da anulaçao da nota de pagamento", () => {
      executaSqlDeletaRetencaoPagamento.deletaRetencaoPagamento();
    });
  }
}

export default new setup();
