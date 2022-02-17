import {formatedMonth2PtBR} from '../../Utils/helpers';
class notaPagamento
 {
    geraPagamento() {
       it('ORÇAMENTO: NP - Nota de pagamento', () => {
            cy.moduloMenu('ORÇAMENTO', 'NP - Nota de pagamento');
        });
        
        it('Nota de Pagamento - Valida Modal Pesquisa e insere numero de Ficha', () => {
            cy.get('button[nat="cadastroNotaPagamentoFichaPesquisa"]').click().wait(2000);
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 100000});
            cy.get('input[nat="fichaOrcamentariaFicha"]').click().type('20222090', {Delay: 10});
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });// 
        
        it('Nota de Pagamento - Valida Modal Pesquisa e insere numero de Empenho', () => {
            cy.get('button[nat="cadastroNotaPagamentoNrEmpenhoPesquisa"]').click();
            cy.wait(2000);
            cy.get('button[nat="botaoCarregar"]').first().click();           
            
        }); 

        it('Nota de Pagamento - Valida Modal Pesquisa e insere numero da Liquidação', () => {
            cy.get('button[nat="cadastroNotaPagamentoNrLiquidacaoPesquisa"]').click();
            cy.wait(2000);
            cy.get('button[nat="botaoCarregar"]').first().click();

            //Clica no botão ADICIONAR
            cy.get('button[nat="cadastroNotaPagamentoGridabrirTelaDeCadastro"]').click();
            
        }); 

        it('Nota de Pagamento - Informa itens do pagamento', () => {
            
            //Pesquisa Numero da conta
            cy.get('button[nat="cadastroNotaPagamentoItemNrContaPesquisa"]', {timeout:2000}).click();
            cy.get('div[nat="pesquisaContaBancariaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            
            //Pesquisa Gestão da conta
            cy.autoComplete('input[nat="pesquisaContaBancariaGestaoDescricao"]','FUNDO MUNICIPAL DE PROTEÇÃO E DEFESA DO CONSUMIDOR-FUNDECON');            
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat="pesquisaContaBancariaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();

            //Forma de Pagamento            
            cy.autoComplete('input[nat="cadastroNotaPagamentoItemFormaPagamentoDescricao"]','ORDEM DE PAGAMENTO');                        

            //Fonte Detalhamento
            cy.autoComplete('input[nat="cadastroNotaPagamentoItemFonteDetalhamento"]','100000 - RECURSO PROPRIO');                        

            //Clica em ADICIPONAR E SAIR
            cy.get('button[nat="cadastroNotaPagamentoItemCrudSalvarFechar"]').click();

            //valida se a nota de pagamento foi salva com sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();

        }); 
        
}       
}
export default new notaPagamento();