import acessaModuloCompras from '../AcessaModuloCompras'

class processoComprasJulgamento {
    procComprasJulgamento(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                //acessaModuloCompras.acessarCompras();
                /*
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]')
                .type('Processo de compras')
                .click()
                .type('{downarrow}')
                .type('{enter}');
                cy.wait(1000)

*/
                
                // #################### JULGAMENTO ###############################

                //clica na aba de julgamento
                cy.get('li[nat="Julgamento"]').click();

                //volta registro Anterior
                /*cy.get('input[nat="cadastroPrecosFornecedoresNrCotacao"]')
                .click()
                .type('16315')
                .tab()
                .wait(5000);*/
                //16315
                

                //clica na grid
                /*cy.get('div[nat="cadastroPrecosFornecedoresCotacaoFornecedorGrid"]>div>div>div>div[class="ui-grid-canvas"]')
                .click()
                .wait(5000);
                */
                //teste grid item 1
                cy.get('[role="row"]')
                .contains('LUPA')
                .dblclick()
                .wait(5000);
                cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
                .type('{selectall}')
                .type('1.5576')
                cy.get('button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]')
                .click()
                //teste grid item 2
                cy.get('[role="row"]')
                .contains('QUADRO BRANCO')
                .dblclick()
                .wait(5000);
                cy.get('input[nat="cadastroPrecosFornecedoresValor"]')
                .type('{selectall}')
                .type('1.5676')
                cy.get('button[nat="cadastroPrecosFornecedoresCrudSalvarFechar"]')
                .click()
               /*  cy.get('[id$="inputText"]').each(($element, index) => {
                    console.log($element + ' ' + index);
                    cy.wrap($element).type(("0."*index)).tab().wait(1000);
                }) */
                //Julgar
                cy.get('button[nat="cadastroPrecosFornecedoresJulgar"]')
                .click();
                
                //Data da homologação/fechamento - Abre calendario
                cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoPopUp"]').click();

                //Data da homologação/fechamento - Seleciona data
                cy.get('ul[role="presentation"]>li>span>button[ng-disabled]').click();

                //Salva Homologação
                cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoAux"]').click();
                

           });
        });
        
        
    }
}
export default new processoComprasJulgamento();