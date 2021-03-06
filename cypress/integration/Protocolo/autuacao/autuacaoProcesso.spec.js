class autuacaoProcesso{
    cadastroProcessoCapa(){
        //it acessa modulo protocolo tela autuação
        it("PROTOCOLO: Autuação / processo", () => {
            cy.moduloMenu('PROTOCOLO','Autuação / processo');
        });
        it("Interessado - Valida Auto Complete", () => {
            cy.autoComplete('[nat="cadastroProcessoDadosCadastroInteressadoDescricao"]','CADASTRO PESSOA TESTE AUTOMAÇAO');
            
        });
        it("Interessado - Valida Modal Pesquisa", () => {
            
            cy.get('button[nat="cadastroProcessoDadosCadastroInteressadoPesquisa"]',{timeout:10000}).click();
            //aguarda modal carregar grid
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});

            cy.get('input[nat="pesquisaFornecedorRazaoSocial"]').wait(1000).type('CADASTRO PESSOA TESTE AUTOMAÇAO');
            cy.get('button[nat="Pesquisar"]').click();

            //aguarda grid carregar
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();

            //fecha modal
            cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true});
            
        });
        it('Assunto - Valida Auto Complete', () => {
            cy.autoComplete('[nat="cadastroProcessoDadosCadastroAssuntoDescricao"]','NOTA FISCAL');
        });
        it('Assunto - Valida Modal Pesquisa', () => {
            cy.get('button[nat="cadastroProcessoDadosCadastroAssuntoPesquisa"]').click();
            cy.get('div[nat="pesquisaAssuntoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('input[nat="pesquisaAssuntoDescricao"]').wait(1000).type('NOTA FISCAL');
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat="pesquisaAssuntoGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });
        it('SubAssunto - Valida Auto COmplete', () => {            
            cy.autoComplete('[nat="cadastroProcessoDadosCadastroSubassuntoDescricao"]','NOTA FISCAL');
        });
        it('SubAssunto - Valida Modal Pesquisa', () => {
            cy.get('button[nat="cadastroProcessoDadosCadastroSubassuntoPesquisa"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('input[nat=""]').eq(1).type('NOTA FISCAL');
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat=""]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();
        });
        it('Origem - Valida Auto Complete', () => {
            cy.autoComplete('[nat="cadastroProcessoDadosCadastroOrigemDescricao"]','PROTOCOLO GERAL');
        });
        it('Origem - Valida Modal Pesquisa', () => {
            cy.get('button[nat="cadastroProcessoDadosCadastroOrigemPesquisa"]').click();
            cy.get('div[nat="pesquisaOrigemGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('input[nat="pesquisaOrigemDescricao"]').wait(1000).type('PROTOCOLO GERAL');
            cy.get('button[nat="Pesquisar"]').click();
            cy.get('div[nat="pesquisaOrigemGrid"]>div>div>div>div[class="ui-grid-canvas"]>div>div', {timeout: 60000});
            cy.get('button[nat="botaoCarregar"]').first().click();

        });
        it('Grava Capa', () => {
            cy.get('textarea[nat="cadastroProcessoDadosCadastroObservacao"]',{timeout:10000}).type('AUTUAÇAO DE PROCESSO FEITO PELA AUTOMAÇAO');
            cy.get('button[nat="cadastroProcessoCrudSalvar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:60000}).should('contain', 'Registro salvo com sucesso!');
        });

    }
    anexarDocumento(){
        /*it("PROTOCOLO: Autuação / processo", () => {
            cy.moduloMenu('PROTOCOLO','Autuação / processo');
        });*/
        it("Anexar Documento", () => {
            //cy.get('button[nat="cadastroProcessoCrudLimpar"]',{timeout:10000}).click();
            //cy.get('button[nat="cadastroProcessoProcessoAnterior"]',{timeout:10000}).click();
            cy.get('[nat="Anexos do processo"]',{timeout:10000}).click();
            cy.get('[nat="cadastroProcessoAnexoGridabrirTelaDeCadastro"]',{timeout:10000}).click();
            //cy.get('input[nat="cadastroAnexoProcessoArquivoUploadInput"]',{timeout:10000}).attachFile('testeDePDF.pdf');
            /*cy.get('button[nat="cadastroAnexoProcessoArquivoUploadBotaoUpload"]')
            .parent()
            .prev()
            .find('input')
            .attachFile('fixtures/testeDePDF.pdf');*/
        });
        it('Anexar Documento -> teste em branco', () => {
            cy.get("body").then(($body) => {
                if ($body.find('#pdBtnAlertOK').length > 0) {
                    cy.get('#pdBtnAlertOK').first().click().wait(1000);
                    //cy.wait('@getModulo');
                }
            });
            cy.get('button[nat="cadastroAnexoProcessoCrudSalvar"]',{timeout:10000}).click();
            //valida mensagem de erro
            cy.get('.md-toast-text',{timeout:1000}).should('contain', 'Preencha os campos obrigatórios');
            cy.get('.md-toast-content>button').click();
            cy.wait(5000);
            //fecha modal
            cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true});
        });
        it('Anexar Documento -> teste com arquivo', () => {
            cy.get("body").then(($body) => {
                if ($body.find('#pdBtnAlertOK').length > 0) {
                    cy.get('#pdBtnAlertOK').first().click().wait(1000);
                    //cy.wait('@getModulo');
                }
            });
            cy.get('input[nat="cadastroAnexoProcessoArquivoUploadInput"]',{timeout:10000}).attachFile('testeDePDF.pdf');
        });
        it("Anexo -> Controle de retirada Fisica -> Abre Modal", () => {
            cy.get("body").then(($body) => {
                if ($body.find('#pdBtnAlertOK').length > 0) {
                    cy.get('#pdBtnAlertOK').first().click().wait(1000);
                    //cy.wait('@getModulo');
                }
                if ($body.find('[ng-click="fechar()"]').length > 0) {
                    cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true,multiple: true});
                    //cy.wait('@getModulo');
                }
            });
            
            
            //marca todos os radio box da grid
            cy.get('div[nat="cadastroProcessoAnexoGrid"]').find('.ui-grid-viewport').find('.ui-grid-selection-row-header-buttons').first().click({force:true});
            cy.get('[nat="cadastroProcessoAnexoRetiradaFisicaAnexoGridabrirTelaDeCadastro"]',{timeout:10000}).click();
            
        });
        it("Anexo -> Controle de retirada Fisica -> Campos Obrigatórios", () => {
            cy.get('button[nat="CadastroRetiradaFisicaAnexoProcessoCrudSalvar"]',{timeout:100000}).click();
            //valida mensagem de erro
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Por favor, verifique os campos inválidos');
            cy.get('.md-toast-content>button').click();
            cy.wait(5000);
        });
        it("Anexo -> Controle de retirada Fisica -> Salvar", () => {
            cy.autoComplete('input[nat="CadastroRetiradaFisicaAnexoProcessoSolicitanteDescricao"]','CADASTRO PESSOA TESTE AUTOMAÇAO');
            cy.autoComplete('input[nat="CadastroRetiradaFisicaAnexoProcessoIdCadsetDescricao"]','PROCURADORIA');
            cy.get('[nat="CadastroRetiradaFisicaAnexoProcessoDataRetiradaBotaoPopUp"]').click();
            cy.get('.uib-datepicker-current').click();
            cy.get('textarea[nat="CadastroRetiradaFisicaAnexoProcessoMotivo"]').type('AUTUAÇAO DE PROCESSO FEITO PELA AUTOMAÇAO');
            cy.get('button[nat="CadastroRetiradaFisicaAnexoProcessoCrudSalvar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it("Anexo -> Controle de retirada Fisica -> Aleração", () => {
            
            cy.get('textarea[nat="CadastroRetiradaFisicaAnexoProcessoMotivo"]').clear().type('ALTERAÇÃO AUTUAÇAO DE PROCESSO FEITO PELA AUTOMAÇAO');
            cy.get('button[nat="CadastroRetiradaFisicaAnexoProcessoCrudSalvar"]').click();
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it("Anexo -> Controle de retirada Fisica -> Exclusão", () => {
            
            cy.get('button[nat="CadastroRetiradaFisicaAnexoProcessoCrudExcluir"]').click();
            //confirma exclusão
            cy.get('button[nat="pdBtnAlertOKSim"]').click();
            
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro excluído com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it("Anexo -> Itens do anexo -> Acesso", () => {
            cy.get("body").then(($body) => {
                if ($body.find('#pdBtnAlertOK').length > 0) {
                    cy.get('#pdBtnAlertOK').first().click().wait(1000);
                    //cy.wait('@getModulo');
                }
                if ($body.find('[ng-click="fechar()"]').length > 0) {
                    cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true,multiple: true});
                    //cy.wait('@getModulo');
                }
            });
            cy.get('[nat="cadastroProcessoAnexoItemAnexoGridabrirTelaDeCadastro"]',{timeout:10000}).click();
        });
        it("Anexo -> Itens do anexo -> Campos Obrigatórios", () => {
            cy.get('div[nat="CadastroAnexoProcessoItemTipoSelect"]>ul>li>div',{timeout:10000});
            cy.get('div[nat="CadastroAnexoProcessoItemTipoSelect"]').click();
            cy.get('button[nat="CadastroAnexoProcessoItemCrudSalvar"]').click();
            //valida mensagem de erro
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Por favor, verifique os campos inválidos');
            cy.get('.md-toast-content>button').click();
            cy.wait(5000);
        });
        it("Anexo -> Itens do anexo -> Salvar", () => {
            cy.get('div[nat="CadastroAnexoProcessoItemTipoSelect"]>ul>li>div',{timeout:10000});
            cy.get('div[nat="CadastroAnexoProcessoItemTipoSelect"]')
                .click()
                .wait(100)
                .type('Amostras')
                .wait(100)
                .type('{enter}');
            cy.get('input[nat="CadastroAnexoProcessoItemPaginaInicial"]').type('1');
            cy.get('input[nat="CadastroAnexoProcessoItemPaginaFinal"]').type('10');
            cy.get('button[nat="CadastroAnexoProcessoItemCrudSalvar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it("Anexo -> Itens do anexo -> Alteração", () => {
            cy.get('input[nat="CadastroAnexoProcessoItemPaginaInicial"]').type('11');
            cy.get('input[nat="CadastroAnexoProcessoItemPaginaFinal"]').type('20');
            cy.get('button[nat="CadastroAnexoProcessoItemCrudSalvar"]').click();
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
        it("Anexo -> Itens do anexo -> Exclusão", () => {
            cy.get('button[nat="CadastroAnexoProcessoItemCrudExcluir"]').click();
            //confirma exclusão
            cy.get('button[nat="pdBtnAlertOKSim"]').click();
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro excluído com sucesso!');
            cy.get('.md-toast-content>button').click();
            cy.get("body").then(($body) => {
                
                if ($body.find('[ng-click="fechar()"]').length > 0) {
                    cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true,multiple: true});
                    //cy.wait('@getModulo');
                }
            });
        });


        it('Apaga Anexo', () => {
            cy.get("body").then(($body) => {
                if ($body.find('#pdBtnAlertOK').length > 0) {
                    cy.get('#pdBtnAlertOK').first().click().wait(1000);
                    //cy.wait('@getModulo');
                }
            });
            cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true});
            //percorre a lista clicando em todos os botões de apagar
            cy.get('button[nat="botaoExcluir"]',{timeout:10000})
            .each(($el, index, $list) => {
                $el.click();
                cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).first().click();
                //valida mensagem de exclusao
                cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro excluído com sucesso!');
              });
        });
    }
    dadosTCMGoias(){
        
        it("Acessar Aba TCM/GO", () => {
            cy.get('[nat="Dados TCM/GO"]',{timeout:10000}).click();
            cy.get('button[nat="cadastroProcessoDadosTcmGridabrirTelaDeCadastro"]',{timeout:10000}).click();           
        });
        it("Acessar Aba TCM/GO -> Valida Campos em Branco", () => {
            cy.get('button[nat="CadastroTcmgoProcessoCrudSalvar"]',{timeout:10000}).click();
            //valida mensagem de erro
            cy.get('[nat="pdBtnAlertOKBody"]',{timeout:10000}).should('contain', 'Favor preencher o campo: Processo TCM.\nFavor preencher o campo: Ano.\n');
            cy.get('[nat="pdBtnAlertOK"]',{timeout:10000}).click();
        });
        it("Acessar Aba TCM/GO -> Valida Gravação", () => {
            cy.get('input[nat="CadastroTcmgoProcessoProcessoTcm"]').type('123')
            cy.get('button[nat="CadastroTcmgoProcessoAno BotaoReadonly"]').click();
            cy.get('.uib-datepicker-current',{timeout:10000}).click();
            cy.get('input[nat="CadastroTcmgoProcessoAssunto"]').type('Teste Automação');
            cy.get('input[nat="CadastroTcmgoProcessoResolucao"]').type('123');
            cy.get('input[nat="CadastroTcmgoProcessoDecisao"]').type('Favorável');
            cy.get('input[nat="CadastroTcmgoProcessoNumeroRemessa"]').type('123');
            cy.get('button[nat="CadastroTcmgoProcessoDataRetornoBotaoPopUp"]').click();
            cy.get('.uib-datepicker-current',{timeout:10000}).click();
            cy.get('textarea[nat="CadastroTcmgoProcessoObservacao"]').type('Teste Automático');

            
            cy.get('button[nat="CadastroTcmgoProcessoCrudSalvar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button',{timeout:10000}).click();
            
        });
        it("Acessar Aba TCM/GO -> Valida Alteração", () => {
            
            cy.get('textarea[nat="CadastroTcmgoProcessoObservacao"]').clear().type('Teste Automático de alteração');

            
            cy.get('button[nat="CadastroTcmgoProcessoCrudSalvar"]').click();
            //valida mensagem de sucesso
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button',{timeout:10000}).click();
        });
        it("Acessar Aba TCM/GO -> Valida Exclusão", () => {
            cy.get('button[nat="CadastroTcmgoProcessoCrudExcluir"]').click();
            //confirma exclusão
            cy.get('button[nat="pdBtnAlertOKSim"]').click();
            cy.get('.md-toast-text',{timeout:10000}).should('contain', 'Registro excluído com sucesso!');
            cy.get('.md-toast-content>button').click();
            //fecha modal
            cy.get('[ng-click="fechar()"]',{timeout:10000}).click({force:true});
        });
    }
    enderecoCorrespondencia(){
        it("Acessar Aba Endereço correspondência", () => {
            cy.get('[nat="Endereço correspondência"]',{timeout:10000}).click();
        });
        it('Endereço correspondência -> Auto Complete Logradouro', () => {
            cy.autoComplete('input[nat="cadastroProcessoEnderecoCorrespondenciaLogradouroDescricao"]','FEBRONIO MARTINS ARRRUDA');
        });
        it.skip('Endereço correspondência -> Pesquisa Modal Logradouro (Sem nat)', () => {
            //teste não realizado por falta de nat
        });
        it('Endereço correspondência -> Auto Complete Bairro', () => {
            cy.autoComplete('input[nat="cadastroProcessoEnderecoCorrespondenciaBairroCompleteDescricao"]','RESIDENCIAL JARDIM PROGRESSO');
        });
        it.skip('Endereço correspondência -> Pesquisa Modal Bairro (Sem nat)', () => {
            //teste não realizado por falta de nat
        });
        it('Endereço correspondência -> Auto Complete Cidade', () => {
            cy.autoComplete('input[nat="cadastroProcessoEnderecoCorrespondenciaCidadeDescricao"]','GOIANIA','GOIANIA - GO');
        });
        it.skip('Endereço correspondência -> Pesquisa Modal Cidade (Sem nat)', () => {
            //teste não realizado por falta de nat
        });
        it("Grava dados do endereço correspondência", () => {
            cy.get('button[nat="cadastroProcessoCrudSalvar"]').click();
            cy.get('button[nat="pdBtnAlertOKSim"]',{timeout:10000}).click();
            
            cy.get('.md-toast-text',{timeout:60000}).should('contain', 'Registro salvo com sucesso!');
            cy.get('.md-toast-content>button').click();
        });
    }
}
export default new autuacaoProcesso();