class processoComprasDispensaCubataoEms {
  emsCubatao() {
    it("Preenche EMS", () => {
      /*  cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.wait(5000);
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          cy.wait(5000);
        }
      });
    });

    it("Preenche Pedido de Compras", () => {
      //Acessa Pedido de Compras
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("EMS - Entrada de Mercadorias ou Serviços")
        .click()
        .type("{downarrow}")
        .type("{enter}");

      //seleciona Pedido
      cy.get('input[nat="cadastroEmsNrEms"]').type("14829").type("{enter}");
      cy.wait(5000); */

      //---Preenche Aba Principal---
      //Data Liquidação
      cy.get('input[nat="cadastroEmsDtDocumento"]');
      //Transação
      cy.get('input[nat="cadastroEmsPrincipalCdTransacaoDescricao"]')
        .click()
        .type("ENTRADA NF")
        .wait(500)
        .type("{enter}");

      //Nº Processo
      cy.get('input[nat="cadastroEmsPrincipalAutoCompleteNrProcesso"]').type(
        "2021014279"
      );

      //Clica no botão ADICIONAR - EMS
      cy.get('[nat="cadastroEmsCrudSalvar"]').click().wait(5000);
      //---Finaliza Aba Principal---

      //---Preenche Aba Dados do Documentos---
      //Clica na Grid Documentos
      cy.get('[heading="Documentos"] > .nav-link').click().wait(3000);

      //Clica no botão ADICIONAR - Grid Documentos
      cy.get(
        ":nth-child(1) > pd-grid > .pd-grid-div > .navbar > .container-fluid > .navbar-form > .row > .pd-grid-row-btn-adicionar > .md-raised"
      ).click();

      //Nº Documento
      cy.get('input[nat="cadastroEmsDocumentoNrDocumento"]').type("14279985");

      //Nº Série
      cy.get('input[nat="cadastroEmsDocumentoNrSerie"]').type("2");

      //Nº Série
      cy.get('input[nat="cadastroEmsDocumentoNrAidf"]').type("2");

      //Nº Série
      cy.get('input[nat="cadastroEmsDocumentoDataEmissao"]').type("15/12/2021");

      //Valor Total NF.
      cy.get('input[nat="cadastroEmsDocumentoValorTotalNf"]').type(
        "16/12/2021"
      );

      //Data NF.
      cy.get('input[nat="cadastroEmsDocumentoValorTotalNf"]').type(
        "16/12/2021"
      );

      //Tipo de Documento
      cy.get('[nat="cadastroEmsDocumentoTipoDocumentoSelect"]')
        .click()
        .type("5-Nota Fiscal")
        .wait(500)
        .type("{enter}");

      //Adicionar e Sair
      cy.get('button[nat="cadastroEmsDocumentoCrudSalvarFechar"]')
        .click()
        .wait(5000);

      //---Finaliza Aba Dados do Documentos---

      //---Clica na Grid Parcelas da liquidação---
      cy.get('[heading="Parcelas da liquidação"] > .nav-link').click();

      //Clica no botão ADICIONAR - Grid Parcelas da liquidação
      cy.get(
        'button[nat="cadastroEmsLiquidacaoGridabrirTelaDeCadastro"]'
      ).click();

      //Nº Parcela
      cy.get('input[nat="cadastroEmsLiquidacaoNrParcela"]').type("16/12/2021");

      //Data Vencimento
      cy.get('input[nat="cadastroEmsLiquidacaoDataVencimento"]').type(
        "16/12/2021"
      );

      //Valor
      cy.get('input[nat="cadastroEmsLiquidacaoValor"]').type("10,62");

      //Adicionar e Sair
      cy.get('button[nat="cadastroEmsLiquidacaoCrudSalvarFechar"]')
        .click()
        .wait(5000);

      //---Finaliza Aba Parcelas da liquidação---

      //Fechar EMS
      cy.get('button[nat="cadastroEmsDtFechamento"]').click();

      //Confirma Fechamento
      cy.get('button[nat="pdBtnAlertOKSim"]').click();
      /* cy.get(".md-toast-content")
        .should(
          "have.text",
          "Deseja realmente fechar esta EMS?          Após fechar esta EMS nao será mais possível realizar nenhuma alteração nesta EMS"
        )
        .screenshot(); */

      /*  cy.get('button[nat="pdBtnAlertOK"]').click();
      cy.get(".md-toast-content").should("EMS fechada com sucesso");
 */
      //Gerar Liquidação
      cy.get('button[nat="cadastroEmsGerarLiquidacao"]').click();
    });
  }
}

export default new processoComprasDispensaCubataoEms();
