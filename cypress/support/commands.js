/* //Realiza Login no sistema
Cypress.Commands.add(
  "login",
  (user = Cypress.env("USUARIO"), password = Cypress.env("PASSWORD")) => {
    cy.get("#usuario").focus().type(user, { log: false });
    cy.get("#iPassword").focus().type(password, { log: false });
  }
); */
//########FIM#######

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
