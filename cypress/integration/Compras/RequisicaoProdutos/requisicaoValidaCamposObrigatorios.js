import acessaModuloCompras from '../AcessaModuloCompras'
class requisicaoValidaCamposObrigatorios {
    ReqvalidaCampos(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios', ()=> {
            it('Valida campos obrigátorios', () =>{
                acessaModuloCompras.acessarCompras();
                cy.wait(5000);
                cy.get('.md-toolbar-shadow > .md-toolbar-tools > .md-icon-button > .md-blue-theme').click();
                cy.get('#pdInputMenuVerfical370').type('Requisição de compras').click().type('{enter}');
                cy.wait(1000)
                cy.get('[nat="cadastroRequisicaoComprasCrudSalvar"]').click();
           });
        });
    }
}
export default new requisicaoValidaCamposObrigatorios();


