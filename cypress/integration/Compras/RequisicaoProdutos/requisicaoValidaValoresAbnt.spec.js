class requisicaoValidaValoresAbnt {
    ReqvalidaCampos(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios', ()=> {
            it('Acessa Modulo Compras', ()=>{
                /*if (cy.find('button[nat="botaoSideMenu"]').length == 0){
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                }*/
              
              cy.get("body").then($body => {
                if ($body.find('button[nat="botaoSideMenu"]').length == 0) {   
                    cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                }
                });
            })
            it('Valida campos obrigátorios', () =>{
                
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)

                cy.get('button[nat="cadastroRequisicaoComprasCodigoAnterior"')
                .click()
                .wait(1000);

                cy.get('li[nat="Produtos"]')
                .click()
                .wait(1000);

                
                cy.get('div[nat="cadastroRequisicaoComprasProdutosGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div').as('grid');

                cy.get('@grid')
                    .within(($list) => {
                        //cy.screenshot('linhaGrid')
                        cy.get('span:contains("8,87")').should('length',2);
                        /*
                        const $el = cy.find("selector")
                        if ($el.length > 0) {
                            cy.wrap($el).first().click();
                        }*/
                    })
                cy.get('@grid')
                    .within(() => {
                    cy.get('span:contains("8,82")').should('length',2);
                })
                //cy.get('[role="gridcell"]>[class="ui-grid-cell-contents"]>span[title]').
                /*
                [role="gridcell"]>[class="ui-grid-cell-contents"]>span[title] soma dos produtos na requisição de compra
                [nat="cadastroRequisicaoComprasDadosPrincipaisTotalPedido"]>div>div>[class="form-control pd-label-input-leitura"] total pedido
                [nat="cadastroRequisicaoComprasDadosPrincipaisTotalAutorizado"]>div>div>[class="form-control pd-label-input-leitura"] total autorizado

                */
                
                


           });
        });
    }
}
export default new requisicaoValidaValoresAbnt();


