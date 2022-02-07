class anulaEmpenhoDispensaSemReserva {
  /*---Valida o saldo da reserva, quando o empenho gerado foi no valor total
       e o campo manter saldo da reserva está como SIM---*/
  anulaEmpenhoEMSSemReserva() {
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
        //Aguarda o load da grid
        cy.get('div[nat="cadastroEmsLiquidacaoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{ timeout: 10000 });

        
        cy.get('button[title="Anular Liquidação"]',{ timeout: 10000 }).click();
        cy.get('textarea[nat="popupAnulacaoLiquidacaoJustificativa"]',{ timeout: 10000 }).type("Anulação de Empenho Cypress").wait(2000);
        
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

  anulacaoEmpenhoSemReserva() {
    it("ACESA EMS COMPRAS", () => {
      
        cy.moduloMenu('COMPRAS E LICITAÇÕES','Anulação de empenho');
    });
    it("Anulação de Empenho", () => {
      cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
      
      //Aguarda o load da grid
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 });

      //seleciona todos os elementos da grid
      cy.get('.ui-grid-selection-row-header-buttons').eq(0).click();

      //Abre modal Anula Itens GLOBAL
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItensSelecionadosGlobal"]',{ timeout: 10000 }).click();

      //abre modal para seleciona um protocolo
      cy.get('[nat="cadastroAnulacaoEmpenhoComprasProcessoPesquisa"]',{timeout: 10000}).click();

      //Seleciona o primeiro protocolo
      cy.get('button[nat="botaoCarregar"]',{ timeout: 10000 }).first().click();

      //marca cancelamento saldo da cotação
      cy.get('[nat="cadastroAnulacaoEmpenhoComprasCancelarSaldoCotacao"]>.md-ink-ripple',{ timeout: 10000 }).click();

      //historico
      cy.get('textarea[nat="cadastroAnulacaoEmpenhoComprasHistorico"]').type("Anulação de Empenho Cypress");

      //clica em anular empenho no modal
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItens"]',{ timeout: 10000 }).click();

      //Valida mensagem Anulação dos itens
      cy.get(".md-toast-text",{timeout: 10000}).should("have.text", "      Anulação dos itens realizada com sucesso!    ");

      /* //seleciona a anualação do item depois que volta do modal
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasGrid1"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 }).click();

      //exlui a anulação do item
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasExcluirAnulacao"]',{ timeout: 10000 }).click();

      //confirma exclusão
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();

      //valida exclusão
      cy.get(".md-toast-text").should("have.text", "      Anulação removida com sucesso!    "); */

    });
  }

  excluiAnulacaoEmpenhoPedidoSemReserva() {
    it('Exclui anulação de empenho - Pedido de compra', () => {
      cy.moduloMenu('COMPRAS E LICITAÇÕES','Anulação de empenho');
        cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
        
        //Aguarda o load da grid
        cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 });
  
        //seleciona todos os elementos da grid
        cy.get('.ui-grid-selection-row-header-buttons').eq(0).click();
      //seleciona a anualação do item depois que volta do modal
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasGrid1"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 }).click();

      //exlui a anulação do item
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasExcluirAnulacao"]',{ timeout: 10000 }).click();

      //confirma exclusão
      cy.get('button[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();

      //valida exclusão
      cy.get(".md-toast-text").should("have.text", "      Anulação removida com sucesso!    ");
    })
  }
  
  anulacaoEmpenhoMantemSaldoSemReserva() {
      it("Acessa anulação de empenho - Pedido Compras", () => {
       //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
          cy.moduloMenu('COMPRAS E LICITAÇÕES', 'Anulação de empenho');
      });
      it("Anulação de Empenho", () => {
        cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
        
        //Aguarda o load da grid
        cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 });
  
        //seleciona todos os elementos da grid
        cy.get('.ui-grid-selection-row-header-buttons').eq(0).click();
  
        //Abre modal Anula Itens GLOBAL
        cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItensSelecionadosGlobal"]',{ timeout: 10000 }).click();
  
        //abre modal para seleciona um protocolo
        cy.get('[nat="cadastroAnulacaoEmpenhoComprasProcessoPesquisa"]',{timeout: 10000}).click();
  
        //Seleciona o primeiro protocolo
        cy.get('button[nat="botaoCarregar"]',{ timeout: 10000 }).first().click();
  
        //marca cancelamento "Não reservar novamente"
        cy.get('[nat="cadastroAnulacaoEmpenhoComprasNaoReservarNovamente"]>.md-ink-ripple',{ timeout: 10000 }).click();
  
        //historico
        cy.get('textarea[nat="cadastroAnulacaoEmpenhoComprasHistorico"]').type("Anulação de Empenho Cypress");
  
        //clica em anular empenho no modal
        cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItens"]',{ timeout: 10000 }).click();
  
        //Valida mensagem Anulação dos itens
        cy.get(".md-toast-text").should("have.text", "      Anulação dos itens realizada com sucesso!    ");       
      }); 
    }  


  
  validaSaldoFichaSemReserva() {
    it("ACESA ORÇAMENTO - RESERVA DE DOTAÇÃO", () => {
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.get('[nat="ORÇAMENTO"]').click();

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
      cy.get('[nat="consultaReservaDotacaoSimplificadaGridabrirT  elaDeCadastro"]',{ timeout: 10000 });
      //valida saldo da ficha
      cy.get('[nat="fichaInfoSaldoAtual"]>div>div>span>span').should("have.text", "R$ 35.000,00").wait(5000);
    }); 
  }
}
export default new anulaEmpenhoDispensaSemReserva();
