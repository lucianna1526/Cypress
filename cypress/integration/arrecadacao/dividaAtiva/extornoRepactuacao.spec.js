class extornoRepactucacao{
    acessaExtornoRepactuacao(){
        it("ARRECADAÇÃO: Acessa Estorno de repactuação", () => {
            cy.moduloMenu('ARRECADAÇÃO','Estorno de repactuação','Estorno de Repactuação');
        });
    }
    validaExtornoEmBranco(){
        it("ARRECADAÇÃO: Extorno de repactuação - Validação de campos em branco", () => {
            cy.get('button[nat="estornoRepactuacaoEstornarRepac"]',{timeout:10000}).click();
            //button[nat="estornoRepactuacaoEstornarRepac"]

            //validar mensagem de erro
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Por favor, verifique os campos inválidos');
            cy.get('.md-action').click({force: true});
        });
        
    }
    extornaRepactuacao(){
        it("ARRECADAÇÃO: Estorno de repactuação", () => {
            cy.get('button[nat="estornoRepactuacaoCodigoBaixaPesquisa"]').click();
            cy.aguardarGridCarregar('div[nat=""]')
            cy.gridClicar('div[nat=""]',"REPACTUACAO",'button[nat="botaoCarregar"]');
            cy.get('textarea[nat="estornoRepactuacaoMotivo"]').clear().type('Teste automatizado');
            cy.get('button[nat="estornoRepactuacaoDuamPesquisa"]').click();
            cy.aguardarGridCarregar('div[nat="pesquisaDuamsGrid"]');

            cy.autoComplete('input[nat="pesquisaDuamsCcpDescricao"]',"KEISCIANE MARTINAS FERREIRA");
            cy.get('button[nat="pesquisaDuamsPesquisaPesquisar"]').click();
            cy.aguardarGridCarregar('div[nat="pesquisaDuamsGrid"]');
            cy.get('button[nat="botaoCarregar"]',{timeout:10000}).first().click();
            cy.get('button[nat="estornoRepactuacaoEstornarRepac"]',{timeout:10000}).click();

            cy.get("body").then(($body) => {
                if ($body.find('button[nat="pdBtnAlertOKSim"]').length > 0) {
                    cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).click();
                }
              });
            //cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).click();
            //validar mensagem
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Parcelamento estornado com sucesso!');
            cy.get('.md-action').click({force: true});

        });
    }
}
export default new extornoRepactucacao();