//import acessaModuloCompras from '../AcessaModuloCompras'

class requisicaoInsereDados {
    reqInsereDados(natureza=1){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
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
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]')
                .click()
                .wait(2000);
                
                cy.get('input[nat="buscaMenuVertical"]').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)
                //Organograma
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisOrganograma"]')
                .type('13.2201.0042.2194')
                //Subgrupo
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisSubGrupo"]')
                .click()
                .type('16')
                //Ficha
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFicha"]')
                .click()
                .type('20211455')
                .type('{enter}')
                .tab()
                //Origem do recurso
                cy.get('[nat="cadastroRequisicaoComprasDadosPrincipaisOrigemRecursoSelect"]')
                .click().type('{enter}')
                //cy.get('body').tab()
                cy.focused().tab()
                //Fonte
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFonte"]')
                .click()
                cy.focused().tab().wait(2000);
                //Detalhamento da Fonte
                
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisDetalhamentoFonte"]')
                .click()
                .type('10000')
                .wait(3000)
                .click()
                .type('{enter}')
                //Processo
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisProcesso"]')
                .click()
                .type('2021000054')
                //Salvar Button Capa
                cy.get('button[nat="cadastroRequisicaoComprasCrudSalvar"]')
                .click()
                //Aguarda 5 segundos
                cy.wait(5000)

                // --INSERE ITEM 1 NA REQUISIÇÃO--
                cy.requisicaoAdicionarProduto('48859114','5','1,7750');
                // --INSERE ITEM 2 NA REQUISIÇÃO--
                cy.requisicaoAdicionarProduto('48859972','5','1,7650');
                
                //Fecha modal inserir produto
                cy.get('[aria-label="Fechar popup"]')
                .click()
                .wait(2000);

                //Enviar e Liberar
                cy.get('button[nat="cadastroRequisicaoComprasEnviarLiberar"]')
                .click()
                .wait(1000)
            }); 
                
        });
        
        
    }
}
export default new requisicaoInsereDados();