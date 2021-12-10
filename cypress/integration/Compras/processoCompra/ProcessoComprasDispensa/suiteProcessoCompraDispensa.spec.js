import processoComprasDispensaRequisicao from "./processoComprasDispensaRequisicao.spec";

class suiteProcessoComprasDispensa {
  constructor() {
    this.suite();
  }
  suite() {
    processoComprasDispensaRequisicao.requisicao();
  }
}

export default new suiteProcessoComprasDispensa();
