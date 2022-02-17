class arquivarProcesso{
    acessarArquivar(){
            it("PROTOCOLO: Arquivar e desarquivar processo", () => {
                cy.moduloMenu('PROTOCOLO','Arquivar e desarquivar processo');
            });
    }
    arquivarProcesso(){
        it("Arquiva Processo", () => {
            cy.get('button[nat="cadastroArquivamentoProcessoProcessoPesquisa"]',{timeout:10000}).click();
            cy.get('button[nat="botaoCarregar"]',{timeout:10000});
            cy.get('input[aria-label="Filtro por coluna"]').eq(2).clear().type('NOTA FISCAL');
            cy.get('button[nat="botaoCarregar"]',{timeout:10000}).first().click();
            cy.autoComplete('input[nat="cadastroArquivamentoProcessoSituacaoDescricao"]','EM ANDAMENTO');
            cy.get('[nat="cadastroArquivamentoProcessoTipoSelect"]')
                .click()
                .type('Arquivado{enter}');
            cy.get('textarea[nat="cadastroArquivamentoProcessoObservacaoArquivamento"]').type('Arquivamento realizado pela automação');
            cy.autoComplete('[nat="cadastroArquivamentoProcessoLocalArquivoDescricao"]','ARQUIVO GERAL');
            cy.get('button[nat="cadastroArquivamentoProcessoArquivar"]').click();	
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Processo arquivado com sucesso!');
            cy.get('.md-toast-content>button').click();
        })

    }
    desarquivarProcesso(){
        it("Desarquiva Processo", () => {
        cy.get('textarea[nat="cadastroArquivamentoProcessoMorivoDesarquivamento"]').clear().type('Desarquivamento realizado pela automação');
        cy.get('button[nat="cadastroArquivamentoProcessoDesarquivar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Processo desarquivado com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
    }
}
export default new arquivarProcesso();