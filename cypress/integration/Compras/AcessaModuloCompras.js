import Login from "../Pages/Login";
import modulo from "../Pages/acessarModulo";

class acessaModuloCompras {
  acessarCompras(){
    Login.acessarLogin();
    Login.preencherLogin();
    cy.wait(5000);
    cy.get('[nat="COMPRAS E LICITAÇÕES"]').click().screenshot();
    //modulo.acessarModulo('[nat="COMPRAS E LICITAÇÕES"]');
  }
  
   
}


export default new acessaModuloCompras();