import {formatedDate2PtBR} from '../../Utils/helpers';
class notaLiquidacaoDocumentos
 {
    geraLiquidacaoDocumentos() {
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

        it('Insere Documento - Cadastro de Nota Fiscal com valor acima do saldo', () => {
            cy.gridClicar('div[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]', "8,00", "");
            cy.get('button[nat="cadastroNotaLiquidacaoDocumentosGridabrirTelaDeCadastro"]').click();

            //Informa tipo de documento
            cy.get('[nat="cadastroNotaFiscalLiquidacaoTipoDocumentoSelect"]')
            .click()
            .type('5-Nota Fiscal')
            .type("{enter}");

            //Numero do documento            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoNrDocumento"]')
            //.click()
            .type('123');

            //Numero de serie            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoNrSerie"]')
            .click()
            .type('123');

             //Data Emissão
             cy.get('input[nat="cadastroNotaFiscalLiquidacaoDataEmissao"]')
             .dblclick()
            .type(formatedDate2PtBR());

            //Valor da nota fiscal            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoValorNotaFiscal"]')
            .click()
            .type('10,00')
            .tab();

            //Clica em ADICIONAR E SAIR
            cy.get('button[nat="cadastroNotaFiscalLiquidacaoCrudSalvarFechar"]').click();

             //valida se a nota de Liquidação foi salva com sucesso
             cy.get('.modal-body',{timeout:1000}).should('contain', 'Valor Associado maior que o valor da Nota de Liquidação.');
             cy.get('.modal-footer>button').click();           

        })

        it('Insere Documento - Cadastro de Nota Fiscal com valor dentro do saldo', () => {
            //Informa tipo de documento
            cy.get('[nat="cadastroNotaFiscalLiquidacaoTipoDocumentoSelect"]')
            .click()
            .type('5-Nota Fiscal')
            .type("{enter}");

            //Numero do documento            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoNrDocumento"]')
            .type('{SelectAll}')
            .type('123');

            //Numero de serie            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoNrSerie"]')
            .type('{SelectAll}')
            .type('123');

             //Data Emissão
             cy.get('input[nat="cadastroNotaFiscalLiquidacaoDataEmissao"]')
             .dblclick()
            .type(formatedDate2PtBR());

            //Valor da nota fiscal            
            cy.get('input[nat="cadastroNotaFiscalLiquidacaoValorNotaFiscal"]')
            .dblclick()
            .type('8,00')
            .tab();

            //Clica em ADICIONAR E SAIR
            cy.get('button[nat="cadastroNotaFiscalLiquidacaoCrudSalvarFechar"]').click();

             //valida se a nota de Liquidação foi salva com sucesso
             cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Registro salvo com sucesso!');
             cy.get('.md-toast-content>button').click();           

        })
        
    }
}
export default new notaLiquidacaoDocumentos();