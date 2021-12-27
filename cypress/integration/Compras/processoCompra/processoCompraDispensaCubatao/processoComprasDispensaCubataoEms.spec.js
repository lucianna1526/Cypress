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

      cy.get('input[nat="cadastroEmsDtDocumento"]')
        .dblclick()
        //.type("15/12/2021");
        .type(onti);

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
      cy.get('input[nat="cadastroEmsDocumentoDataEmissao"]')
        //.type("15/12/2021");
        .type(onti);

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
      cy.get('input[nat="cadastroEmsLiquidacaoNrParcela"]')
        //.type("15/12/2021");
        .type(onti);

      //Data Vencimento
      cy.get('input[nat="cadastroEmsLiquidacaoDataVencimento"]')
        //.type("15/12/2021");
        .type(onti);

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
  validaEmsCubatao() {
    it("acessa modulo EMS", () => {
      //cy.moduloMenu('[nat="COMPRAS E LICITAÇÕES"]',    "EMS - Entrada de Mercadorias ou Serviços"      );

      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });

      //Acessa EMS
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("EMS - Entrada de Mercadorias ou Serviços")
        .wait(1000)
        .type("{enter}")
        .wait(5000);

      //14835
      cy.get('input[nat="cadastroEmsNrEms"]').type("14915").tab().wait(5000);
    });
    it("Valida Valor Empenho -> 10,62", () => {
      cy.get('[nat="cadastroEmsVlEmpenho"]>div>div>span>span').should(
        "have.text",
        "R$ 10,62"
      );
    });
    it("Valida Valor Produtos -> 10,62", () => {
      cy.get('[nat="cadastroEmsVlTotalProd"]>div>div>span>span').should(
        "have.text",
        "R$ 10,62"
      );
    });
    it("Valida Valor Notas -> 10,62", () => {
      cy.get('[nat="cadastroEmsVlTotalDocu"]>div>div>span>span').should(
        "have.text",
        "R$ 10,62"
      );
    });
    it("Valida Valor Parcelas -> 10,62", () => {
      cy.get('[nat="cadastroEmsValorParcelas"]>div>div>span>span').should(
        "have.text",
        "R$ 10,62"
      );
    });
    it("Valida Valor Associado -> 10,62", () => {
      cy.get('[nat="cadastroEmsVlTotalAssoc"]>div>div>span>span').should(
        "have.text",
        "R$ 10,62"
      );
    });
  }
  validaEmsCubataoAbaItem() {
    it("Valida arredondamento grid aba items 1,7750 -> 1,78", () => {
      cy.get('li[nat="Itens"]').click().wait(1000);

      //---Clica na Grid Itens da EMS---
      cy.get(
        '	div[nat="cadastroEmsItensGrid"]>div>div>div>div[class="ui-grid-canvas"]'
      ).as("grid");

      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("76212").parents(".row").contains("1,7750");
      cy.get("@grid")
        .contains("76212")
        .parents(".row")
        .contains("1,78")
        .should("length", 1);
    });
    it("Valida arredondamento grid aba items 1,7650 -> 1,76", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('	div[nat="cadastroEmsItensGrid"]').as("grid");

      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("73539").parents(".row").contains("1,7650");
      cy.get("@grid")
        .contains("73539")
        .parents(".row")
        .contains("1,76")
        .should("length", 1);
    });
    it("Valida arredondamento grid aba items 1,7751 -> 1,78", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("73538").parents(".row").contains("1,7751");
      cy.get("@grid")
        .contains("73538")
        .parents(".row")
        .contains("1,78")
        .should("length", 1);
    });

    it("Valida arredondamento grid aba items 1,7651 -> 1,77", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("73536").parents(".row").as("row");
      cy.get("@row").contains("1,7651");
      cy.get("@row").contains("1,77").should("length", 1);
    });

    it("Valida arredondamento grid aba 1,7649 -> 1,76", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("73534").parents(".row").as("row");
      cy.get("@row").contains("1,7649");
      cy.get("@row").contains("1,76").should("length", 1);
    });

    it("Valida arredondamento grid aba 1,7749 -> 1,77", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").contains("73257").parents(".row").as("row");
      cy.get("@row").contains("1,7749");
      cy.get("@row").contains("1,77").should("length", 1);
    });
    it("Valida soma grid 10,62", () => {
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").find('[title="10,62"]').should("have.text", "10,6210,62");
    });
  }
  validaEmsCubataoAbaDocumentos() {
    it("valida soma item na grid documentos", () => {
      cy.get('li[nat="Documentos"]').click().wait(1000);
      cy.get('div[nat="cadastroEmsDocumentoGrid"]').as("grid");

      cy.get("@grid")
        .contains("5-Nota Fiscal")
        .parents(".row")
        .contains("10,62")
        .should("length", 1);
    });

    it("valida soma no rodape grid ", () => {
      cy.get('[nat="cadastroEmsDocumentoGrid"]')
        .contains("10,62")
        .should("length", 1);
    });
  }
  validaEmsCubataoAbaParcela() {
    it("valida soma item na grid documentos", () => {
      cy.get('li[nat="Documentos"]').click().wait(1000);
      cy.get('div[nat="cadastroEmsDocumentoGrid"]').as("grid");

      cy.get("@grid")
        .contains("5-Nota Fiscal")
        .parents(".row")
        .contains("10,62")
        .should("length", 1);
    });

    it("valida soma na grid ", () => {
      cy.get('div[nat="cadastroEmsDocumentoGrid"]')
        .contains("10,62")
        .should("length", 1);
    });
  }
}

export default new processoComprasDispensaCubataoEms();
