import acessaModuloCompras from '../AcessaModuloCompras'

class processoComprasInsereDados {
    processoCompras(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                acessaModuloCompras.acessarCompras();
                
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]')
                .type('Processo de compras')
                .click()
                .type('{downarrow}')
                .type('{enter}');
                cy.wait(1000)


                //Modalidade
                cy.get('input[nat="processodeComprasPrincipalModalidade"]')
                .type('1')


                //Organograma
                cy.get('input[nat="processodeComprasPrincipalOrganograma"]')
                .click()
                .type('13.2201.0042.2194')


                //Tipo julgamento
                cy.get('input[nat="processodeComprasPrincipalTipoJulgamento"]')
                .click()
                .type('1')
                
                //Situação
                cy.get('[nat="processodeComprasPrincipalSituacaoLicitacaoSelect"]')
                .click().type("Abertura da cotação").wait(500).type('{enter}')
                //cy.get('body').tab()
                cy.focused().tab()

                //status
                cy.get('[nat="processodeComprasPrincipalStatusSelect"]')
                .click().type("Em Andamento").wait(500).type('{enter}')
                //cy.get('body').tab()
                cy.focused().tab()


                //nat="processodeComprasPrincipalObrasSelect"]
                //status
                cy.get('[nat="processodeComprasPrincipalObrasSelect"]')
                .click().type("Não").wait(500).type('{enter}')
                //cy.get('body').tab()
                cy.focused().tab()



                //OBSERVAÇÃO
                cy.get('textarea[nat="processodeComprasPrincipalObsObjeto"]')
                
                .type('TESTE COMPRAS CYPRESS')
                


                
                //Adicionar e Sair
                cy.get('button[nat="cadastroProcessoCompraCrudSalvar"]')
                .click()

                //Confirma exclusão
                cy.get('button[nat="pdBtnAlertOKSim"]').click();
                 
                cy.get(".md-toast-content").should('have.text',"          Registro salvo com sucesso!              OK      ").screenshot()
                
                cy.get('[nat="processodeComprasPrincipalAdicionar"]').click();

                cy.wait(5000);

                //seleciona vinculo de requisições
                cy.get('[class="ui-grid-cell-contents ui-grid-disable-selection clickable"]').click();
                
                //vincula as requisições
                cy.get('[nat="pesquisaRequisicoesComprasVincularRequisicoes"]').click();


                //confirma vinculação
                cy.get('button[nat="pdBtnAlertOKSim"]').click();
                 
                //cy.get(".md-toast-text").should('have.text',"          Registro salvo com sucesso!              OK      ").screenshot()
                
                //#criar validação de vinculação

                //fecha a tela de vinculo de requisições
                cy.get('[nat="pesquisaRequisicoesComprasCancelar"]').click();
                

                //#################################

                //clica na aba de credenciamento
                cy.get('li[nat="Credenciamento"]').click();
                //abre modal credenciamento
                cy.get('button[nat="consultaFornecedorCotacaoFornedorGridabrirTelaDeCadastro"]').click().wait(5000);

                //informa o CNPJ do fornecedor
                cy.get('input[nat="cadastroFornecedorCotacaoFornecedor"]')
                .click()
                .type('2744987000184')
                .tab();

                //salva e fecha o modal
                cy.get('button[nat="cadastroFornecedorCotacaoCrudSalvarFechar"]')
                .click()
                .wait(5000);

                               
                /*
                // #################### JULGAMENTO ###############################  
                //clica na aba de julgamento
                cy.get('li[nat="Julgamento"]').click();
                //clica na grid
                cy.get('div[nat="cadastroPrecosFornecedoresCotacaoFornecedorGrid"]>div>div>div>div[class="ui-grid-canvas"]').click();

                //teste grid
                cy.get('[id$="inputText"]').each(($element, index) => {
                    console.log($element)
                    cy.wrap($element).type("teste");
                }) */
                /*
                //Data da homologação/fechamento - Abre calendario
                cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoPopUp"]').click();

                //Data da homologação/fechamento - Seleciona data
                cy.get('ul[role="presentation"]>li>span>button[ng-disabled]').click();
*/
                //Salva Homologação
                //cy.get('button[nat="cadastroPrecosFornecedoresDtOmologacaoBotaoAux"]').click();
                
                //clica na aba de julgamento
                cy.get('li[nat="Julgamento"]')
                .click()
                .wait(5000);

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
                
                cy.get('li[nat="Gera autorização de compra"]')
                .click()
                .wait(5000);
                

                //volta registro Anterior
                /*cy.get('input[nat="consultaAutorizacaoComprasNrCotacao"]')
                .click()
                .type('16315')
                .tab()
                .wait(5000);*/
                //16315
                
                //seleciona o forncecedor
                cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
                .wait(500)
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
export default new processoComprasInsereDados();