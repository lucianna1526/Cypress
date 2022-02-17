class despachoProcesso{
    acessaDespacho(){
        //it acessa modulo protocolo tela autuação
        it("PROTOCOLO: Acessa Despacho por processo", () => {
            cy.moduloMenu('PROTOCOLO','Despacho por processo');
        });
    }
    validaDespachoEmbranco(){
        this.pesquisaDespacho();
        it("Valida despacho em branco", () => {
            //cy.intercept('post', '**/remessaItemController/getDadosDespacho**').as('getDadosDespacho');
            //http://desenvolvimento.prodataweb.inf.br:8008/sigAutomacaoDK/rest/remessaItemController/getDadosDespacho?nr_processo=2022014924
            //cy.wait('@getDadosDespacho');
            cy.get('button[nat="cadastroDespachoProcessoDespachar"]',{timeout:10000}).should('be.visible');
            cy.get('button[nat="cadastroDespachoProcessoDespachar"]',{timeout:10000}).click();

            //valida modal de erro
            
            cy.get('div[nat="pdBtnAlertOKBody"]',{timeout:10000}).should('contain', 'Campo com preenchimento obrigatório: Despacho');
            cy.get('[nat="pdBtnAlertOK"]',{timeout:10000}).click();
        });  
    }
    realizaDespacho(){
        this.pesquisaDespacho();
        it("PROTOCOLO: Realiza Despacho", () => {
            cy.get('a[nat="cadastroDespachoProcessoSituacaoLimpar"]',{timeout:10000}).click({force:true});
            //cy.autoComplete('input[nat="cadastroDespachoProcessoSituacaoDescricao"]','EM ANDAMENTO');
            //cy.get('input[nat="cadastroDespachoProcessoSituacao"]',{timeout:10000}).type('1').tab();
            cy.get('button[nat="cadastroDespachoProcessoSituacaoPesquisa"]').click();
            cy.get('button[nat="botaoCarregar"]',{timeout:10000}).last().click();
            cy.get('textarea[nat="cadastroDespachoProcessoDespacho"]',{timeout:10000}).type('Despacho realizado pela automação');
            cy.get('button[nat="cadastroDespachoProcessoDespachar"]',{timeout:10000}).click();
            //valida mensagen de sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Despacho realizado com sucesso');
            cy.get('.md-toast-content>button').click();
        });
    }
    cancelaDespacho(){
        this.pesquisaDespacho();
        it("PROTOCOLO: Cancela Despacho", () => {      
            cy.get('button[nat="cadastroDespachoProcessoCancelarDespacho"]',{timeout:10000}).click();
            //valida mensagen de sucesso
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Despacho cancelado com sucesso');
            cy.get('.md-toast-content>button').click();
        });
    }
    pesquisaDespacho(){
        it("Pesquisa o despacho", () => {
            cy.get('button[nat="cadastroDespachoProcessoLimpar"]',{timeout:10000}).click();
            cy.get('button[nat="cadastroDespachoProcessoNumeroProcessoPesquisa"]',{timeout:10000}).click();
            cy.get('div[nat="consultaProcessoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000})
            //http://desenvolvimento.prodataweb.inf.br:8008/sigAutomacaoDK/rest/remessaItemController/getDadosDespacho?nr_processo=2022014924
            cy.intercept('post', '**/processoController/consultar').as('getDadosDespacho');
            cy.get('[nat="botaoCarregar"]',{timeout:10000}).first().click();
            cy.wait('@getDadosDespacho')
        });
    }   
}

export default new despachoProcesso();