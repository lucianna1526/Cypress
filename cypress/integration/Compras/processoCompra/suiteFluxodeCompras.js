import suiteProcessoCompra from "./suiteProcessoCompra";
import requisicaoFluxoCompras from "./requisicaoFluxoCompras";


describe("Suite de fluxo de compras", () => {
    // Executa a suite de fluxo de compras
    requisicaoFluxoCompras.requisicaoProcesoCompras();
    suiteProcessoCompra.suite();
});