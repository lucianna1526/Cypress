import {formatedDate2PtBR} from '../../Utils/helpers';
class notaLiquidacaoDocumentos
 {
    geraLiquidacaoDocumentos() {
        it('ORÇAMENTO: NL - Nota de liquidação', () => {
            cy.moduloMenu('ORÇAMENTO', 'NL - Nota de liquidação');
        });
        
        it('Nota de Liquidação - Valida Modal Pesquisa e insere numero de Ficha', () => {
            cy.get('button[nat="cadastroNotaLiquidacaoFichaPesquisa"]').click().wait(2000);
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 100000});
            cy.get('input[nat="fichaOrcamentariaFicha"]').click().type('20222090', {Delay: 10});
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });// 
        
        it('Nota de Liquidação - Valida Modal Pesquisa e insere numero de Empenho', () => {
            cy.get('button[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]').click();
            cy.wait(2000);
            cy.get('button[nat="botaoCarregar"]').first().click();

            
        });

        it('Insere Documento', () => {
            cy.gridClicar('div[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]',`${formatedDate2PtBR}`,'button[nat="botaoCarregar"]')
            cy.get('button[nat="cadastroNotaLiquidacaoLiquidacoesGridabrirTelaDeCadastro"]').click();
        })
    }
}
export default new notaLiquidacaoDocumentos();