import {formatedMonth2PtBR} from '../../Utils/helpers'

class notaEmpenhoParcelas {
    geraEmpenhoParcela() {
        //Recebe Mês de referencia da parcela
        const formatedMonth01 = '01'
        const formatedMonth02 = '02'
        const formatedMonth03 = '03'
        const formatedMonth04 = '04'
        const formatedMonth05 = '05'
        const formatedMonth06 = '06'
        const formatedMonth07 = '07'
        const formatedMonth08 = '08'
        const formatedMonth09 = '09'
        const formatedMonth10 = '10'
        const formatedMonth11 = '11'
        const formatedMonth12 = '12'       
        

       it('ORÇAMENTO: NE - Nota de empenho/Parcelas', () => {
            cy.get('li[nat="Parcelas"]').click();
        });
                
        it('Nota de Empenho/Evento/Histórico - Insere Valor da Parcela', () => {
            
            if(formatedMonth2PtBR === formatedMonth01) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoJaneiro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth02) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoFevereiro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth03) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoMarco"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth04) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoAbril"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth05) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoMaio"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth06) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoJunho"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth07) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoJulho"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth08) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoAgosto"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth09) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoSetembro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth10) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoOutubro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth11) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoNovembro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }else if (formatedMonth2PtBR === formatedMonth12) {
                cy.get('input[nat="cadastroNotaEmpenhoDespesaEmpenhoDezembro"]')
                .type('10,00', {Delay: 10}, {timeout: 3000});
            }            
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