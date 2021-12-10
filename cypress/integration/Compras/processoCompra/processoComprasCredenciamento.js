
class processoComprasFaseCredenciamento {
    credenciamento(){
        describe('Acessa Tela Cadastro de requisição de compras, Valida inserção de dados', ()=> {
            it('Valida inserção de dados', () =>{
               
                //clica na aba de credenciamento
               cy.get('li[nat="Credenciamento"]').click();
               //abre modal credenciamento
               cy.get('button[nat="consultaFornecedorCotacaoFornedorGridabrirTelaDeCadastro"]').click().wait(5000);

               //informa o CNPJ do fornecedor
               cy.get('input[nat="cadastroFornecedorCotacaoFornecedor"]')
               .click()
               .type('2744987000184')
               .tab();

               //salva e fecha o modal
               cy.get('button[nat="cadastroFornecedorCotacaoCrudSalvarFechar"]')
               .click()
               .wait(5000);

           });
        });
        
        
    }
}
export default new processoComprasFaseCredenciamento();