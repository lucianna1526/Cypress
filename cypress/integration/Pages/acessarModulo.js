class modulo {
    // Acessar menu
    acessarModulo(menu){
        Login.acessarLogin();
        Login.preencherLogin();
        cy.wait(5000);
        cy.get(menu).click();
      }
       
}   
export default modulo;

