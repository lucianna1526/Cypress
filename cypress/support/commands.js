import menuCompras from "../integration/Utils/menuCompras";
import '@testing-library/cypress/add-commands';
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
  (modulo, menu, nomeMenu = '', voltaSubModulo = 0)=>{
      /*if (voltaModulo > 0) {
      cy.get('[title="Ir para menu geral"]').click();
    }
    if (voltaSubModulo > 0) {
      cy.get('[title="Ir para menu geral"]').click();
    }*/
    
    //função para clica no ok de modal chato pra kralho
    //cy.get('button[nat="pdBtnAlertOK"]').click().wait(1000);
       menuCompras.acessaMenu(modulo, menu, nomeMenu, voltaSubModulo);  
    if(`!${menu}`){
      //if(cy.get('.pd-crud-titulo-span').invoke('text')!=nomeMenu){
        
        menuCompras.acessaMenu(modulo, menu, nomeMenu, voltaSubModulo); 
      cy.get("body").then(($body) => {
        //pdBtnAlertOKNao
        if ($body.find('button[nat="pdBtnAlertOKNao"]').length > 0) {
          cy.get('button[nat="pdBtnAlertOKNao"]').first().click().wait(1000);
          //cy.wait('@getModulo');
        }
        if ($body.find('button[nat="pdBtnAlertOK"]').length > 0) {
          cy.get('button[nat="pdBtnAlertOK"]').first().click().wait(1000);
          //cy.wait('@getModulo');
        }
        if ($body.find('button[ng-click="fechar()"]').length > 0) {
          cy.get('button[ng-click="fechar()"]').first().click({ force: true }).wait(1000);
          //cy.wait('@getModulo');
        }
        
      });
      
      cy.get(".md-toolbar-tools>a").invoke('text').then((text) => {
        console.log(text.trim());
        
        cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu').as('getUrl');
        
        /*if(text.trim() != `SIG - ${modulo}` && (text.trim() !="SIG - Sistema Integrado de Gestão")){
          console.log('volta para o menu principal');
          cy.get('[title="Ir para menu geral"]').click();
          cy.wait('@getUrl')
        }*/
        
        
        
        if(text.trim().toLowerCase() != (`SIG - ${modulo}`).toLowerCase() && (text.trim() !="SIG - Sistema Integrado de Gestão")){
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
      
      //cy.get("UL[class='dropdown-menu']",{timeout:10000}).contains('span',menu).click();
      const exp = new RegExp(`(${menu})`, "g");
      //cy.get("UL[class='dropdown-menu']").contains(exp).click();
      
      cy.get("UL[class='dropdown-menu']>li").each(($el, index, $list) => {
        if ($el.text().trim() === menu) {
          cy.wrap($el).click();        
        }
      });

      //confirma troca de tela se a atual quebrou e não salvou
      cy.get("body").then(($body) => {
        //pdBtnAlertOKNao
        if ($body.find('button[nat="pdBtnAlertOKNao"]').length > 0) {
          cy.get('button[nat="pdBtnAlertOKNao"]').first().click().wait(1000);
          //cy.wait('@getModulo');
        }
      });


      /*cy.get("UL[class='dropdown-menu']",{timeout:10000}).contains('span',menu).click();
      .contains(new RegExp(regex, 'g'));*/
      //cy.wait(1000);
      cy.wait('@getMenu');
      }
  });

//VALIDA LOAD PRODUTOS TELA REQUISIÇÃO
Cypress.Commands.add(
  "validaPDF",
  (textoNoPDF, quantidade, valorUnitario, valorEsperado) => {

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
/*
Aguarda Carregamento da grid
@param {string} nat - nat da grid a ser aguardada
*/
Cypress.Commands.add(
  'aguardarGrid',
  (componente) => {
    cy.get(`${componente}>div>div>div>div[class="ui-grid-canvas"]>div>div`, {timeout: 60000});
  }
);

Cypress.Commands.add(
  'autoComplete',
  (componente, texto,textoAutoComplete="",eq=0) => {
    
    cy.get(`${componente}`,{timeout:10000})
      .eq(eq)
      .clear()
      .wait(100)
      .click()
      .wait(100)
      .type(texto,{dalay:10})
      .wait(1000);
    if(textoAutoComplete == ""){
            cy.get(`[title="${texto}"]`,{timeout:10000}).first().click();           
    }else{
        cy.get(`[title="${textoAutoComplete}"]`,{timeout:10000}).first().click();
    }

  }
);

Cypress.Commands.add(
  'aguardarGridCarregar',
  (componente) => {
    cy.get(`${componente}>div>div>div>div[class="ui-grid-canvas"]>div>div`, {timeout: 60000});
  }
);

Cypress.Commands.add(
  'gridClicar',
  (componente, texto,botao) => {
      cy.aguardarGridCarregar(componente);
      if(botao == ""){
        cy.get(`${componente}>div>div>div>div[class="ui-grid-canvas"]>div>div`).contains(texto).click({force: true});
      }else{
        cy.get(`${componente}>div>div>div>div[class="ui-grid-canvas"]>div>div`,{timeout:10000})
        .contains(texto)
        .parents(".ui-grid-row")
        .find(`${botao}`)
        .click({force: true});
      }
  }
)
Cypress.Commands.add(
  'digitaSpan',
  (span,texto,eq=0,campo='input') => {
    //cy.contains(".form-group",`${span}`,{timeout:10000})
    cy.get(`[label="${span}"`,{timeout:10000})
              .find(`${campo}`)
              .eq(eq)
              .type(`${texto}`)

    
  }
);
Cypress.Commands.add(
  'clicaSpan',
  (span,eq=0,campo='button') => {
    //cy.contains(".form-group",`${span}`,{timeout:10000})
    cy.get(`[label="${span}"`,{timeout:10000})
              //.parents(".form-group")
              .find(`${campo}`)
              .eq(eq)
              .click({force: true});    
  }
);

Cypress.Commands.add(
  'validaSpan',
  (span,texto,eq=0,campo='.pd-label-input-leitura') => {
    //cy.contains(".form-group",`${span}`,{timeout:10000})
    cy.get(`[label="${span}"`,{timeout:10000})
              //.parents(".form-group")
              .find(`${campo}`)
              .eq(eq)
              .should('have.text',`${texto}`);
  }
);

Cypress.Commands.add(
  'spanAutoComplete',
  (span,texto,textoAutoComplete="",eq=1,campo="input") => {
    
    //cy.contains(".form-group",`${span}`,{timeout:10000})
    cy.get(`[label="${span}"`,{timeout:10000})
              //.parents(".form-group")
              .find(`${campo}`)
      .eq(eq)
      .clear()
      .wait(100)
      .click()
      .wait(100)
      .type(texto,{dalay:10})
      .wait(1000);
    if(textoAutoComplete == ""){
            cy.get(`[title="${texto}"]`,{timeout:10000}).first().click();           
    }else{
        cy.get(`[title="${textoAutoComplete}"]`,{timeout:10000}).first().click();
    }

  }
);