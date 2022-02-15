class aceiteProcesso{
    procuraRemessa(){
        it("PROTOCOLO: Aceite de remessa", () => {
            cy.moduloMenu('PROTOCOLO','Aceite de remessa');
        });
        it("Realiza o aceite da Remessa", () => {
            cy.get('button[nat="aceiteRemessaRemessaPesquisa"]',{timeout:10000}).click();
            cy.get('div[nat="pesquisaRemessaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000}).should('exist');
            cy.get('button[nat="botaoCarregar"]',{timeout:10000}).first().click();

            cy.get('div[nat="aceiteRemessaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div>div',{timeout:10000}).first().click({ force: true });
            cy.get('button[nat="aceiteRemessaAceiteRemessa"]',{timeout:10000}).click();

            
            cy.intercept('POST', '**/rest/remessaItemController/carregarAtributos').as('carregarAtributos');
            cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).click();
            cy.wait("@carregarAtributos")
        });
        it("Altera Situação do processo", () => {
            cy.autoComplete('input[nat="popupAlteracaoSituacaoRemessaSituacaoDescricao"]','EM ANDAMENTO');
            cy.get('button[nat="popupAlteracaoSituacaoRemessaAlterarSituacao"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Situação alterada com sucesso');
            cy.get('.md-toast-content>button').click();
            
        });
    }
}
export default new aceiteProcesso();
