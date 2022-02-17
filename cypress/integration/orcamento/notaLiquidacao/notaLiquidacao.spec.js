import {formatedMonth2PtBR} from '../../Utils/helpers';
class notaLiquidacao
 {
    geraLiquidacao() {
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
<<<<<<< HEAD
        });
=======
        });// 
>>>>>>> origin/master
        
        it('Nota de Liquidação - Valida Modal Pesquisa e insere numero de Empenho', () => {
            cy.get('button[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]').click();
            cy.wait(2000);
            cy.get('button[nat="botaoCarregar"]').first().click();

            //Clica no botão ADICIONAR
            cy.get('button[nat="cadastroNotaLiquidacaoLiquidacoesGridabrirTelaDeCadastro"]').click();
            
        }); 

        it('Nota de Liquidação - Informa itens da parcela de liquidação', () => {
            cy.get('input[nat="cadastroNotaLiquidacaoItemMesReferencia"]').click().type(`${formatedMonth2PtBR()}`).wait(2000);

            cy.get('button[nat="cadastroNotaLiquidacaoItemAnoReferencia BotaoProximo"]', {timeout:2000}).click();            

            //Ao abrir o modal, preenche os campos e adiciona parcela da nota de liquidação
            cy.get('button[nat="SalvarFechar"]', {timeout:2000}).click();

             //valida se a nota de Liquidação foi salva com sucesso
             cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Registro salvo com sucesso!');
             cy.get('.md-toast-content>button').click();
        }); 
        
}       
}
export default new notaLiquidacao();