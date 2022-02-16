class notaEmpenhoLicitacao {
    geraEmpenhoLicitacao() {
       it('ORÇAMENTO: NE - Nota de empenho/Fornecedor', () => {
            cy.get('li[nat="Licitação"]').click();
        });
        
        
        it('Nota de Empenho/Fornecedor - Insere CNPJ Fornecedor', () => {
                        
            cy.get('input[nat="cadastroNotaEmpenhoNrLicitacao"]').click().type('1010', {Delay: 10}, {timeout: 3000});
            cy.get('button[nat="cadastroNotaEmpenhoAnoProcedimentoLicitacao BotaoProximo"]').click();
            
        });
        
}       
}
export default new notaEmpenhoLicitacao();