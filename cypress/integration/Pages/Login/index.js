
class Login {
    acessarLogin(){
        cy.visit('http://desenvolvimento.prodataweb.inf.br:8008/sigAutomacao/')
    }

    preencherLogin(){
        cy.get('#usuario').focus().type('jwm');
        cy.get('#iPassword').focus().type('1010');
        //clica em entrar
        cy.get('input.ng-scope').click();
    }
    
}
 
export default new Login();