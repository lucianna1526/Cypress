

class requisicaoInsereDados {
    reqInsereDados(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                


                //Modalidade
                cy.get('input[nat="processodeComprasPrincipalModalidade"]')
                .type('1')


                //Organograma
                cy.get('input[nat="processodeComprasPrincipalOrganograma"]')
                .click()
                .type('2.0212.0009.2051')


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
                cy.get('li[nat="Credenciamento"]').click();
           });
        });
        
        
    }
}
export default new requisicaoInsereDados();