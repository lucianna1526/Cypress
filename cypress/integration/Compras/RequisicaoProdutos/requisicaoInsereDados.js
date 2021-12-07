import acessaModuloCompras from '../AcessaModuloCompras'

class requisicaoInsereDados {
    reqInsereDados(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                acessaModuloCompras.acessarCompras();
                cy.wait(5000);
                cy.get('.md-toolbar-shadow > .md-toolbar-tools > .md-icon-button > .md-blue-theme').click();
                cy.get('#pdInputMenuVerfical370').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)
                //Organograma
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisOrganograma"]')
                .type('2.0212.0032.2006')
                //Subgrupo
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisSubGrupo"]')
                .click()
                .type('193')
                //Ficha
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFicha"]')
                .click()
                .type('20210805')
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
                cy.focused().tab()
                //Detalhamento da Fonte
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisDetalhamentoFonte"]')
                .click()
                .type('10000').click().type('{enter}')
                //Processo
                cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisProcesso"]')
                .click()
                .type('2021000054')
                //Salvar Button Capa
                cy.get('button[nat="cadastroRequisicaoComprasCrudSalvar"]')
                .click()
                //Codigo Produto
                cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]')
                .type('2824171').type('{enter}')
                .tab()
                //Quantidade Pedida
                cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
                .type('5')
                .tab()
                //Valor Unitário
                cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
                .type('1,7750')
                .tab()
                //Origem do valor de referência
                cy.get('[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]')
                .click().type('{enter}')
                //Adicionar e Sair
                cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarFechar"]')
                .click()
                if(cy.get('[nat="cadastroRequisicaoComprasDadosPrincipaisTotalPedido"] > .col-md-2 > .form-group > .form-control > span')=='8,90'){
                    console.log('Valor esperado')
                   
                }else{
                    cy.get('button[nat="Produtos"]').click()
                    console.log('Valor diferente do esperado')
                }
                
                
           });
        });
        
        
    }
}
export default new requisicaoInsereDados();