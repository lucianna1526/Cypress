import { formatedDate2PtBR } from "../../../../Utils/helpers.js";

class validaSaldoReservaPedidoComprasDispensa {
  //---Valida o saldo da reserva, quando o empenho gerado foi no valor total
       //e o campo manter saldo da reserva está como SIM---

       //Valida Saldo da Ficha - Inicial
       validaSaldoInicialFicha() {
        it("Valida saldo Inicial - Reserva Dotação", () => {
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
          cy.get('input[nat="fichaInfoFicha"]').type('20222076').type("{enter}");
          //aguarda ficha carregar
          cy.get('[nat="consultaReservaDotacaoSimplificadaGridabrirTelaDeCadastro"]',{ timeout: 10000 });
          //valida saldo da ficha
          cy.get('[nat="fichaInfoSaldoAtual"]>div>div>span>span').should("have.text", "R$ 50.000,00").wait(5000);
        }); 
      }

      //Anula Liquidação na EMS
       anulaLiquidacaoRemoveEms() {
    it("ACESA EMS COMPRAS", () => {
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
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

  //Acessa Orçamento e Exclui Anulação de Liqidação e Liquidação
  excluiAnulacaoLiquidacao() {
    it("ACESSA LIQUIDAÇÃO NO ORÇAMENTO", () => {
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.get('[nat="ORÇAMENTO"]',{ timeout: 10000 })
      .click();
     
      //Acessa Nota de Liquidação
      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("NL - Nota de Liquidação")
        .click()
        .type("{downarrow}")
        .type("{enter}");
    });

    it("Carrega Liquidação", () => {
      cy.get('input[nat="cadastroNotaLiquidacaoFicha"]')     
        .type('20222076')
        .type('{enter}');
        cy.get('[nat="cadastroNotaLiquidacaoEmpenhoPesquisa"]')
        .click();
        cy.get('[nat="botaoCarregar"]').click();
    })
    it('Seleciona liquidação', () => {
      //aguarda botão da ficha carregar
      cy.get('[nat="cadastroNotaLiquidacaoLiquidacoesGridabrirTelaDeCadastro"]',{ timeout: 10000 });
      
      //clica no primeiro elemento da grid
      cy.get('[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]')
      .find('.ui-grid-canvas')
      .find('.ui-grid-row')
      .first()
      .click();
    });
    it('Clica aba Anulação de liquidação', () => {
      cy.get('li[nat="fluxoOrcamentoAnulação de liquidação"]')
      .click();
    });
    it('Exclui Anulação de liquidação', () => {
      //aguarda dados da grid carregar
      cy.get('div[nat="anulacaoLiquidacaoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{ timeout: 10000 });


      //aguarda grid da anulação de liquidação carregar
      cy.get('div[nat="anulacaoLiquidacaoGrid"]').as('grid');

      //exclui anulação de liquidação
      cy.get('@grid')
        .find('[nat="botaoExcluir"]')
        .first()
        .click();

      //confirma exclusão da anulação de liquidação
      cy.get('[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();

      //confirma exclusão da anulação de liquidação	
      cy.get('.md-toast-content').should('contain', 'Registro excluído com sucesso!');
    })
    it('Exclui documentos liquidação', () => {
      //seleciona aba liquidação
      cy.get('li[nat="fluxoOrcamentoLiquidação"]',{timeout: 10000}).click();
      
      //aguarda grid da liquidação carregar
      cy.get('div[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{ timeout: 10000 });

      //seleciona nota para exclusão do documento
      cy.get('[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]')
      .find('.ui-grid-canvas')
      .find('.ui-grid-row')
      .first()
      .click();

      //aguarda grid documento da liquidação carregar
      cy.get('div[nat="cadastroNotaLiquidacaoDocumentosGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div',{ timeout: 10000 });
      
      //seleciona grid documentos
      cy.get('[nat="cadastroNotaLiquidacaoDocumentosGrid"]').as('grid');

      //rola a barra pro final da grid
      cy.get("@grid")
        .find(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        })

      cy.get('@grid')
      .find('.ui-grid-canvas')
      .find('[nat="botaoExcluir"]')
      .first()
      .click();

      //confirma exclusão da anulação de liquidação
      cy.get('[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
      
      //confirma exclusão da anulação de liquidação	
      cy.get('.md-toast-content').should('contain', 'Registro excluído com sucesso!');
    })
    it('Exclui liquidação', () => {
      

      //seleciona grid
      cy.get('[nat="cadastroNotaLiquidacaoLiquidacoesGrid"]').as('grid');

      cy.get("@grid")
        .find(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        })

      cy.get('@grid')
      .find('.ui-grid-canvas')
      .find('[nat="botaoExcluir"]')
      .first()
      .click();

      //confirma exclusão da anulação de liquidação
      cy.get('[nat="pdBtnAlertOKSim"]',{ timeout: 10000 }).click();
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
      //cy.get('[nat="anulacaoEmpenhoComprasNrPedidoAnterior"]',{ timeout: 10000 }).click();
      cy.get('input[nat="anulacaoEmpenhoComprasNrPedido"]')
            .type("17380")
      .type("{enter}");
      
      
      //Aguarda o load da grid
      cy.get('div[nat="cadastroAnulacaoEmpenhoComprasItensGrid"]>div>div>div>div[class="ui-grid-canvas"]>.ui-grid-row',{ timeout: 10000 });

      //seleciona todos os elementos da grid
      cy.get('.ui-grid-selection-row-header-buttons').eq(0).click();

      
      //Abre modal Anula Itens GLOBAL
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItensSelecionadosGlobal"]',{ timeout: 10000 }).click();

      //Data
      cy.get('input[nat="cadastroAnulacaoEmpenhoComprasData"]')
      .dblclick()
      .type('29/12/2021');
      
      //abre modal para seleciona um protocolo
      cy.get('[nat="cadastroAnulacaoEmpenhoComprasProcessoPesquisa"]',{timeout: 10000}).click();

      //Seleciona o primeiro protocolo
      cy.get('button[nat="botaoCarregar"]',{ timeout: 10000 }).first().click();

      //Seleciona checkbox Não reservar novamente
      cy.get('[nat="cadastroAnulacaoEmpenhoComprasNaoReservarNovamente"]>.md-ink-ripple',{ timeout: 10000 }).click();

      //historico
      cy.get('textarea[nat="cadastroAnulacaoEmpenhoComprasHistorico"]').type("Anulação de Empenho Realizado pela Automação");

      //clica em anular empenho no modal
      cy.get('button[nat="cadastroAnulacaoEmpenhoComprasAnularItens"]',{ timeout: 10000 }).click();

      //Valida mensagem Anulação dos itens
      cy.get(".md-toast-text").should("have.text", "      Anulação dos itens realizada com sucesso!    ");
    

    });  
  }
 

  //Valida gerar Entrega com Pedido anulado utilizando "Não reservar novamente"
  insereEntregaSemSaldo() {
    it("ACESA ORÇAMENTO - RESERVA DE DOTAÇÃO", () => {
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.get('[nat="COMPRAS E LICITAÇÕES"]').click();

      cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
      cy.get('input[nat="buscaMenuVertical"]')
        .type("Pedido de compra")
        .click()
        
        .type("{enter}");

        cy.get('input[nat="cadastroPedidoCompraNPedido"]')
        .type("17380")
        .type("{enter}",{ timeout: 20000 });

        //Clica no Botão "ENTREGA"
        cy.get('[nat="cadastroPedidoCompraAbrirAutorizaçãoEntrega"]',{ timeout: 10000 }).click();
        cy.get('[nat="cadastroAutorizacaoEntregaPedidoCrudSalvar"]',{ timeout: 10000 }).click();
        //Valida mensagem
      cy.get(".modal-body").should("have.text", "Não é possível gerar uma Entrega, pois não existe saldo de entrega para esse pedido.");
      cy.get('button[nat="pdBtnAlertOK"]').click().wait(1000);
      
      //fecha modal
      cy.get('button[ng-click="fechar()"]').first().click();
    });
      
    
  }

  validaSaldoFinalFicha() {
    it("Valida saldo Final - Reserva Dotação", () => {
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
      cy.get('[nat="pdBtnAlertOKSim"]').click();
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
      cy.get('[nat="consultaReservaDotacaoSimplificadaGridabrirTelaDeCadastro"]',{ timeout: 10000 });
      //valida saldo da ficha
      cy.get('[nat="fichaInfoSaldoAtual"]>div>div>span>span').should("have.text", "R$ 35.000,00").wait(5000);
    }); 
  }
}




export default new validaSaldoReservaPedidoComprasDispensa();
