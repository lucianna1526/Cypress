/* //Realiza Login no sistema
Cypress.Commands.add(
  "login",
  (user = Cypress.env("USUARIO"), password = Cypress.env("PASSWORD")) => {
    cy.get("#usuario").focus().type(user, { log: false });
    cy.get("#iPassword").focus().type(password, { log: false });
  }
); */
//########FIM#######
const dayjs = require("dayjs");
const onti = dayjs().subtract(1, "day").format("DD/MM/YYYY");
const hoji = dayjs().format("DD/MM/YYYY");
//Preenche Requisição - Aba Produto
Cypress.Commands.add(
  "requisicaoAdicionarProduto",
  (codProduto, quantidade, valorUnitario, valorEsperado) => {
    //Limpar Campos
    cy.get('button[nat="cadastroItemRequisicaoComprasCrudLimpar"]')
      .click()
      .wait(2000);

    //ABA Cadastro de itens da requisição de compras - Codigo Produto
    cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]')
      .type(codProduto)
      .type("{enter}")
      .wait(1000);
    //ABA Cadastro de itens da requisição de compras - Quantidade Pedida
    cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
      .type(quantidade)
      .tab()
      .wait(1000);
    //ABA Cadastro de itens da requisição de compras - Valor Unitário
    cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
      .type(valorUnitario)
      .wait(100)
      .tab()
      .wait(1000);
    //ABA Cadastro de itens da requisição de compras - Origem do valor de referência
    cy.get('[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]')
      .click()
      .type("Cotação")
      .type("{enter}");

    //Validar SPAN valor Total
    cy.get('[nat="cadastroItemRequisicaoComprasValorTotal"]>div>div>span')
      .as("valorTotal")
      .should("contain", valorEsperado);

    cy.get('[nat="cadastroItemRequisicaoComprasVlExercicioAtual"]>div>div>span')
      .as("valorExercicioAtual")
      .should("contain", valorEsperado);

    //validar SPAN Valor do execicio atual

    const valorCalculado = parseFloat(valorUnitario) * parseFloat(quantidade);
    console.log(valorCalculado);
    //Validar SPAN valor Autorizado
    cy.get('[nat="cadastroItemRequisicaoComprasVlAutorizada"]>div>div>span>')
      .as("valorAutorizado")
      .should(
        "have.text",
        valorEsperado
        //parseFloat(valorEsperado).toFixed(4).replace(".", ",")
      );
    if (valorEsperado == "0,0000") {
      cy.get("@valorAutorizado").should("contain", "0,0000");
    }

    //SALVAR ITEM
    cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvar"]')
      .click()
      .wait(2000);
  }
);

Cypress.Commands.add(
  "moduloMenu",
  (modulo, menu, voltaModulo = 0, voltaSubModulo = 0)=>{
    /*if (voltaModulo > 0) {
      cy.get('[title="Ir para menu geral"]').click();
    }
    if (voltaSubModulo > 0) {
      cy.get('[title="Ir para menu geral"]').click();
    }*/
    
    

    cy.get(".md-toolbar-tools>a").invoke('text').then((text) => {
      console.log(text.trim());
      
      cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu').as('getUrl');
      
      /*if(text.trim() != `SIG - ${modulo}` && (text.trim() !="SIG - Sistema Integrado de Gestão")){
        console.log('volta para o menu principal');
        cy.get('[title="Ir para menu geral"]').click();
        cy.wait('@getUrl')
      }*/
      
      
      
      if(text.trim() != `SIG - ${modulo}` && (text.trim() !="SIG - Sistema Integrado de Gestão")){
        console.log('volta para o menu principal');
        cy.get('[title="Ir para menu geral"]').click();
        cy.wait('@getUrl')
      }
    });

      cy.get("body").then(($body) => {
        //verifica o nome do modulo
        //procura menu, se não encontrar clica no modulo

        if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
          cy.intercept('GET', '**/getTipoDeUsuarioNoModulo?codigoModulo=SCH2').as('getModulo');
          cy.get(`pd-botao-menu[nat="${modulo}"]`,{timeout: 15000}).wait(1000).click();
          //cy.wait('@getModulo');
        }

      });
    

    //prepara interncep para o carregamento do menu
    cy.intercept('GET', '**/rest/**').as('getMenu');
    //sigAutomacao/app/views/painel-controle-compras/abas/aba-principal.html
    
    //clica no menu Sanduiche
    cy.get('[nat="botaoSideMenu"]',{timeout:10000}).click();

    //digita no input o menu 
    cy.get('input[nat="buscaMenuVertical"]').type(menu);
    
    cy.get("UL[class='dropdown-menu']",{timeout:10000}).contains('span',menu).click();
    //cy.get("UL[class='dropdown-menu']").contains(RegExp(`^(${option})`, "g"))
    
    //cy.wait(1000);




      cy.wait('@getMenu');
    
  });

