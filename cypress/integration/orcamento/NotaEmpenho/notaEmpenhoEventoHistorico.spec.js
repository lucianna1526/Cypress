class notaEmpenhoEventoHistorico {
    geraEmpenhoEventoHistorico() {
       it('ORÇAMENTO: NE - Nota de empenho/Evento/Historico', () => {
            cy.get('li[nat="Evento/Histórico"]').click();
        });
        
        
        it('Nota de Empenho/Evento/Histórico - Insere Evento/Histórico', () => {
            cy.get('[nat="cadastroNotaEmpenhoDespesaCadHistoricoDescricao"]')
            .click()
            .type("MATERIAL DE PROCESSAMENTO DE DADOS", {Delay: 10}, {timeout: 3000})
            .type("{enter}");
        });
        
}       
}
export default new notaEmpenhoEventoHistorico();