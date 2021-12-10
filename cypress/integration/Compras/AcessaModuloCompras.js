import Login from "../Pages/Login";

class acessarModuloCompras {
    acessarCompras(){
    Login.acessarLogin();
    Login.preencherLogin();
    cy.wait(5000);
    cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
    //modulo.acessarModulo('[nat="COMPRAS E LICITAÇÕES"]');
  }  
   
}

export default new acessarModuloCompras();