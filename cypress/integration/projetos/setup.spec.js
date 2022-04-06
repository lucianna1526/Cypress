import Utils from "../Utils/index";
import componentes from "../projetos/componentes/componentes.spec";
import componentesExtrasSpec from "./componentes/componentesExtras.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Projetos", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.projetos();
    });
  }
  projetos() {
    describe("Fluxo - Componentes", () => {
      componentes.componentesTela();
      componentesExtrasSpec.componentesExtrasTela();
    });
  }
}

export default new setup();
