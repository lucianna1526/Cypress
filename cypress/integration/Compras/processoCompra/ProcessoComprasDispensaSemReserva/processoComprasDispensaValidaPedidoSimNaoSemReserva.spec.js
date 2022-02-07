import { formatedDate2PtBR } from "../../../Utils/helpers.js";
import processoComprasDispensaPedidoCompraSemReservaSpec from '../ProcessoComprasDispensaSemReserva/processoComprasDispensaPedidoCompraSemReserva.spec.js'

class processoCompraDispensaPedidoSimNaoSemReserva {
    validaPedidoSimNaoSemReserva() {
        it("Autorização/PedidoCompras - Confere se ja existe um pedido gerado", () => {
     

            cy.get("body").then(($body) => {
              if ($body.find('button[nat="botaoSideMenu"]').length == 0) {
                cy.wait(3000);
                cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();
                cy.wait(3000);
              }
            });
          
        });
             it("Acessa tela de gerar autorização de compras", () => {
           
            /* cy.get('img[title="Ir para menu geral"]').click().wait(2000);
            cy.get('[nat="COMPRAS E LICITAÇÕES"]').click(); */
             //Acessa Pedido de Compras
            cy.wait(3000);
            cy.get('button[nat="botaoSideMenu"]').click();
            cy.get('input[nat="buscaMenuVertical"]')
              .type("Gera autorização de compra")
              .click()
              .type("{downarrow}")
              .type("{enter}");
              
              //Limpar campos
              cy.get('button[nat="consultaAutorizacaoComprasLimpar"]').click();

              //Seleciona ultimo processo de compras na grid de pesquisa
      cy.get('button[nat="consultaAutorizacaoComprasNrCotacaoPesquisa"]')
      .click().wait(3000);
        cy.get(
          '[nat="pesquisaProcessoCompraGrid"]'
        ).first();

        cy.get('[nat="botaoCarregar"]').first().click();


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

         if(cy.get('button[title="Abrir pedido de compra"]') == null){

           cy.log("Não existe um Pedido de Compras gerado");
           
           //Informa local de estoque
           cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]')
           .type("FMMA - PRODUTOS")
           .wait(1000)
           .type("{enter}");
           
           //Clica em GERAR NOVA AUTORIZAÇÃO
           cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
           .click()
           .wait(5000)
        }else{
            cy.log("Existe um Pedido de Compras gerado");
            cy.get('[ng-click="fechar()"] > .md-blue-theme')
                .type('{esc}')
                .wait(1000) 
                
                processoComprasDispensaPedidoCompraSemReservaSpec.pedidoCompraDispensaGeradoSimSemReserva();               
                      
}});    
};    
}       

export default new processoCompraDispensaPedidoSimNaoSemReserva();
