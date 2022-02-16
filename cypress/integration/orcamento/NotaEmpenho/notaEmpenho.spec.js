import notaEmpenhoFornecedorSpec from "./notaEmpenhoFornecedor.spec";

class notaEmpenho {
    geraEmpenho() {
       it('ORÇAMENTO: NE - Nota de empenho', () => {
            cy.moduloMenu('ORÇAMENTO', 'NE - Nota de empenho');
        });
        
        it('Nota de Empenho/DadosNE - Valida Modal Pesquisa e insere numero de Ficha', () => {
            cy.get('button[nat="cadastroNotaEmpenhoFichaPesquisa"]').click().wait(4000);
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 100000});
            cy.get('input[nat="fichaOrcamentariaFicha"]').click().type('20222090', {Delay: 10});
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        }); 
        
        it('Nota de Empenho/DadosNE - Valida Modal Pesquisa Elemento de despesa (subnatureza)', () => {
            cy.get('button[nat="cadastroNotaEmpenhoElemendoDeDespesaPesquisa"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 30000});
            cy.get('input[nat="pesquisaElementoDespesaId"]').click().type('1785', {Delay: 10}, {timeout: 3000});
            cy.get('button[nat="elementoDespesaPesquisaPesquisar"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });

        it('Nota de Empenho/DadosNE - Valida Modal Pesquisa Detalhamento Fonte', () => {
            cy.get('button[nat="cadastroNotaEmpenhoDetalhamentoFontePesquisa"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 30000});
            cy.get('input[nat="pesquisaFonteCodigo"]').click().type('3671', {Delay: 10}, {timeout: 3000});
            cy.get('button[nat="Pesquisar"]').click();
            //cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });

        it('Nota de Empenho - Insere numero de Processo', () => {
            
            cy.get('input[nat="cadastroNotaEmpenhoProcesso"]').click().type('2022014911', {Delay: 10}, {timeout: 3000});
            
        });

        
}       
}
export default new notaEmpenho();