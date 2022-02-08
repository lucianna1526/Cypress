
        
      class moduloMenu {
      acessaMenu (modulo, menu, nomeMenu = '', voltaSubModulo = 0) {
        cy.get("body").then(($body) => {
            //pdBtnAlertOKNao
            if ($body.find('button[nat="pdBtnAlertOKNao"]').length > 0) {
              cy.get('button[nat="pdBtnAlertOKNao"]').first().click().wait(1000);
              //cy.wait('@getModulo');
            }
            if ($body.find('button[nat="pdBtnAlertOK"]').length > 0) {
              cy.get('button[nat="pdBtnAlertOK"]').first().click().wait(1000);
              //cy.wait('@getModulo');
            }
            if ($body.find('button[ng-click="fechar()"]').length > 0) {
              cy.get('button[ng-click="fechar()"]').first().click({ force: true }).wait(1000);
              //cy.wait('@getModulo');
            }
            
          });
        }
    }
    export default new moduloMenu();
      
    
      


