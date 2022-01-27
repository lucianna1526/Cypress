
class processoComprasDispensaGeraAutorizacaoCompra {
    geraAutorizacao(){        
            it('Acessa - Fase Gera autorização de compra', () => {
                
                //Clica na Fase Gera autorização de compra    
                cy.get('li[nat="Gera autorização de compra"]')
                .click()
                .wait(5000);
                
                //Seleciona Fornecedores vencedores
                cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
                .wait(500)
                .click()
                .type('{downarrow}')
                .type('{enter}')

                //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
                cy.get('button[title="Gerar autorização"]')
                .click()
                .wait(5000);

                //Informa local de estoque
                cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]')
                .type("FMMA - PRODUTOS")
                .wait(1000)
                .type("{enter}");

                //Clica em GERAR NOVA AUTORIZAÇÃO
                cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
                .click()
                .wait(5000)

                //Clica no botão para abrir o Pedido de Compras
                cy.get('button[title="Abrir pedido de compra"]')
                .click()
                .wait(5000)

                //Clica na Aba - Dados orçamentários

      cy.get('[nat="Dados orçamentários"] > .nav-link').click();
     

      //Tipo de empenho
      cy.get('[nat="cadastroPedidoCompraDadosOrcamentariosTipoEmpenhoSelect"]')
        .click()
        .type("Ordinário")
        .wait(500)
        .type("{enter}");

      //Informa Elemento da Despesa
      cy.get('input[placeholder="Digite o codigo ou a descrição do elemento de despesa (subnatureza)"]')
      .click()
      .type("17-MATERIAL DE PROCESSAMENTO DE DADOS")
      .wait(500)
      .type("{enter}");

      //Clica no botão SALVAR - Pedido de compra
      cy.get('[nat="cadastroPedidoCompraCrudSalvar"]').click().wait(5000);
                
                 //Aperta ESC pra sair das telas
                cy.get('.pd-crud-popup > [ng-transclude="header"] > ._md > .md-toolbar-tools')
                .type('{esc}')
                .wait(1000)
                
                cy.get('[ng-click="fechar()"] > .md-blue-theme')
                .type('{esc}')
                .wait(1000) 
        });
    }
}

export default new processoComprasDispensaGeraAutorizacaoCompra();
