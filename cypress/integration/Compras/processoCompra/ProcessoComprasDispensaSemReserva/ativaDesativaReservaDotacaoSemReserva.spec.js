class AtivaDesativaReservaDotacao {
    
    ativaReservaSemReserva() {
        it('Acessa Painel de controle do Compras', () => {
            //acessa o painel de compras
            cy.moduloMenu("COMPRAS E LICITAÇÕES", "Painel de controle");
            
            
        });
        it('Ativa fluxo de compras com reserva de dotação', () => {
            //acessa aba requisição de compras
            cy.get('[nat="Requisição de compras"]').click();

            
            cy.wait(1000);
            cy.get('md-checkbox[nat="painelControleComprasNatResDotSN"]', {timeout: 10000});
            
            //marca reserva dotação na validação da requisição
            cy.angularCheck('md-checkbox[nat="painelControleComprasNatResDotSN"]');
            
            //marca reserva dotação na liberação da requisição
            cy.angularCheck('md-checkbox[nat="painelControleComprasNatResDotLib"]');
            
            //salva alterações
            cy.get('[nat="painelControleComprasSalvar"]').click();

            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
        });
    }

    desativaReservaSemReserva() {
        it('Acessa Painel de controle do Compras', () => {
            //acessa o painel de compras
            cy.moduloMenu("COMPRAS E LICITAÇÕES", "Painel de controle");
            
        });
        it('Desativa fluxo de compras com reserva de dotação', () => {
            //acessa aba requisição de compras
            cy.get('[nat="Requisição de compras"]').click();

            
            cy.wait(1000);
            cy.get('md-checkbox[nat="painelControleComprasNatResDotSN"]', {timeout: 10000});
            
            //marca reserva dotação na validação da requisição
            cy.angularUnCheck('md-checkbox[nat="painelControleComprasNatResDotSN"]');
            
            //marca reserva dotação na liberação da requisição
            cy.angularUnCheck('md-checkbox[nat="painelControleComprasNatResDotLib"]');
            
            //salva alterações
            cy.get('[nat="painelControleComprasSalvar"]').click();

            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
        });
    }
}

export default new AtivaDesativaReservaDotacao();