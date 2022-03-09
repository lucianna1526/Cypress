class cadastroPessoaFolha {
    cadastroPessoaDadosPrincipais() {
        it('Acessa Modulo GESTÃO PESSOAL e SubModulo FOLHA DE PAGAMENTO', () => {
            cy.moduloMenu('GESTÃO PESSOAL', 'Pessoa', {'subModulo':'folhaPagamentoButton'});
        });

        it('Valida campos obrigatórios', () => {
            cy.get('button[nat="cadastroPessoaFolhaCrudSalvar"]').click();
            //valida mensagem 'Por favor, verifique os campos inválidos'
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Por favor, verifique os campos inválidos');
            cy.get('.md-toast-content>button').click();

             //Nome Pessoa             
             cy.get('input[nat="cadastroPessoaFolhaNome"]').should('have.value', '');

             //Data Nascimento             
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]').should('have.value', '');

              //Sexo
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]').should('have.value', '');
              
              //Estado Civil
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]').should('have.value', '');

              //Grau de Instrução
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]').should('have.value', '');

               //Nome da Mãe             
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]').should('have.value', '');

        });

        it('Valida inserção de dados no Cadastro de Pessoa', () => {            
            //Nome Pessoa
            cy.get('input[nat="cadastroPessoaFolhaNome"]').click().type('PESSOA TESTE AUTOMAÇAO', {Delay: 10});
            cy.get('input[nat="cadastroPessoaFolhaNome"]').should('have.value', 'PESSOA TESTE AUTOMAÇAO');

            //Numero PIS
            cy.get('input[nat="cadastroPessoaFolhaNumeroPis"]').click().type('11107207244', {Delay: 10});
            cy.get('input[nat="cadastroPessoaFolhaNumeroPis"]').should('have.value', '11107207244');

            //Numero CPF
            cy.get('input[nat="cadastroPessoaFolhaCpf"]').click().type('92175457087', {Delay: 10});
            cy.get('input[nat="cadastroPessoaFolhaCpf"]').should('have.value', '92175457087');

             //Data Nascimento
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]').click().type('01/01/2000', {Delay: 10});
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]').should('have.value', '01/01/2000');

              //Sexo
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]').click().type('Masculino {enter}', {Delay: 10});
              
              //Estado Civil
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]').click().type('Casado {enter}', {Delay: 10});

              //Grau de Instrução
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]').click().type('Ensino Médio Incompleto  {enter}', {Delay: 10});

               //Nome da Mãe
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]').click().type('NOME MAE TESTE', {Delay: 10});
             cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]').should('have.value', 'NOME MAE TESTE');

              //Nacionalidade
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisNacionalidadeSelect"]').click().type('10 - Brasileiro {enter}', {Delay: 10});
              
              //Naturalidade
              cy.get('[nat="cadastroPessoaFolhaDadosPessoaisNaturalidadePesquisa"]').click();
              //Informa codido da cidade na tela de pesquisa de cidade
              cy.get('[label="Código"] > .pd-input-text').click().type('5305521', {Delay: 10});
              //Clica no botão pesquisar
              cy.get('[nat="Pesquisar"]').click();
              //Carrega item pesquisado
              cy.get('button[nat="botaoCarregar"]').click();
              
               //Clica no botão SALVAR
             cy.get('button[nat="cadastroPessoaFolhaCrudSalvar"]').click();                           
        });       
    }
}

export default new cadastroPessoaFolha();