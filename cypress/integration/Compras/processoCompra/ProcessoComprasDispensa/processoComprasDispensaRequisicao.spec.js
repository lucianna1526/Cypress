
class processoComprasDispensaRequisicao {
  requisicao() {
    it('Acessa Modulo Compras', ()=>{
      cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
    })
      
      it("Preenche Requisição", () => {
        //Acessa modulo compras e aguarda 5 segundos
        //acessaModuloCompras.acessarCompras();
        cy.wait(5000);
        cy.get('button[nat="botaoSideMenu"]')
        .click();
        cy.get('input[nat="buscaMenuVertical"]')
          .type("Requisição de compras")
          .click()
          .type("{enter}");
        cy.wait(1000);

        //Organograma
        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisOrganograma"]'
        ).type("13.2201.0042.2194");

        //Subgrupo
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisSubGrupo"]')
          .click()
          .type("16");

        //Ficha
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFicha"]')
          .click()
          .type("20211455")
          .type("{enter}")
          .tab();

        //Origem do recurso
        cy.get(
          '[nat="cadastroRequisicaoComprasDadosPrincipaisOrigemRecursoSelect"]'
        )
          .click()
          .type(" Municipal ")
          .wait(500)
          .type("{enter}");
        cy.focused().tab();
        /* .click()
          .type("{enter}");
        //cy.get('body').tab()
        cy.focused().tab(); */

        //Fonte
        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisFonte"]'
        ).click();
        cy.focused().tab().wait(2000);

        //Detalhamento da Fonte
        cy.get(
          'input[nat="cadastroRequisicaoComprasDadosPrincipaisDetalhamentoFonte"]'
        )
          .click()
          .type("10000")
          .wait(3000)
          .click()
          .type("{enter}");

        //Processo
        cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisProcesso"]')
          .click()
          .type("2021000054");

        //Salvar Button Capa
        cy.get('button[nat="cadastroRequisicaoComprasCrudSalvar"]').click();

        //Aguarda 5 segundos
        cy.wait(5000);

        // --INSERE PRODUTO 1 NA REQUISIÇÃO--

        //ABA Cadastro de itens da requisição de compras - Codigo Produto
        cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]')
          .type("48859114")
          .type("{enter}")
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Quantidade Pedida
        cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
          .type("5")
          .tab()
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Valor Unitário
        cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
          .type("1,7750")
          .tab()
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Origem do valor de referência
        cy.get(
          '[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]'
        )
          .click()
          .type(" Cotação própria realizada no mercado ")
          .wait(500)
          .type("{enter}");
        cy.focused().tab();

        //Adicionar e Limpar
        cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarLimpar"]')
          .click()
          .wait(2000);

        // --INSERE PRODUTO 2 NA REQUISIÇÃO--

        cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]')
          .type("48859972")
          .type("{enter}")
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Quantidade Pedida
        cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
          .type("5")
          .tab()
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Valor Unitário
        cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
          .type("1,7650")
          .tab()
          .wait(1000);

        //ABA Cadastro de itens da requisição de compras - Origem do valor de referência
        cy.get(
          '[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]'
        )
          .click()
          .type(" Cotação própria realizada no mercado ")
          .wait(500)
          .type("{enter}");
        cy.focused().tab();

        //Adicionar e Sair
        cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarFechar"]')
          .click()
          .wait(3000);
        /*
                if(cy.get('[nat="cadastroRequisicaoComprasDadosPrincipaisTotalPedido"] > .col-md-2 > .form-group > .form-control > span')=='8,90'){
                    console.log('Valor esperado')
                   
                }else{
                    cy.get('[nat="Produtos"]').click()
                    console.log('Valor diferente do esperado')
                }
             */

        //Enviar e Liberar
        cy.get('button[nat="cadastroRequisicaoComprasEnviarLiberar"]')
          .click()
          .wait(1000);

        //##############FIM-REQUISIÇÃO###################
      });      
    
  }
}
export default new processoComprasDispensaRequisicao();
