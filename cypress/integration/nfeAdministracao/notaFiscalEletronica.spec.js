class notaFiscalEletronica {
    geraNotaFiscalEletronica() {
        it('NFE ADMINISTRAÇAO: Emissao da Fiscal Eletronica Avulsa', () => {
            cy.intercept('**/rest/cidadeController/consultarCodigoDescricao')
            .as('consultarCodigoDescricao')
            cy.moduloMenu('NFE ADMINISTRAÇÃO', 'Emissão nota fiscal eletrônica');
            cy.wait('@consultarCodigoDescricao')
        });

        it('Insere dados da nota fiscal avulsa', () => {
            cy.spanAutoComplete('Prestador','JEANDES WESLEY MARTINS 95042261168')
            
            cy.digitaSpan('CPF / CNPJ', '01.192.855/0001-24').tab();
            cy.wait(4000);
                       
            cy.validaSpan('Base cálculo', ' [não informado]  ');

            cy.get('[class="ui-select-placeholder text-muted"]').type('{enter}');

            cy.digitaSpan('Descrição do serviço', 'Teste de serviço gerado pelo automação',"0","textarea");

            cy.digitaSpan('Valor do serviço', '100,00').tab();

            cy.digitaSpan('Observação', 'Teste de serviço gerado pelo automação',"0","textarea");

            //Clica no botao SALVAR
            cy.get('button[nat="Salvar"]').click(); 
            
             //valida se a nota foi salva com sucesso
             cy.get('.md-toast-content',{timeout:10000}).contains('Registro salvo com sucesso!', {timeout:10000});
           
        });

        it('Valida IMPRIMI NOTA FISCAL / GERAR DUAM', () => {

            //Valida Modal de Conferencia da nota
            cy.get('.pd-tela-padrao-titulo-popup',{timeout:10000})
            .contains('Conferencia de Nota Fiscal Eletrônica');

            //Clica no botao GERAR
            cy.get('button[ng-click="vm.gerarNotaFiscalEletronica()"]').click();

             //valida se a nota foi gerada com sucesso
             cy.get('.modal-body',{timeout:10000}).should('be.visible').contains(/Nota fiscal gerada com sucesso!/, {timeout:10000});
             cy.get('button[nat=pdBtnAlertOKNao]').click({force:true});                        
        });       
    }
}

export default new notaFiscalEletronica();