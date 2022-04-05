import { formatedDate2PtBR } from "../../../Utils/helpers";

class processoComprasDispensaRequisicaoSemReserva {
  requisicaoSemReserva() {
    it("COMPRAS E LICITAÇÕES: Requisição de compras", () => {
      cy.moduloMenu("COMPRAS E LICITAÇÕES", "Requisição de compras");
    });

    it("Acessa Tela Cadastro de requisição de compras", () => {
      //Acessa modulo compras e aguarda 5 segundos

      //Data da Requisição
      cy.get('input[nat="cadastroRequisicaoComprasData"]', { timeout: 60000 })
        .dblclick()
        .type(formatedDate2PtBR());

      cy.intercept("**/rest/gestaoController/consultarCodigoDescricao").as(
        "consultarCodigoDescricao"
      );
      //Organograma
      cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisOrganograma"]')
        .clear()
        .wait(500)
        .type("19.1901.0034.2139")
        .tab()
        .wait(500);
      cy.wait("@consultarCodigoDescricao");
      //Subgrupo
      cy.get(
        'input[nat="cadastroRequisicaoComprasDadosPrincipaisSubGrupoDescricao"]'
      )
        .click()
        .type("MATERIAL DE PROCESSAMENTO DE DADOS")
        .wait(2000)
        .type("{enter}");
      //Ficha
      cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFicha"]')
        .click()
        .type("20222076")
        .type("{enter}")
        .tab();
      //Origem do recurso
      cy.get(
        '[nat="cadastroRequisicaoComprasDadosPrincipaisOrigemRecursoSelect"]'
      )
        .click()
        .type("{enter}");

      cy.focused().tab();
      //Fonte
      cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisFonte"]', {
        timeout: 5000,
      }).click();
      cy.focused().tab();

      //Detalhamento da Fonte
      cy.get(
        'input[nat="cadastroRequisicaoComprasDadosPrincipaisDetalhamentoFonte"]',
        { timeout: 5000 }
      )
        .click()
        .type("10000")
        //.wait(3000)
        .click()
        .type("{enter}");

      //Solicitante
      cy.get(
        'input[nat="cadastroRequisicaoComprasDadosPrincipaisSolicitante"]'
      ).type("SOLICITANTE AUTOMAÇÃO");

      //Processo
      cy.get('input[nat="cadastroRequisicaoComprasDadosPrincipaisProcesso"]')
        .click()
        .type("2022014911", { timeout: 5000 })
        .type("{enter}");
      //Salvar Button Capa
      cy.get(
        'button[nat="cadastroRequisicaoComprasCrudSalvar"]',
        {
          timeout: 5000,
        },
        { force: true }
      ).click();

      //valida se a nota de empenho foi salva com sucesso
      cy.get(".md-toast-text", { timeout: 5000 }).should(
        "contain",
        "Registro salvo com sucesso!"
      );
      cy.get(".md-toast-content>.md-action", { timeout: 5000 }).click();

      //Aguarda 5 segundos
      cy.wait(5000);
    });

    //**************Valida inserção de produto na requisição**************/
    it("Insere Produto na Requisição", () => {
      //Informa o Produto
      cy.wait(5000);
      cy.get('input[nat="cadastroItemRequisicaoComprasProduto"]', {
        timeout: 10000,
      })
        .type(2829875)
        .type("{enter}")
        .wait(1000);
      //Informa Quantidade Pedida
      cy.get('input[nat="cadastroItemRequisicaoComprasQtdPedida"]')
        .type("1")
        .tab()
        .wait(1000);
      //Informa Valor Unitário
      cy.get('input[nat="cadastroItemRequisicaoComprasValorUnitario"]')
        .type("200,00")
        .wait(100)
        .tab()
        .wait(1000);
      //Informa Origem do Valor de Referência
      cy.get('[nat="cadastroItemRequisicaoComprasOrigemValorReferenciaSelect"]')
        .click()
        .type("Cotação própria realizada no mercado")
        .type("{enter}");
      //Clica no botão ADICIONAR E SAIR
      cy.get('button[nat="cadastroItemRequisicaoComprasCrudSalvarFechar"]')
        .click()
        .wait(1000);
      //Enviar e Liberar
      cy.get('button[nat="cadastroRequisicaoComprasEnviarLiberar"]')
        .click()
        .wait(1000);

      //Valida envio da requisição
      cy.get(".md-toast-text").should(
        "contain",
        "Requisição enviada e liberada com sucesso!"
      );
    });
  }
}
export default new processoComprasDispensaRequisicaoSemReserva();
