
class Utils {
    goHome(){
        cy.visit('/')
    }

    preencherLogin(){
        cy.get('#usuario').focus().type('jwm');
        cy.get('#iPassword').focus().type('1010');
        //clica em entrar
        cy.get('input.ng-scope').click();
    }  
    
}
 
export default new Utils();