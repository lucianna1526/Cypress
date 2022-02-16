class despachoProcesso{
    acessaDespacho(){
        //it acessa modulo protocolo tela autuação
        it("PROTOCOLO: Despacho por processo", () => {
            cy.moduloMenu('PROTOCOLO','Despacho por processo');
        });
    }
    validaDespachoEmbranco(){
        this.pesquisaDespacho();
        it("Valida despacho em branco", () => {
            cy.intercept('post', '**/remessaItemController/getDadosDespacho**').as('getDadosDespacho');
            //http://desenvolvimento.prodataweb.inf.br:8008/sigAutomacaoDK/rest/remessaItemController/getDadosDespacho?nr_processo=2022014924
            cy.wait('@getDadosDespacho');
            cy.get('button[nat="cadastroDespachoProcessoDespachar"]',{timeout:10000}).should('be.visible');
            cy.get('button[nat="cadastroDespachoProcessoDespachar"]',{timeout:10000}).click();

            //valida modal de erro
            
            cy.get('div[nat="pdBtnAlertOKBody"]',{timeout:10000}).should('contain', 'Campo com preenchimento obrigatório: Situação\nCampo com preenchimento obrigatório: Despacho');
            cy.get('[nat="pdBtnAlertOK"]',{timeout:10000}).click();
        });  
    }
    realizaDespacho(){
        this.pesquisaDespacho();
        it("PROTOCOLO: Realiza Despacho", () => {

        });
    }
    cancelaDespacho(){
        this.pesquisaDespacho();

    }
    pesquisaDespacho(){
        it("Pesquisa o despacho", () => {
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