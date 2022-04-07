import {formatedDate2PtBR} from '../../Utils/helpers'

class requisicaoMateriaisDiversos {
    CadastroRequisicaoMateriaisDiversos() {
        it("Compras: Cadastro de Requisicoes de Materiais Diversos", () => {
            cy.get('[nat="COMPRAS E LICITAÇÕES"]',{ timeout: 10000 })
            .click();
           
            //Acessa Pedido de Compras
            cy.get('button[nat="botaoSideMenu"]',{ timeout: 10000 }).click();
            cy.get('input[nat="buscaMenuVertical"]')
              .type("Requisições de Materiais Diversos")
              .click()
              .type("{enter}");
          });
      
      it("Inserção de dados na tela de cadastro e materiais diversos", () => {
        //salvar
        cy.get('button[nat="cadastroRequisicaoMaterialCrudSalvar"]').click()
         //Validando msg          
       cy.get(".md-toast-content", { timeout: 5000 }).should(
        "be.visible",
        "Por favor, verifique os campos inválidos"
      );
         //inserir tipo de movimentação
        cy.get(
            '[nat="cadastroRequisicaoMaterialDsReqDevSelect"]'
          )
            .click()
            .type("Independente da execução orçamentária")
            .type("{enter}");
        //inserir fornecedor
        cy.autoComplete(
            '[nat="cadastroRequisicaoMaterialCdFornecedorDescricao"]',
            "PRODATA INFORMATICA LTDA"
          );
        //inserir local de estoque    
        cy.autoComplete(
            '[nat="cadastroRequisicaoMaterialCdLocalDescricao"]',
            "FMMA - PRODUTOS"
        );
        //inserir organograma    
        cy.autoComplete(
            '[nat="cadastroRequisicaoMaterialIdCadsetDescricao"]',
            "TESTE"
          );
        //inserir requisitante
        cy.get('[label="Requisitante"] [nat="cadastroRequisicaoMaterialNrRequisicao"]').type("Requisitante Automacao")  
        //salvar
        cy.get('button[nat="cadastroRequisicaoMaterialCrudSalvar"]').click()
        //Validando msg  
        cy.get(".md-toast-content", { timeout: 5000 }).should(
            "be.visible",
            "          Registro salvo com sucesso! OK      "
          );
        //Acessa aba Produtos requisitados e atendidos
         cy.get('li[nat="cadastroRequisicaoMaterialTabsProdutos requisitados e atendidos"]').click()
        //Clicar no adicionar
        cy.get('button[nat="cadastroRequisicaoMaterialGridRequisicaoMaterialItemabrirTelaDeCadastro"]').click() 
      //clicar adicionar e sair
      cy.get('button[nat="cadastroRequisicaoMaterialItemCrudSalvar"]').click()     
      //Validando msg          
       cy.get(".md-toast-content", { timeout: 5000 }).should(
        "be.visible",
        "Por favor, verifique os campos inválidos"
      ); 
        //adicionar codigo do produto
        cy.get('input[nat="cadastroRequisicaoMaterialItemCodigoProduto"]').type("48860928").tab()
        //adicionar quantidade
        cy.get('input[nat="cadastroRequisicaoMaterialItemQuantidadeSolicitada"]').type("1")
        //clicar adicionar e sair
        cy.get('button[nat="cadastroRequisicaoMaterialItemCrudSalvarFechar"]').click()  
        //Validando msg          
        cy.get(".md-toast-content", { timeout: 5000 }).should(
          "be.visible",
          "          Registro salvo com sucesso! OK      "
        );
        cy.wait(5000)
      //Valida na grid produtos requisitados
      cy.gridClicar(
        'div[nat="cadastroRequisicaoMaterialGridRequisicaoMaterialItem"]',
        "48860928",
        ""
      ); 
      //clica no botão adicionar Produtos Atendidos 
      cy.get('button[nat="cadastroRequisicaoMaterialGridRequisicaoMaterialItemAtendidoabrirTelaDeCadastro"]').click()
      //clicando adicionar - valida campo obrigatório
      cy.get('button[nat="cadastroRequisicaoMaterialItemAtendidoCrudSalvar"]').click()     
      //Validando msg          
       cy.get(".md-toast-content", { timeout: 5000 }).should(
        "be.visible",
        "Por favor, verifique os campos inválidos"
      );
      //inserir data
      cy.get('input[nat="cadastroRequisicaoMaterialItemAtendidoData"]').click().type(formatedDate2PtBR())
      //inserir tipo
      cy.get(
      '[nat="cadastroRequisicaoMaterialItemAtendidoTipoSelect"]'
      )
        .click()
        .type("Saída/Entrada estoque")
        .type("{enter}");  
      //inserir quantidade
      cy.get('input[nat="cadastroRequisicaoMaterialItemAtendidoQuantidadeAtendida"]').type("1") 
      //clicar adicionar e sair 
      cy.get('button[nat="cadastroRequisicaoMaterialItemAtendidoCrudSalvarFechar"]').click() 
       //Validando msg          
       cy.get(".md-toast-content", { timeout: 5000 }).should(
        "be.visible",
        "          Registro salvo com sucesso! OK      "
      );
      
      

    }); 
    
    

    }}

    export default new requisicaoMateriaisDiversos();
