import {formatedDate2PtBR} from '../../Utils/helpers';
class notaLiquidacaoRetencao
 {
    geraLiquidacaoRetencao() {
        it('ORÇAMENTO: NL - Nota de liquidação', () => {
            //volta para o menu principal
            cy.get('img[title="Ir para menu geral"]').click().wait(2000);
            cy.moduloMenu('ORÇAMENTO', 'NL - Nota de liquidação');
        });
        
        it('Nota de Liquidação - Valida Modal Pesquisa e insere numero de Ficha', () => {
            cy.get('button[nat="cadastroNotaLiquidacaoFichaPesquisa"]').click().wait(2000);
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 100000});
            cy.get('input[nat="fichaOrcamentariaFicha"]').click().type('20222090', {Delay: 10});
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });
        
        it('Nota de Liquidação - Valida Modal Pesquisa e insere numero de Empenho', () => {
            cy.get('button[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]').click();
            cy.wait(2000);
            cy.get('button[nat="botaoCarregar"]').first().click();            
        });

        it('Insere Retenções - Cadastro de Retenção da Liquidação', () => {
            //Seleciona a linha da grid de liquidação
            cy.gridClicar('div[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]', "10,00", "");
            
            //Seleciona a grid de documentos
            cy.gridClicar('div[nat="cadastroNotaLiquidacaoDocumentosGrid"]', "123", "");
            cy.get('button[nat="cadastroNotaLiquidacaoRetencoesabrirTelaDeCadastro"]').click();

            //Retenção            
            cy.autoComplete('input[nat="cadastroRetencaoLiquidacaoRetencaoDescricao"]','INSS  TERCEIROS');                        
            
            //Valor Retido
            cy.get('input[nat="cadastroRetencaoLiquidacaoValorRetido"]')
            .click()
            .type('1,00');

            //Clica em ADICIONAR E SAIR
            cy.get('button[nat="cadastroRetencaoLiquidacaoCrudSalvarFechar"]').click();            

             //valida se a retenção foi salva com sucesso
             cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Registro salvo com sucesso!');
             cy.get('.md-toast-content>button').click();

             //valida consiste orçamento
             cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Sucesso ao consistir o orçamento');
             cy.get('.md-toast-content>button').click();

        })
        
    }
}
export default new notaLiquidacaoRetencao();