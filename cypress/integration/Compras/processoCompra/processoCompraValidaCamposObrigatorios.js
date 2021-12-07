import acessaModuloCompras from '../AcessaModuloCompras'
class requisicaoValidaCamposObrigatorios {
    ReqvalidaCampos(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida campos obrigátorios', ()=> {
            it('Valida campos obrigátorios', () =>{
                acessaModuloCompras.acessarCompras();
                cy.wait(5000);
                cy.get('button[nat="botaoSideMenu"]').click();
                cy.get('input[nat="buscaMenuVertical"]').type('Processo de compras')
                .click()
                .type('{downarrow}')
                .type('{enter}');
                cy.wait(1000)

                //clica em salvar
                cy.get('[nat="cadastroProcessoCompraCrudSalvar"]').click();

                //valida mensagem campos em branco
                cy.get(".md-toast-text").should('have.text',"      Por favor, verifique os campos inválidos    ").screenshot()
                //Por favor, verifique os campos inválidos
           });
        });
    }
}
export default new requisicaoValidaCamposObrigatorios();


