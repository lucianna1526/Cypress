import processoCompraInsereDados from "./processoCompraInsereDados";

class geraAutorizacaoCompra {
    geraAutorizacao(){
        describe ('Acessa - Fase Gera autorização de compra', () => {
            processoCompraInsereDados.processoCompras();
            //Clica na Fase Gera Autoriziação de Compra
            cy.get('li[nat="Gera autorização de compra"]')
            .click();

            //Seleciona Fornecedores Vencedores
            cy.get('[nat="consultaAutorizacaoComprasCdFornecSelect"]')
            .click();

            //Clica no botão Gerar Autorização
            cy.get('[nat="rowTemplate"]')
            .click();

            //Insere Local de Estoque
            cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoque"]')
            .click();

            //Abrir Pedido de Compras
            cy.get('[nat="rowTemplate"]')
            .click();
        });
    }
}

export default new geraAutorizacaoCompra();
