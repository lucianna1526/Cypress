import acessaModuloCompras from '../AcessaModuloCompras'

class processoComprasAutorizacao {
    procComprasAutorizacao(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                /*acessaModuloCompras.acessarCompras();
                
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]')
                .type('Processo de compras')
                .click()
                .type('{downarrow}')
                .type('{enter}');
                cy.wait(1000)*/


                
                // #################### JULGAMENTO ###############################

                //clica na aba de julgamento
                cy.get('li[nat="Gera autorização de compra"]').click();

                //volta registro Anterior
                /*cy.get('input[nat="consultaAutorizacaoComprasNrCotacao"]')
                .click()
                .type('16315')
                .tab()
                .wait(5000);*/
                //16315
                
                //seleciona o forncecedor
                cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
                .click()
                .type('{downarrow}')
                .type('{enter}')


                cy.get('button[title="Gerar autorização"]')
                .click()
                .wait(5000);

                cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoque"]')
                .type('1')
                .tab()
                .wait(1000)

                cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
                .click()
                .wait(5000)

                cy.get('button[title="Abrir pedido de compra"]')
                .click()
                .wait(5000)
                

                cy.get('.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools')
                .type('{esc}')
                .wait(1000)
                
                cy.get('[ng-click="fechar()"] > .md-blue-theme')
                .type('{esc}')
                .wait(1000)
                
           });
        });
        
        
    }
}
export default new processoComprasAutorizacao();