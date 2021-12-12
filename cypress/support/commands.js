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
  (codProduto, quantidade, valorUnitario) => {
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
      .tab()
      .wait(1000);
    //ABA Cadastro de itens da requisição de compras - Origem do valor de referência
    cy.get('[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]')
      .click()
      .type("Cotação")
      .type("{enter}");
    //Adicionar e Limpar
    cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarLimpar"]')
      .click()
      .wait(2000);
  }
);
