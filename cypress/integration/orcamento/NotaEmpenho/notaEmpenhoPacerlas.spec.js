class notaEmpenhoParcelas {
    geraEmpenhoParcela() {
       it('ORÇAMENTO: NE - Nota de empenho/Parcelas', () => {
            cy.get('li[nat="Parcelas"]').click();
        });
        
        
        it('Nota de Empenho/Evento/Histórico - Insere Valor da Parcela', () => {
            cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoFevereiro"]')
            .type("10,00", {Delay: 10}, {timeout: 3000});
            
        });

        it('Nota de Empenho Salva Empenho', () => {
            cy.get('[nat="cadastroNotaEmpenhoCrudSalvar"]')
            .click();           
            //valida se a nota de empenho foi salva com sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        
}       
}
export default new notaEmpenhoParcelas();