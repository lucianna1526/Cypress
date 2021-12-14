class requisicaoExcluiDados {
    reqExcluiDados(){
        describe('Acessa Tela Cadastro de requisição de compras, E exclui', ()=> {
            it('Acessa Modulo Compras', ()=>{
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
              })
            it('Valida Exclusão de dados', () =>{
                //Acessa modulo compras e aguarda 5 segundos
                
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)

                //Volta ultimo registro
                cy.get('button[nat="cadastroRequisicaoComprasCodigoAnterior"]').screenshot().click();
                cy.wait(1000)

                //clica em excluir registro
                cy.get('button[nat="cadastroRequisicaoComprasCrudExcluir"]').click();
                cy.wait(1000);

                //Confirma exclusão
                cy.get('button[nat="pdBtnAlertOKSim"]').click();
                
                cy.get(".modal-body").should('have.text',"Não foi possivel excluir registro, pois possui itens cadastrados\n\n")

                //confirma mensagem de não foi possivel excluir
                cy.get('button[nat="pdBtnAlertOK"]').click().wait(1000);

                //seleciona aba de produtos
                cy.get('[nat="Produtos"]').click();
                
                //seleciona todos os valores da grid
                cy.get('[role="checkbox button"]').click();

                //clica em excluir registros da grid
                cy.get('button[nat="cadastroRequisicaoComprasProdutosRemoverItensSelecionados"]').click();

                //Confirma exclusão
                cy.get('button[nat="pdBtnAlertOKSim"]').click().wait(1000);
                                
                //cy.get('.md-toast-content').should('have.text',"Itens removidos com sucesso!")

                 //clica em excluir registro
                 cy.get('button[nat="cadastroRequisicaoComprasCrudExcluir"]').click();
                 cy.wait(1000);
 
                 //Confirma exclusão
                 cy.get('button[nat="pdBtnAlertOKSim"]').click();
                 
                 cy.get(".md-toast-content").should('have.text',"          Registro excluído com sucesso!              OK      ").screenshot()
 
/*
                if(cy.get('[nat="pdBtnAlertOKBody"]')=='Não foi possivel excluir registro, pois possui itens cadastrados'){
                    console.log('Valor esperado' + cy.get('[nat="pdBtnAlertOKBody"]'));
                   
                }else{
                    console.log('Valor diferente do esperado' + cy.get('[nat="pdBtnAlertOKBody"]'));
                    
                }*/
                
                
           });
        });
        
        
    }
}
export default new requisicaoExcluiDados();