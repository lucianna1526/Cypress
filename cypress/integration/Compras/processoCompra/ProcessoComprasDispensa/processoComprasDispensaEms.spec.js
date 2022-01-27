import { formatedDate2PtBR } from "../../../Utils/helpers";

class processoComprasDispensaEms {
  emsDispensa() {
    it("Acessa Modulo Compras", () => {
       cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.wait(5000);
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
          cy.wait(5000);
        }
      });
    });
    it("Preenche Entrada de Mercadoria e Serviços EMS", () => {
      //Acessa Pedido de Compras
      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("EMS - Entrada de Mercadorias ou Serviços")
        .click()
        .type("{downarrow}")
        .type("{enter}");
      /* //seleciona Pedido
      cy.get('input[nat="cadastroEmsNrEms"]').type("14829").type("{enter}");
      cy.wait(5000); */

      //Pesquisa Ordem de Fornecimento (Entrega)
      cy.get('button[nat="cadastroEmsNrEntregaPesquisa"]').click();

      //Seleciona ultimo pedido na grid de pesquisa
      cy.get(
        '[nat="pesquisaAutorizacaoEntregaGrid"]'
      ).first();

      cy.get('[nat="botaoCarregar"]').first().click();

      //---Preenche Aba Principal---

      //Transação
      cy.get('input[nat="cadastroEmsPrincipalCdTransacaoDescricao"]')
        .click()
        .type("ENTRADA")
        .wait(500)
        .type("{enter}");

      //Nº Processo
      cy.get('input[nat="cadastroEmsPrincipalAutoCompleteNrProcesso"]').type(
        "2022014911"
      );

      //Clica no botão ADICIONAR - EMS
      cy.get('[nat="cadastroEmsCrudSalvar"]').click().wait(500);
     
      //---Finaliza Aba Principal---

      //---Preenche Aba Dados do Documentos---
      //Clica na Grid Documentos
      cy.get('[heading="Documentos"] > .nav-link').click().wait(3000);

      //Clica no botão ADICIONAR - Grid Documentos
      cy.get(
        ":nth-child(1) > pd-grid > .pd-grid-div > .navbar > .container-fluid > .navbar-form > .row > .pd-grid-row-btn-adicionar > .md-raised"
      ).click();

      //Nº Documento
      cy.get('input[nat="cadastroEmsDocumentoNrDocumento"]').type("123");

      //Nº Série
      cy.get('input[nat="cadastroEmsDocumentoNrSerie"]').type("123");

      //Nº AIDF
      cy.get('input[nat="cadastroEmsDocumentoNrAidf"]').type("123");

      //Nº Data Emissão
      cy.get('input[nat="cadastroEmsDocumentoDataEmissao"]')
        //.type("15/12/2021");
        .type(formatedDate2PtBR());

      /* //Valor Total NF.
      cy.get('input[nat="cadastroEmsDocumentoValorTotalNf"]').type("100"); */

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
      cy.get('input[nat="cadastroEmsLiquidacaoNrParcela"]').type("1");

      //Data Vencimento
      cy.get('input[nat="cadastroEmsLiquidacaoDataVencimento"]')
        //.type("15/12/2021");
        .type(formatedDate2PtBR());

      //Valor
      cy.get('input[nat="cadastroEmsLiquidacaoValor"]').type("100,00");

      //Adicionar e Sair
      cy.get('button[nat="cadastroEmsLiquidacaoCrudSalvarFechar"]')
        .click()
        .wait(5000);    
    

      //---Finaliza Aba Parcelas da liquidação---

      //Fechar EMS
      cy.get('button[nat="cadastroEmsDtFechamento"]').click();

      //Confirma Fechamento
      cy.get('button[nat="pdBtnAlertOKSim"]').click();
      

      
 
      //Gerar Liquidação
      cy.get('button[nat="cadastroEmsGerarLiquidacao"]').click();
      
   
    });
  }
  validaEmsDispensa() {
    it("acessa modulo EMS", () => {
      //cy.moduloMenu('[nat="COMPRAS E LICITAÇÕES"]',    "EMS - Entrada de Mercadorias ou Serviços"      );
      /* cy.get("body").then(($body) => {
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
        .wait(5000); */
      /* //14835
      cy.get('input[nat="cadastroEmsNrEms"]').type("14915").tab().wait(5000);
      //volta anterior
      cy.get('[nat="cadastroEmsNrEmsAnterior"]').click().wait(5000); */
    });
    it("Valida Valor Empenho -> 100,00", () => {
      cy.get('[nat="cadastroEmsVlEmpenho"]>div>div>span>span').should(
        "have.text",
        "R$ 100,00"
      );
    });
    it("Valida Valor Produtos -> 100,00", () => {
      cy.get('[nat="cadastroEmsVlTotalProd"]>div>div>span>span').should(
        "have.text",
        "R$ 100,00"
      );
    });
    it("Valida Valor Notas -> 100,00", () => {
      cy.get('[nat="cadastroEmsVlTotalDocu"]>div>div>span>span').should(
        "have.text",
        "R$ 100,00"
      );
    });
    it("Valida Valor Parcelas -> 100,00", () => {
      cy.get('[nat="cadastroEmsValorParcelas"]>div>div>span>span').should(
        "have.text",
        "R$ 100,00"
      );
    });
    it("Valida Valor Associado -> 100,00", () => {
      cy.get('[nat="cadastroEmsVlTotalAssoc"]>div>div>span>span').should(
        "have.text",
        "R$ 100,00"
      );
    });
  }
  validaEmsDispensaAbaItem() {
    /* it("Valida arredondamento grid aba items 1,7750 -> 1,78", () => {
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
    }); */

    it("Valida arredondamento grid aba R$ 100,00", () => {
      //---Clica na Grid Itens da EMS---
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 100,00 e aredondamento para 100,00
      cy.get("@grid").contains("2829875").parents(".row").as("row");
      cy.get("@row").contains("100,00");
      cy.get("@row").contains("100,00").should("length", 1);
    });
    it("Valida soma grid 100,00", () => {
      cy.get('div[nat="cadastroEmsItensGrid"]').as("grid");
      //valida 1,7750 e aredondamento para 1,78
      cy.get("@grid").find('[title="100,00"]').should("have.text", "100,00");
    });
  }
  validaEmsDispensaAbaDocumentos() {
    it("valida soma item na grid documentos", () => {
      cy.get('li[nat="Documentos"]').click().wait(1000);
      cy.get('div[nat="cadastroEmsDocumentoGrid"]').as("grid");

      cy.get("@grid")
        .contains("5-Nota Fiscal")
        .parents(".row")
        .contains("100,00")
        .should("length", 1);
    });

    it("valida soma no rodape grid ", () => {
      cy.get('[nat="cadastroEmsDocumentoGrid"]')
        .contains("100,00")
        .should("length", 1);
    });
  }
  validaEmsDispensaAbaParcela() {
    it("valida soma item na grid documentos", () => {
      cy.get('li[nat="Documentos"]').click().wait(1000);
      cy.get('div[nat="cadastroEmsDocumentoGrid"]').as("grid");

      cy.get("@grid")
        .contains("5-Nota Fiscal")
        .parents(".row")
        .contains("100,00")
        .should("length", 1);
    });

    it("valida soma na grid ", () => {
      cy.get('div[nat="cadastroEmsDocumentoGrid"]')
        .contains("100,00")
        .should("length", 1);
    });
  }
}

export default new processoComprasDispensaEms();
