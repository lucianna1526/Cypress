import { formatedMonth2PtBR } from "../../../Utils/helpers";
class consultaSaldoFichaReservaDispensa {
  //Consulta Saldo Ficha
  //Descrição: Consulta o saldo da reserva (ficha)
  //Status: Implementado
  //Autor: Jeandes Wesley/Hevener Ancelmo
  //Data: 21/12/2021
  //Observação:
  //*****************************************************************************************************************************
  //Função para consultar o saldo Inicial da ficha modulo compras tela - Saldo de ficha
  consultaSaldoFichasInicial() {
    it("COMPRAS E LICITAÇÕES: Saldo de fichas", () => {
      cy.moduloMenu("COMPRAS E LICITAÇÕES","Saldo de fichas");
    })
    it("Valida Saldo Inicial na Tela: Saldo de Fichas", () => {
      //Pesquisa Ficha
      cy.get('button[nat="consultaSaldoFichaFichaPesquisa"]', { timeout: 10000 })
        .click();
      //Informa numero da ficha no campo de pesquisa
      cy.get('input[nat="fichaOrcamentariaFicha"]',{timeout:10000}).wait(500).type("20222076");
      //clica no botão pesquisar
      cy.get('button[nat="Pesquisar"]').click();
      //aguarda grid carregar
      cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div',{timeout:10000})
      //Carrega a ficha na grid
      cy.get('button[nat="botaoCarregar"]').click().debug().wait(2000);

      //Clica no botão PESQUISAR
      cy.get('button[nat="consultaSaldoFichaPesquisar"').click().wait(2000);

      //Validação do saldo inicial da ficha
      cy.get('div[nat="consultaSaldoFichaGrid"]').as("grid"); //caputra a grid

      cy.get("@grid") //varre procurando o elemento que contem o numero da ficha
        .contains("20222076")
        .parents(".ui-grid-row")
        .find(".ui-grid-cell-contents")
        .as("coluna");

      cy.get("@coluna").eq(4).contains("50.000,00").should("length", 1);
      //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha

      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }

  //Função para consultar o saldo Inicial da Reserva de Dotação modulo Orçamento tela - Reserva de dotação
  consultaSaldoReservaDotacaoInicial() {
    it("Valida Saldo Inicial na Tela: Reserva de dotação", () => {
      
      cy.moduloMenu("ORÇAMENTO","Reserva de dotação");
      //Ficha
      cy.get('input[nat="fichaInfoFicha"]').type("20222076").tab().wait(500);

      //validação do saldo inicial da ficha
      cy.get('[nat="fichaInfoSaldoAtual"]')
        .contains("50.000,00", {	timeout: 10000 })
        .should("length", 1);
      cy.wait(3000);
      //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }

  //Função para consultar o saldo Inicial da Execução orçamentária modulo Orçamento tela - Consulta Execução orçamentária
  consultaSaldoExecucaoOrcamentariaInicial() {
    it("ORÇAMENTO: Consulta de execução orçamentária", () => {
      cy.moduloMenu("ORÇAMENTO","Consulta de execução orçamentária");
    })
    it("Valida Saldo Inicial na Tela: Consulta execução orçamentária", () => {
      
      
      //Ano
      cy.get('input[nat="ConsultaExecucaoOrcamentariaAno input"]', { timeout: 10000 })
        .clear()
        .type("2022")
        .tab()
        .wait(2000);

      //Mes
      cy.get('input[nat="ConsultaExecucaoOrcamentariaMes"]')
        .clear()
        .type(`${formatedMonth2PtBR()}`)
        .tab()
        .wait(2000);

      //Ficha
      cy.get('input[nat="ConsultaExecucaoOrcamentariaFicha"]')
        .clear()
        .type("20222076")
        .tab()
        .wait(100);

      //Clica no botão PESQUISAR
      cy.get('button[nat="ConsultaExecucaoOrcamentariaPesquisar"')
        .click()
        .wait(2000);

      //Validação do saldo inicial da ficha na tela de consulta execução orçamentária
      cy.get('div[nat="ConsultaExecucaoOrcamentariaGrid"]').as("grid"); //caputra a grid
      cy.get("@grid")
        .contains("20222076") //varre procurando o elemento que contem o numero da ficha
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        })

        .find(".ui-grid-cell-contents")
        .as("coluna");

      cy.get("@coluna").contains("50.000,00").should("length", 1); //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha
    });
    //Valida o saldo inicial no rodapé da grid
    it("Consulta execução orçamentária: Valida saldo inicial no rodape da grid", () => {
      cy.get('div[nat="ConsultaExecucaoOrcamentariaGrid"]').as("grid"); //caputra a grid

      cy.get("@grid").find(".ui-grid-footer-cell-wrapper").as("coluna");

      cy.get("@coluna").contains("50.000,00").should("length", 1);
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }

  //Função para consultar o saldo Final da ficha modulo compras tela - Saldo de ficha
  consultaSaldoFichasFinal() {
    it("COMPRAS E LICITAÇÕES: Saldo de fichas", () => {
      cy.moduloMenu("COMPRAS E LICITAÇÕES","Saldo de fichas");
    })
    it("Valida Saldo Final na Tela: Saldo de Fichas", () => {
      //Ficha
      cy.get('input[nat="consultaSaldoFichaFicha"]', { timeout: 10000 })
        .clear()
        .type("20222076")
        .wait(500)
        .type("{enter}")
        .wait(500);

      //Clica no botão PESQUISAR
      cy.get('button[nat="consultaSaldoFichaPesquisar"').click();

      //aguarda o carregamento da grid
      cy.get('div[nat="consultaSaldoFichaGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div')

      //Validação do saldo inicial da ficha
      cy.get('div[nat="consultaSaldoFichaGrid"]').as("grid"); //caputra a grid

      cy.get("@grid") //varre procurando o elemento que contem o numero da ficha
        .contains("20222076")
        .parents(".ui-grid-row")
        .find(".ui-grid-cell-contents")
        .as("coluna");

      cy.get("@coluna").eq(4).contains("49.900,00").should("length", 1);
      //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha

      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }

  //Função para consultar o saldo Final da Reserva de Dotação modulo Orçamento tela - Reserva de dotação
  consultaSaldoReservaDotacaoFinal() {
    it("ORÇAMENTO: Reserva de dotação", () => {
      cy.moduloMenu("ORÇAMENTO","Reserva de dotação")
    })
    it("Valida Saldo Final na Tela: Reserva de dotação", () => {
      
      //Ficha
      cy.get('input[nat="fichaInfoFicha"]', { timeout: 10000 })
        .clear()
        .wait(500)
        .type("20222076")
        .tab()
        .wait(500);

      //validação do saldo inicial da ficha
      cy.get('[nat="fichaInfoSaldoAtual"]')
        .contains("49.900,00")
        .should("length", 1);
      cy.wait(3000);
      //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }

  //Função para consultar o saldo Final da Execução orçamentária modulo Orçamento tela - Consulta Execução orçamentária
  consultaSaldoExecucaoOrcamentariaFinal() {
    it("ORÇAMENTO: Consulta de execução orçamentária", () => {
      cy.moduloMenu("ORÇAMENTO","Consulta de execução orçamentária");
    })
    it("Valida Saldo Final na Tela: Consulta execução orçamentária", () => {
      //Ano
      cy.get('input[nat="ConsultaExecucaoOrcamentariaAno input"]')
        .type("2022")
        .tab()
        .wait(2000);

      //Mes
      cy.get('input[nat="ConsultaExecucaoOrcamentariaMes"]')
      .type(`${formatedMonth2PtBR()}`)
        .tab()
        .wait(2000);

      //Ficha
      cy.get('input[nat="ConsultaExecucaoOrcamentariaFicha"]')
        .type("20222076")
        .tab()
        .wait(1000);

      //Clica no botão PESQUISAR
      cy.get('button[nat="ConsultaExecucaoOrcamentariaPesquisar"')
        .click()
        .wait(2000);

      //Validação do saldo inicial da ficha na tela de consulta execução orçamentária
      cy.get('div[nat="ConsultaExecucaoOrcamentariaGrid"]').as("grid"); //caputra a grid
      cy.get("@grid")
        .contains("20222076") //varre procurando o elemento que contem o numero da ficha
        .parents(".ui-grid-viewport")
        .scrollTo("right", {
          easing: "linear",
          duration: 2000,
        })

        .find(".ui-grid-cell-contents")
        .as("coluna");

      cy.get("@coluna").contains("49.900,00").should("length", 1); //varre o elemento buscando o valor, eq(4) é a coluna que contem o saldo da ficha
    });
    //Valida o saldo final no rodapé da grid
    it("Consulta execução orçamentária: Valida saldo final no rodape da grid", () => {
      cy.get('div[nat="ConsultaExecucaoOrcamentariaGrid"]').as("grid"); //caputra a grid

      cy.get("@grid").find(".ui-grid-footer-cell-wrapper").as("coluna");

      cy.get("@coluna").contains("50.000,00").should("length", 1);
      //volta para o menu principal
      cy.get('img[title="Ir para menu geral"]').click().wait(2000);
    });
  }
}
export default new consultaSaldoFichaReservaDispensa();
