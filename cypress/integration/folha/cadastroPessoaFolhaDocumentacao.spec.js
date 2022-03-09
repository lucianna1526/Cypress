class cadastroPessoaFolhaDocumentacao {
    documentacao() {
        it('Cadastro de Pessoa/Documentação', () => {
            //Acessa aba DOCUMENTAÇAO
            cy.get('li[nat=cadastroPessoaFolhaTabsFolhaDocumentação]').click();

            //Nº da identidade (RG)
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoNumeroIdentidade"]').type('1234');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoNumeroIdentidade"]', {timeout:3000}).should('have.value', '1234');

            //Data de Emissão da Identidade (RG)
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoDataEmissaoRg"]').type('01/01/2010');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoDataEmissaoRg"]', {timeout:3000}).should('have.value', '01/01/2010');

            //Orgao expedidor (RG)
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoOrgaoExpedidorRg"]').type('SSP');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoOrgaoExpedidorRg"]', {timeout:3000}).should('have.value', 'SSP');

            //UF (RG)
            cy.get('[nat="cadastroPessoaFolhaDocumentacaoUfOrgaoExpedidorRgSelect"]').type('GO {downArrow}', {timeout:4000}).type('{enter}');

            //Titulo de Eleitor
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoNumetoTitulo"]').type('123456789');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoNumetoTitulo"]', {timeout:3000}).should('have.value', '123456789');

            //Data de Emissão do Titulo de Eleitor
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoDataExpedicaoTitulo"]').type('01/01/2010');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoDataExpedicaoTitulo"]', {timeout:3000}).should('have.value', '01/01/2010');

            //Zona Eleitoral
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoZonaTitulo"]').type('123');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoZonaTitulo"]', {timeout:3000}).should('have.value', '123');

            //Secao Eleitoral
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoSecaoTitulo"]').type('123');
            cy.get('input[nat="cadastroPessoaFolhaDocumentacaoSecaoTitulo"]', {timeout:3000}).should('have.value', '123');

            //UF (Titulo de Eleitor)
            cy.get('[nat="cadastroPessoaFolhaDocumentacaoUfTituloSelect"]', {timeout:3000}).type('GO {downArrow}', {timeout:4000}).type('{enter}');            

            //Clica no botão SALVAR
            cy.get('button[nat="cadastroPessoaFolhaCrudSalvar"]', {timeout:3000}).click();

            //Informações profissionais
            //Clica no botao ADICIONAR
            cy.get('button[nat="cadastroPessoaFolhaDocumentacaoRegistroProfissionalGridabrirTelaDeCadastro"]').click();

            //Tipo do conselho
            cy.get('[nat="cadastroPessoaRegistroProfissionalTipoConselhoSelect"]').click().type(' OAB - Ordem dos Advogados do Brasil {downArrow}{enter}');

            //Numero de inscricao
            cy.get('input[nat="cadastroPessoaRegistroProfissionalNumeroInscricao"]').type('2022');
            cy.get('input[nat="cadastroPessoaRegistroProfissionalNumeroInscricao"]').should('have.value', '2022');

            //UF conselho
            cy.get('[nat="cadastroPessoaRegistroProfissionalUfConselhoSelect"]').click().type('GO {downArrow}', {timeout:4000}).type('{enter}');

            //Clica em ADICIONAR E SAIR
            cy.get('button[nat="cadastroPessoaRegistroProfissionalCrudSalvarFechar"]').click();             
            
        });

    }
}

export default new cadastroPessoaFolhaDocumentacao();