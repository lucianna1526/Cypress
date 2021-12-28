class processoComprasDispensaCubataoGeraAutorizacaoCompra {
  validaCapa() {
    it("Acessa Tela Cadastro de requisição de compras", () => {
      /*
        if (cy.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }*/
      cy.get("body").then(($body) => {
        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
        }
      });
    });
    it("Acessa - Capa Processo de compra", () => {
      cy.wait(5000);

      cy.wait(5000);
      cy.get('button[nat="botaoSideMenu"]').click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Processo de compras")
        .click()
        .type("{downarrow}")
        .type("{enter}");
      cy.wait(1000);

      //acessa requisição 7249
      /*cy.get('input[nat="cadastroProcessoCompraNProcessoCompra"]')
        .type("7248")
        .tab()
        .wait(10000);*/
    });
    //validar o primeiro item da lista
    it("Valida Capa Processo de compra", () => {
      //Informa valor unitario item 3
      /*cy.get('[nat="CellTemplate"]')
        .contains("76212 - T DE 1/2")
        .parent('div[role="row"]')
        //.find("span")
        //.contains("1,7750")
        .dblclick()
        .screenshot("Item 1")
        .wait(5000);*/

      cy.get('input[nat="cadastroProcessoCompraNProcessoCompra"]')
        .invoke("text") // for input or textarea, .invoke('val')
        .then((text) => {
          const someText = text;
          if (someText < 1) {
            cy.get(
              'button[nat="cadastroProcessoCompraNProcessoCompraAnterior"]'
            )
              .click()
              .wait(5000);
          }
          cy.log(someText);
        });

      cy.get('div[nat="processodeComprasPrincipalItensGrid"]').as("grid");

      //VALIDA ITEM 1 - 76212 - T DE 1/2"
      cy.get("@grid")
        .contains('76212 - T DE 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7750").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,78").should("length", 1);

      //VALIDA ITEM 2 - 73539 - SUPORTE PARA FERRO DE T 1/2"
      cy.get("@grid")
        .contains('73539 - SUPORTE PARA FERRO DE T 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7650").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,76").should("length", 1);

      //VALIDA ITEM 3 - 73538 - REGISTRO ESFERA 1/2"
      cy.get("@grid")
        .contains('73538 - REGISTRO ESFERA 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7751").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,78").should("length", 1);

      //VALIDA ITEM 4 - 73536 - UNIÃO 3/8""
      cy.get("@grid")
        .contains('73536 - UNIÃO 3/8"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7651").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,77").should("length", 1);

      //VALIDA ITEM 5 - 73534 - UNIÃO 1/2"
      cy.get("@grid")
        .contains('73534 - UNIÃO 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7649").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,76").should("length", 1);

      //VALIDA ITEM 6 - 73257 - POSTE DE CONCRETO
      cy.get("@grid")
        .contains("73257 - POSTE DE CONCRETO") //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(8).contains("1,7749").should("length", 1);
      cy.get("@coluna").eq(9).contains("1,77").should("length", 1);
    });
  }
  validaJulgamento() {
    //validar o primeiro item da lista
    it("Valida Valor Grid Julgado fornecedor", () => {
      cy.get('li[nat="Julgamento"]').click().wait(5000);

      cy.get(
        'div[nat="cadastroPrecosFornecedoresCotacaoFornecedorGrid"]>div>div>div>div[class="ui-grid-canvas"]'
      ).within(($list) => {
        cy.get('span:contains("10,62")').should("length", 2);
        /*cy.find("span")
            .contains(new RegExp("^" + "1,77" + "$", "g"))
            .should("length", 3);*/
      });
    });
    it("Valida Valores Grid Julgamento", () => {
      cy.get(
        'div[nat="cadastroPrecosFornecedoresGridServiceGrid1"]>div>div>div>div[class="ui-grid-canvas"]'
      ).as("grid");

      cy.get("@grid").within(($list) => {
        cy.get('span:contains("1,77")').should("length", 2);
        /*cy.find("span")
          .contains(new RegExp("^" + "1,77" + "$", "g"))
          .should("length", 3);*/
      });

      cy.get("@grid").within(($list) => {
        cy.get('span:contains("1,78")').should("length", 2);
      });

      cy.get("@grid").within(($list) => {
        cy.get('span:contains("1,76")').should("length", 2);
      });
    });
  }
  validaAutorizacaoCompra() {
    //validar o primeiro item da lista
    it("Abre Aba Autorização de compra", () => {
      cy.get('li[nat="Gera autorização de compra"]').click().wait(5000);
    });
    it("Valida Valor Grid Julgado fornecedor", () => {
      cy.get('[nat="consultaAutorizacaoComprasCdFornecSelect"]')
        .click()
        .wait(500)
        .type("prodata")
        .type("{enter}")
        .wait(5000);

      cy.get('[title="10,6200"]').should("length", 2);
    });

    it("Valida Saldo Cadastro de pedido de compra", () => {
      cy.get('[title="Gerar autorização"]').click().wait(5000);
      cy.get('[title="Abrir pedido de compra"]').first().click().wait(5000);
    });

    it("Valida Total Cadastro de Pedido de compra", () => {
      cy.get(
        '[nat="cadastroPedidoCompraValorTotal"]>div>div>span>span:contains("10,62")'
      ).should("length", 1);
    });

    it("Valida Total Nota Fiscal", () => {
      cy.get(
        '[nat="cadastroPedidoComprasPrincipalTotalNotaFiscal"]>div>div>span>span:contains("10,62")'
      ).should("length", 1);
    });

    it("Valida Aba Saldo", () => {
      cy.get('[nat="Saldo"]').click().wait(5000);

      cy.get('div[nat="cadastroPedidoComprasSaldoPedidoGrid"]').as("grid");

      //VALIDA ITEM 1 - 76212 - T DE 1/2"
      cy.get("@grid")
        .contains('T DE 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha1");

      //localiza a coluna e seta um alias com o as

      //VALIDA ITEM 2 - 73539 - SUPORTE PARA FERRO DE T 1/2"
      cy.get("@grid")
        .contains('SUPORTE PARA FERRO DE T 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha2");

      //VALIDA ITEM 3 - 73538 - REGISTRO ESFERA 1/2"
      cy.get("@grid")
        .contains('REGISTRO ESFERA 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha3");

      //VALIDA ITEM 4 - 73536 - UNIÃO 3/8""
      cy.get("@grid")
        .contains('UNIÃO 3/8"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha4");

      //VALIDA ITEM 5 - 73534 - UNIÃO 1/2"
      cy.get("@grid")
        .contains('UNIÃO 1/2"') //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha5");

      //VALIDA ITEM 6 - 73257 - POSTE DE CONCRETO
      cy.get("@grid")
        .contains("POSTE DE CONCRETO") //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .as("linha6");
      //localiza a coluna e seta um alias com o as

      //SCROLA GRID PARA DIREITA
      cy.get("@grid").find(".ui-grid-viewport").scrollTo("right", {
        easing: "linear",
        duration: 2000,
      });

      //localiza a coluna e seta um alias com o as
      cy.get("@linha1")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,78")
        .should("length", 1);
      cy.get("@linha2")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,76")
        .should("length", 1);
      cy.get("@linha3")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,78")
        .should("length", 1);
      cy.get("@linha4")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,77")
        .should("length", 1);
      cy.get("@linha5")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,76")
        .should("length", 1);
      cy.get("@linha6")
        .find(".ui-grid-cell-contents")
        .eq(8)
        .contains("1,77")
        .should("length", 1);
    });
    /*  it("Volta para o inicio", () => {
      cy.get('[ng-click="fechar()"]').first().click().wait(5000);
      cy.get('[ng-click="fechar()"]').first().click().wait(5000);
    }); */
  }
  geraAutorizacaoCubatao() {
    it("Acessa - Fase Gera autorização de compra", () => {
      //Clica na Fase Gera autorização de compra
      cy.get('li[nat="Gera autorização de compra"]').click().wait(5000);

      //Seleciona Fornecedores vencedores
      cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
        .wait(500)
        .click()
        .type("{downarrow}")
        .type("{enter}");

      //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
      cy.get('button[title="Gerar autorização"]').click().wait(5000);

      //Informa local de estoque
      cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoque"]')
        .type("1")
        .tab()
        .wait(1000);

      //Clica em GERAR NOVA AUTORIZAÇÃO
      cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
        .click()
        .wait(5000);

      //Clica no botão para abrir o Pedido de Compras
      cy.get('button[title="Abrir pedido de compra"]').click().wait(5000);

      /*  //Aperta ESC pra sair das telas
      cy.get(
        '.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools'
      )
        .type("{esc}")
        .wait(1000);

      cy.get('[ng-click="fechar()"] > .md-blue-theme').type("{esc}").wait(1000); */
    });
  }
}

export default new processoComprasDispensaCubataoGeraAutorizacaoCompra();
