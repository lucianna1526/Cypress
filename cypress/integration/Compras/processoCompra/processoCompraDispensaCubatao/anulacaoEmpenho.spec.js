class anulaEmpenho {
  /*---Valida o saldo da reserva, quando o empenho gerado foi no valor total
       e o campo manter saldo da reserva está como SIM---*/
  anulaEmpenhoEMS() {
    it("ACESA EMS COMPRAS", () => {
      cy.get('[nat="COMPRAS E LICITAÇÕES"]',{ timeout: 10000 })
      .click();
     
      //Acessa Pedido de Compras
      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type(" EMS - Entrada de Mercadorias ou Serviços")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });
    it("Seleciona EMS Anterior", () => {
      cy.get('[nat="cadastroEmsNrEmsAnterior"]')
        .click();
    });
    it("Anula Parcela Liquidação", () => {
      cy.get('[nat="Parcelas da liquidação"]')
        .click();
        cy.get('button[title="Anular Liquidação"]',{ timeout: 10000 }).click();
        cy.get('textarea[nat="popupAnulacaoLiquidacaoJustificativa"]',{ timeout: 10000 }).type("Anulação de Empenho Cypress");
        
        cy.get('button[nat="popupAnulacaoLiquidacaoAnular"]',{ timeout: 10000 }).click();
        cy.get(".md-toast-text").should("have.text", "      Liquidação anulada com sucesso.    ");

    });
    it("EMS - Abre EMS", () => {
      cy.get('button[nat="cadastroEmsAbrirEms"]').click();
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      cy.get(".md-toast-text").should("have.text", "      EMS reaberta com sucesso    ");
   
    });
    it("EMS - Remove parcelamento", () => {
      cy.get('button[nat="botaoExcluir"]',{ timeout: 10000 }).first().click();
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      cy.get(".md-toast-text").should("have.text", "      Registro excluído com sucesso!    ");
    });
    it("EMS - Remove Documentos", () => {
      cy.get('[nat="Documentos"]',{ timeout: 10000 }).click();
      cy.get('button[nat="botaoExcluir"]',{ timeout: 10000 }).first().click();
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      cy.get(".md-toast-text").should("have.text", "      Registro excluído com sucesso!    ");
    });
    it("EMS - Excluir EMS", () => {
      cy.get('button[nat="cadastroEmsCrudExcluir"]').click();
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      cy.get(".md-toast-text").should("have.text", "      Registro excluído com sucesso!    ").wait(5000);
    });


    //Acessa Ordem de Fornecimento - Entrega
    it("Acessa Ordem de Fornecimento - Entrega", () => {      
     
      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
      .type("Autorização de entrega pelo pedido")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });    

    it("EMS - Exclui autorizacao de entrega", () => {
     
      cy.get('button[nat="cadastroAutorizacaoEntregaPedidoCodigoAnterior"]',{ timeout: 10000 }).click();
      cy.get('button[nat="cadastroAutorizacaoEntregaPedidoCrudExcluir"]',{ timeout: 10000 }).click();
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      cy.get(".md-toast-text").should("have.text", "      Registro excluído com sucesso!    ");
      
    });

  }

  anulacaoEmpenho() {
    it("ACESA EMS COMPRAS", () => {
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.get('[nat="COMPRAS E LICITAÇÕES"]',{ timeout: 10000 })
      .click();
     
      //Acessa Pedido de Compras
      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Anulação de empenho")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });
    it("Anulação de Empenho", () => {
      cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
      
      //seleciona item do empenho
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 }).click();

      //seleciona a anualação do item
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasGrid1"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 }).click();

      //exlui a anulação do item
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasExcluirAnulacao"]',{ timeout: 10000 }).click();

      //confirma exclusão
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();

      //valida exclusão
      cy.get(".md-toast-text").should("have.text", "      Anulação removida com sucesso!    ");

    });
  }
  validaSaldoFicha() {
    it("ACESA EMS COMPRAS", () => {
      cy.get('[nat="ORÇAMENTO"]',{ timeout: 10000 })
      .click();

      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Reserva de dotação")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });
    it("Reserva de dotação", () => {
      //seleciona a ficha
      cy.get('input[nat="fichaInfoFicha"]').type('20211498').type("{enter}");
      //aguarda ficha carregar
      cy.get('[nat="consultaReservaDotacaoSimplificadaGridabrirTelaDeCadastro"]',{ timeout: 10000 });
      //valida saldo da ficha
      cy.get('[nat="fichaInfoSaldoAtual"]>div>div>span>span').should("have.text", "R$ 35.000,00");
    }); 
  }
}
export default new anulaEmpenho();
