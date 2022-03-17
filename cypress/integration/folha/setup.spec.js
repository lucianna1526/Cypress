import Utils from "../Utils";

import cadastroPessoaFolhaSpec from "./cadastroPessoaFolha.spec";
import cadastroPessoaFolhaDocumentacaoSpec from "./cadastroPessoaFolhaDocumentacao.spec";

import cadastroPessoaFolhaExclusaoSpec from "./cadastroPessoaFolhaExclusao.spec";

class setup {
  constructor() {
    describe("Executa Suite Modulo Gestão Pessoal", () => {
      before(() => {
        localStorage.clear();
        Utils.goHome();
        Utils.preencherLogin();
        //cy.wait(5000);
      });
      this.folha();
    });
  }
  folha() {
    describe("Fluxo - Folha de Pagamento / Cadastro de Pessoa", () => {
      //cadastroPessoaFolhaExclusaoSpec.cadastroPessoaExclusao();
      cadastroPessoaFolhaSpec.cadastroPessoaDadosPrincipais();
      cadastroPessoaFolhaDocumentacaoSpec.documentacao();
      cadastroPessoaFolhaExclusaoSpec.cadastroPessoaExclusao();
    });

    describe.skip("Fluxo - Exclusao de Cadastro", () => {
      cadastroPessoaFolhaExclusaoSpec.cadastroPessoaExclusao();
    });
  }
}

export default new setup();
