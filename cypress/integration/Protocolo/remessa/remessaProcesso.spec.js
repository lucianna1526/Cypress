class remessaProcesso{
    validaCadastroEmBranco(){
        it("PROTOCOLO: Remessa", () => {
            cy.moduloMenu('PROTOCOLO','Remessa');
        });
        it("Remessa: Validação de cadastro em branco", () => {
            cy.get('[nat="cadastroRemessaCrudSalvar"]',{timeout:10000}).click();
            //valida mensagem de erro
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Por favor, verifique os campos inválidos');
            cy.get('.md-toast-content>button').click();
        });
    }
    cadastroCapaRemessa(){
        it('Cadastro Capa Remessa', () => {
            cy.autoComplete('input[nat="cadastroRemessaOrigemDescricao"]','PROTOCOLO');
            cy.autoComplete('input[nat="cadastroRemessaDestinoDescricao"]','DPT. COMPRAS');
            cy.get('textarea[nat="cadastroRemessaObservacaoEnvio"]').clear().type('Teste de cadastro de remessa realizado pela automação');

            cy.get('[nat="cadastroRemessaCrudSalvar"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it('Anexa Processo à remessa', () => {
            cy.get('button[nat="cadastroRemessaGridabrirTelaDeCadastro"]',{timeout:10000}).click();
            cy.get('button[nat="anexarProcessoRemessaProcessoPesquisa"]',{timeout:10000}).click();
            //vai na aba outros filtros e clica em processos sem vinculos
            cy.get('li[nat="Outros filtros"]',{timeout:10000}).click();
            cy.get('[nat="pesquisaProcessosOutrosTipoProcessoSelect"]',{timeout:10000})
                .click()
                .wait(100)
                .type('Sem remessa')
                .wait(100)
                .type('{enter}');
            cy.get('button[nat="Pesquisar"]',{timeout:10000}).click();
            cy.get('button[nat="botaoCarregar"]',{timeout:10000}).first().click();
            cy.get('button[nat="anexarProcessoRemessaCrudSalvarFechar"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it('Libera Remessa', () => {
            //libera remessa para envio
            cy.get('button[nat="cadastroRemessaLiberarRemessa"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Remessa liberada com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
    }
    editaCapaRemessa(){
        it('Edita Capa Remessa -> Cancela liberação', () => {
            cy.get('[nat="cadastroRemessaCrudAcoesExtrasRelatorio"]',{timeout:10000}).click();
            cy.get('[aria-label="Cancelar liberação"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Liberação cancelada com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it('Edita Capa Remessa -> Altera Capa', () => {
            cy.get('textarea[nat="cadastroRemessaObservacaoEnvio"]').clear().type('Teste de alteração de remessa realizado pela automação');

            cy.get('[nat="cadastroRemessaCrudSalvar"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it('Libera Remessa', () => {
            //libera remessa para envio
            cy.get('button[nat="cadastroRemessaLiberarRemessa"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Remessa liberada com sucesso!');
            cy.get('.md-toast-content>button').click();
        });

    }
    excluiCapaRemessa(){
        it('Exclui Capa Remessa -> Cancela liberação', () => {
            cy.get('[nat="cadastroRemessaCrudAcoesExtrasRelatorio"]',{timeout:10000}).click();
            cy.get('[aria-label="Cancelar liberação"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Liberação cancelada com sucesso!');
            cy.get('.md-toast-content>button').click();
        });

        it('Exclui Capa Remessa', () => {
            //tica todos os elementos grid
            cy.get('[ng-model="grid.selection.selectAll"]').click();
            cy.get('button[nat="cadastroRemessaRemoverSelecionados"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('div[nat="cadastroRemessaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000}).should('not.exist')

            
            cy.get('button[nat="cadastroRemessaCrudExcluir"]',{timeout:10000}).click();
            cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro excluído com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
    }

}
export default new remessaProcesso();