import { formatedDate2PtBR } from "../../Utils/helpers";
import { formatedMonth2PtBR } from "../../Utils/helpers";

class componentes {
  componentesTela() {
    it("Projetos: Componentes", () => {
      cy.moduloMenu("PROJETOS", "Componentes");
    });

    it("Valida insercao de dados", () => {
      //Auto complete
      cy.get('input[nat="testeArquiteturaAutoComplete"]')
        .type("15")
        .type("{enter}");

      //Clica no botao anterior - Autocomplete consulta text
      cy.get(
        'button[nat="testeArquiteturaAutoCompleteConsultaTextAnterior"]'
      ).click();
      //Clica no botao proximo - Autocomplete consulta text
      cy.get(
        'button[nat="testeArquiteturaAutoCompleteConsultaTextProximo"]'
      ).click();
      //Limpa campo - Autocomplete consulta text
      cy.get('input[nat="testeArquiteturaAutoCompleteConsultaText"]').clear();

      //Auto complete consulta text - Botao Pesquisar
      cy.get(
        'button[nat="testeArquiteturaAutoCompleteConsultaTextPesquisa"]'
      ).click();
      //Tela Pesquisa - Codigo
      cy.get('input[nat="gestaoCodigo"]').type("15");
      //clica no botao pesquisar
      cy.get('button[nat="gestaoPesquisaPesquisar"]').click();
      //Clica no botao carregar registro
      cy.get('button[nat="botaoCarregar"]').click();

      //Input text
      cy.get('input[nat="testeArquiteturaInputText"]').type(
        "12345 abcdef ABCDEF #@!$% 1010",
        { delay: 10 }
      );
      //Input area
      cy.get('textarea[nat="testeArquiteturaInputArea"]')
        .type("TESTE AUTOMACAO", { delay: 10 })
        .type("{enter}");
      cy.get('textarea[nat="testeArquiteturaInputArea"]')
        .type("TESTE AUTOMACAO", { delay: 10 })
        .type("{enter}");
      cy.get('textarea[nat="testeArquiteturaInputArea"]')
        .type("TESTE AUTOMACAO", { delay: 10 })
        .type("{enter}");
      cy.get('textarea[nat="testeArquiteturaInputArea"]')
        .type("TESTE AUTOMACAO", { delay: 10 })
        .type("{enter}");

      //Input editor
      cy.get('[nat="testeArquiteturaInputEditor"]').type("TESTE AUTOMACAO", {
        delay: 10,
      });

      //Input data
      cy.get('input[nat="testeArquiteturaInputDate"]')
        .clear()
        .type(formatedDate2PtBR());
      //Input Ano
      cy.get('button[nat="testeArquiteturaInputAno BotaoProximo"]').click();
      //Input Mes
      cy.get('input[nat="testeArquiteturaInputMes"]').type(
        formatedMonth2PtBR()
      );
      //Select
      cy.get('[nat="testeArquiteturaSelectSelect"]')
        .type(" Liberados ")
        .type("{downarrow}")
        .type("{enter}");

      //Enter
      cy.get('input[nat="testeArquiteturaEnter"]')
        .type("101010", { delay: 10 })
        .type("{enter}");

      //Color
      cy.get(".pd-input-color > .form-group > .input-group").type("#FF0000");
      /*cy.get(
        ".pd-input-color > .form-group > .input-group > .input-group-btn > .btn"
      ).click();*/
      //Radio
      cy.get('md-radio-button[aria-label="Radio"]').click({ force: true });
      cy.get('md-radio-button[aria-label="Radio saude"]').click({
        force: true,
      });
      //Checkbox
      cy.get('[nat="testeArquiteturaCheckBox"][aria-label="Checkbox"]').click({
        force: true,
      });
      //Input text maiusculo
      cy.get('textarea[nat="testeArquiteturaInputTextMaiusculo"]').type(
        "TEXT AREA MAIUSCULO AUTOMACAO",
        { delay: 10 }
      );
      cy.get(".pd-stats-card-h2").should(
        "contain",
        "TEXT AREA MAIUSCULO AUTOMACAO"
      );
    });
    it("Clica na Aba Fornecedor", () => {
      cy.get('li[nat="testeArquiteturaTabsFornecedor"]').click();
      //Informa o Fornecedor
      cy.autoComplete(
        '[nat="testeArquiteturaFornecedorCdFornecDescricao"]',
        "PRODATA INFORMATICA LTDA"
      );
      /* cy.get('input[nat="testeArquiteturaFornecedorCdFornecDescricao"]')
        .type("PRODATA INFORMATICA")
        .click()
        .type("{enter}");*/
      cy.get(".col-md-6 > .form-group > .form-control > span").should(
        "contain",
        "PRODATA INFORMATICA"
      );
    });
  }
}

export default new componentes();