//VALIDA LOAD PRODUTOS TELA REQUISIÇÃO
Cypress.Commands.add(
  "requisicaoValidaProduto",
  (codProduto, quantidade, valorUnitario, valorEsperado) => {
    //Fecha  do teste anterior se existir
    cy.get("body").then(($body) => {
      if ($body.find('[ng-click="fechar()"]').length > 0) {
        cy.get('[ng-click="fechar()"] > .md-blue-theme').click().wait(2000);
      }
    });

    //Informa valor unitario item 2
    cy.get('[role="row"]').contains(codProduto).dblclick().wait(5000);

    //Validar SPAN valor Total
    cy.get('[nat="cadastroItemRequisicaoComprasValorTotal"]>div>div>span')
      .as("valorTotal")
      .should("contain", valorEsperado);

    cy.get('[nat="cadastroItemRequisicaoComprasVlExercicioAtual"]>div>div>span')
      .as("valorExercicioAtual")
      .should("contain", valorEsperado);

    //validar SPAN Valor do execicio atual

    const valorCalculado = parseFloat(valorUnitario) * parseFloat(quantidade);
    console.log(valorCalculado);
    //Validar SPAN valor Autorizado
    cy.get('[nat="cadastroItemRequisicaoComprasVlAutorizada"]>div>div>span>')
      .as("valorAutorizado")
      .should(
        "have.text",
        valorEsperado
        //parseFloat(valorEsperado).toFixed(4).replace(".", ",")
      );
    //if (valorEsperado == "0,0000") {

    //}

    //Fecha modal
    cy.get('[ng-click="fechar()"] > .md-blue-theme').click().wait(2000);
    //SALVAR ITEM
    /*cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvar"]')
      .esc()
      .wait(2000);*/
  }
);

//VALIDA LOAD PRODUTOS TELA REQUISIÇÃO
Cypress.Commands.add(
  "solicitacaoAdicionaProduto",
  (codProduto, quantidade, valorUnitario, valorEsperado) => {
    //informa o item para a compra
    cy.get('input[nat="cadastroSolicitacaoCompraItemProduto"]')
      .type(codProduto)
      .tab()
      .wait(1000);

    //informa o processo de compra
    cy.get('input[nat="cadastroSolicitacaoCompraItemProcesso"]')
      .type("2021014277")
      .tab()
      .wait(1000);

    //cadastra quantidade de produto
    cy.get('input[nat="cadastroSolicitacaoCompraItemQtdPedida"]')
      .type(quantidade)
      .tab();

    //informa o valor unitario
    cy.get('input[nat="cadastroSolicitacaoCompraItemValorUnitario"]')
      .type(valorUnitario)
      .tab();

    //Validar SPAN valor Total
    cy.get('[nat="cadastroSolicitacaoCompraItemValorTotal"]>div>div>span>span')
      .as("valorAutorizado")
      .should(
        "have.text",
        "R$ " + valorEsperado
        //parseFloat(valorEsperado).toFixed(4).replace(".", ",")
      );
  }
);

//CRia função procura valores na grid
Cypress.Commands.add(
  "procurarValorGrid",
  (codProduto, quantidade, valorUnitario, valorEsperado) => {
    cy.get('[class="customer-table"]').as("grid");

    //procura um botão na linha da grid
    cy.get("@grid")
      .contains("Holiday,John")
      .parents(".row")
      .find("button[nat='botaoEditar']")
      .screenshot("botaoEditar");

    //procura um texto em qualquer coluna da grid
    cy.get("@grid")
      .contains("Holiday,John")
      .parents(".row")
      .contains("8675309")
      .screenshot("8675309");

    //procura um texto em uma coluna especifica da grid
    cy.get("@grid")
      .contains("Holiday,John")
      .parents(".row")
      .find("div")
      .eq(2)
      .screenshot("div");

    //############## METODO 2
    it("valida grid aba Reservas", () => {
      cy.get('li[nat="Reservas"]').click().wait(1000);
      cy.get(
        //'div[nat="cadastroRequisicaoComprasReservasGrid"]>div>div>div>div[class="ui-grid-canvas"]'
        'div[nat="cadastroRequisicaoComprasReservasGrid"]'
      ).as("grid");
      //localiza a grid e seta um alias com o as

      cy.get("@grid")
        .contains("20211506") //contais pesquisa dentro da grid
        .parents(".ui-grid-row") //localiza a linha da grid
        .find(".ui-grid-cell-contents")
        .as("coluna");
      //localiza a coluna e seta um alias com o as

      cy.get("@coluna").eq(3).contains("10,62").should("length", 1);
      //eq() transforma o resultado em um array

      cy.get("@coluna").eq(5).contains("10,62").should("length", 1);
    });
    it("Procura valor na grid scrollando pro final", () => {
      //localiza a grid e seta um alias com o as
      cy.get('div[nat="ConsultaExecucaoOrcamentariaGrid"]').as("grid"); //caputra a grid

      //localiza a linha da grid e scrola ate o final
      cy.get("@grid")
        .contains("20211498")
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        })

        .find(".ui-grid-cell-contents")
        .as("coluna");

      //localiza a coluna e seta um alias com o as
      cy.get("@coluna").contains("35.000,00").should("length", 1);
    });
  }
);

Cypress.Commands.add("text", { prevSubject: true }, (subject, options) => {
  return subject.text();
});

Cypress.Commands.add(
  "angularCheck", 
  (componente) => {
  cy.get(componente).invoke('attr', 'aria-checked')
            .then((valor) => {
                if(valor == 'false'){
                    cy.get(componente).click();
                }
            });
});
Cypress.Commands.add(
  "angularUnCheck", 
  (componente) => {
  cy.get(`${componente}`).invoke('attr', 'aria-checked')
            .then((valor) => {
                if(valor == 'true'){
                    cy.get(`${componente}`).click();
                }
            });
});
