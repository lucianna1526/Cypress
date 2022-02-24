import {formatedMonth2PtBR} from '../Utils/helpers';

class gestaoPrestador {
    replicarNfe() {
        it('NFE ADMINISTRAÇAO: Gestão do Prestador', () => {
            cy.moduloMenu('NFE ADMINISTRAÇÃO', 'Gestão prestador');
        });

        it('Valida Pesquisa do Contribuinte - Gestão do Prestador', () => {
            cy.get('button[nat="Pesquisa"]', {timeout:1000}).click();
            cy.get('#sigModule > div.modal.fade.pd-modal.in > div > div > div > pd-pesquisa > div > md-content', {timeout:1000});
            cy.get('pd-input-text:nth-of-type(3)>div>div>input', {timeout:10000}).click().wait(1000).type('15026488000101')
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('#sigModule > div.modal.fade.pd-modal.in > div > div > div > pd-pesquisa > div > md-content', {timeout:1000});
            cy.get('button[nat="botaoCarregar"]').first().click();

            cy.wait(1000);

            cy.get('md-content#pdDivBody>div>ui-view>div>pd-index-modulo>div>div>div>pd-tela-padrao>div>form>div>div>pd-tela-padrao-body>div:nth-of-type(2)>div:nth-of-type(2)>div>p>input')
            .click()
            .type(formatedMonth2PtBR())
            .tab();

            cy.get('ng-transclude > .md-raised').click();

        });

        it('Seleciona item na grid para replicar', () => {
            cy.get('[role=row]').as('grid');
            //.contains('10,00').click();
            cy.get("@grid")
            .contains("10,00") //varre procurando o elemento que contem o o valor da nota fiscal a ser replicada
            .click()
            .parents(".ui-grid-viewport")
            .scrollTo("right", {
              easing: "linear",
              duration: 2000,
            })
            cy.get('.ui-grid-cell-contents > [title="Replicar Nota Fiscal Eletrônica."]').click();

            //valida se tem certeza que deseja replicar
            cy.get('.modal-body',{timeout:1000}).should('be.visible').contains(/Tem certeza que deseja replicar a nota selecionada/);
            cy.get('.modal-footer > .btn-default').click();            
        });

        it('Acessa modal: Emissao Nota Fiscal Eletronica', () => {
            //Clica no botão SALVAR
            cy.get('[nat="Salvar"]', {timeout:1000}).click();

            //valida se a nota foi replicada com sucesso
            cy.get('.md-toast-content',{timeout:1000}).should('be.visible').contains('Nota replicada com sucesso!', {timeout:1000});
            //cy.get('.modal-footer>button').click();

            cy.get('.panel-body pd-tela-padrao-footer [type=button][aria-label=Salvar]').click();
        });
    }   
}

export default new gestaoPrestador();