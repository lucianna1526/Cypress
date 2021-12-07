import Login from "../Pages/Login";
class acessaModuloCompras {
  acessarCompras(){
    Login.acessarLogin();
    Login.preencherLogin();
    cy.wait(5000);
    cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
  }
   
}

export default new acessaModuloCompras();