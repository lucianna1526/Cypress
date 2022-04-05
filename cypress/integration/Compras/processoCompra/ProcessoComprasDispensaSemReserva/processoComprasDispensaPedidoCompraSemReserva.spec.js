import { formatedDate2PtBR } from "../../../Utils/helpers.js";
class processoComprasDispensaPedidoCompraSemReserva {
  pedidoCompraDispensaGeradoSimSemReserva() {
    //Acessa Pedido de Compras
    cy.wait(3000);
    cy.get('button[nat="botaoSideMenu"]').click();
    cy.get('input[nat="buscaMenuVertical"]')
      .type("Pedido de compra")
      .click()
      .type("{enter}");

    //Pesquisa ultimo pedido de compras gerado
    cy.get('button[nat="cadastroPedidoCompraNPedidoPesquisa"]').click();
    //Seleciona ultimo pedido na grid de pesquisa
    cy.get('[nat="pesquisaPedidoCompraGrid"]').first();

    cy.get('[nat="botaoCarregar"]').first().click().wait(5000);

    //Clica na Aba - Dados orçamentários

    cy.get('[nat="Dados orçamentários"] > .nav-link').click();

    //Tipo de empenho
    cy.get('[nat="cadastroPedidoCompraDadosOrcamentariosTipoEmpenhoSelect"]')
      .click()
      .type("Ordinário")
      .wait(500)
      .type("{enter}");

    //Informa Elemento da Despesa
    /* cy.get('input[placeholder="Digite o codigo ou a descrição do elemento de despesa (subnatureza)"]')
      .click()
      .type("17-MATERIAL DE PROCESSAMENTO DE DADOS")
      .wait(500)
      .type("{enter}");*/

    //Clica no botão SALVAR - Pedido de compra
    cy.get('[nat="cadastroPedidoCompraCrudSalvar"]').click().wait(5000);

    //---Insere Parcela---
    //Clica no botão ADICIONAR - Grid Parcela
    cy.get(
      '[nat="cadastroPedidoCompraDadosOrcamentariosParcelasEmpenhoGridabrirTelaDeCadastro"]'
    ).click();

    //Nº Parcela
    cy.get('input[nat="cadastroPedidoCompraParcelaNParcela"]').wait(1000).tab();

    //Data Vencimento
    cy.get('input[nat="cadastroPedidoCompraParcelaDataVencimento"]')
      .dblclick()
      .type(formatedDate2PtBR());
    //.type(joiformatedDate2PtBR());

    //Valor Parcela
    cy.get('input[nat="cadastroPedidoCompraParcelaValorParcela"]').type(
      "100,00"
    );

    //Adicionar e Sair
    cy.get('button[nat="cadastroPedidoCompraParcelaCrudSalvarFechar"]').click();

    //---Fim Parcela---

    //Gerar Empenho
    cy.get('[nat="cadastroPedidoCompraGerarEmpenho"]').click().wait(8000);
  }
  pedidoCompraDispensaGeradoNaoSemReserva() {
    //Acessa Pedido de Compras
    cy.wait(3000);
    cy.get('button[nat="botaoSideMenu"]').click();
    cy.get('input[nat="buscaMenuVertical"]')
      .type("Gera autorização de compra")
      .click()
      .type("{downarrow}")
      .type("{enter}");

    //Pesquisa ultimo pedido de compras gerado
    cy.get('button[nat="consultaAutorizacaoComprasNrCotacaoPesquisa"]').click();
    //Seleciona ultimo pedido na grid de pesquisa
    cy.get('[nat="pesquisaProcessoCompraGrid"]').first();

    cy.get('[nat="botaoCarregar"]').first().click();

    //Seleciona Fornecedores vencedores
    cy.get('div[nat="consultaAutorizacaoComprasCdFornecSelect"]')
      .wait(500)
      .click()
      .type("{downarrow}")
      .type("{enter}");

    //Clica no botao engrenagem para abrir a tela "Gerar Autorização de compras"
    cy.get('button[title="Gerar autorização"]').click().wait(5000);

    //Informa local de estoque
    cy.get('input[nat="popupGeraAutorizacaoComprasLocalEstoqueDescricao"]')
      .type("FMMA - PRODUTOS")
      .wait(1000)
      .type("{enter}");

    //Clica em GERAR NOVA AUTORIZAÇÃO
    cy.get('button[nat="popupGeraAutorizacaoComprasGeraNovaAutorizacao"]')
      .click()
      .wait(5000);
  }
}

export default new processoComprasDispensaPedidoCompraSemReserva();
