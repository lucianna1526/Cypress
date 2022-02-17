class notaEmpenhoFornecedor {
    geraEmpenhoFornecedor() {
       it('ORÇAMENTO: NE - Nota de empenho/Fornecedor', () => {
            cy.get('li[nat="Fornecedor"]').click();
        });
        
        
        it('Nota de Empenho/Fornecedor - Insere CNPJ Fornecedor', () => {
            cy.get('button[nat="cadastroNotaEmpenhoDespesaFornecedorPesquisa"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 30000});
            cy.get('input[nat="pesquisaFornecedorCgcCpf"]').click().type('2744987000265', {Delay: 10}, {timeout: 3000});
            cy.get('button[nat="Pesquisar"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });
        
}       
}
export default new notaEmpenhoFornecedor();