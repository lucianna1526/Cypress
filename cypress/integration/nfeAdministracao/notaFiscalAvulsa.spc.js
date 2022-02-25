class notaFiscalAvulsa {
    geraNotaFiscalAvulsa() {
        it('NFE ADMINISTRAÇAO: Emissao da Fiscal Eletronica Avulsa', () => {
            cy.moduloMenu('NFE ADMINISTRAÇÃO', 'Nota fiscal eletrônica avulsa');
        });

        it('Insere dados da nota fiscal avulsa', () => {
            cy.autoComplete('[nat="Descricao"]','JEANDES WESLEY MARTINS')

            cy.get('input[name=itCpfCnpj]').type('01.192.855/0001-24').tab();

            cy.get('md-content#pdDivBody>div>ui-view>div>pd-index-modulo>div>div>div>pd-crud>div>div:nth-of-type(2)>form>div>pd-crud-body>div:nth-of-type(5)>pd-legend>div>fieldset>ng-transclude>div>pd-autocomplete>div>div>div>div>pd-input-text>input')
            .type('4751201').tab();

            cy.get('.ui-select-match > .btn-default > .ui-select-placeholder')
            .click()
            .type(' 31.01 - Serviços técnicos em edificações, eletrônica, eletrotécnica, mecânica, telecomunicações e congêneres. ')
            .type('{enter}');
           
        });
    }
}

export default new notaFiscalAvulsa();