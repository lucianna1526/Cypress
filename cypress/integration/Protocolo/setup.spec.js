import Utils from "../Utils";

import autuacaoProcessoSpec from "./autuacao/autuacaoProcesso.spec";
import remessaProcessoSpec from "./remessa/remessaProcesso.spec";
import aceiteProcessoSpec from "./aceite/aceiteProcesso.spec";
class setup {
  constructor() {
    describe("Executa Suite Modulo Protocolo", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.protocolo();
      
    });
  }
  protocolo() {
    describe("Fluxo - Protocolo->Autuação", () => {
      autuacaoProcessoSpec.cadastroProcessoCapa();
      autuacaoProcessoSpec.anexarDocumento();
      autuacaoProcessoSpec.dadosTCMGoias();
      autuacaoProcessoSpec.enderecoCorrespondencia();
      
    })
    describe("Fluxo - Protocolo->Remessa", () => {
      
      remessaProcessoSpec.validaCadastroEmBranco();
      remessaProcessoSpec.cadastroCapaRemessa();
      remessaProcessoSpec.editaCapaRemessa();
      remessaProcessoSpec.excluiCapaRemessa();
      remessaProcessoSpec.cadastroCapaRemessa();
    })
    describe("Fluxo - Protocolo->Aceite", () => {
      aceiteProcessoSpec.procuraRemessa();
      // aceiteProcessoSpec.anexarDocumento();
      // aceiteProcessoSpec.dadosTCMGoias();
      // aceiteProcessoSpec.enderecoCorrespondencia();
    })
    
  }
    
}

export default new setup();