import { wait } from "@testing-library/dom";

class notaFiscalAvulsa {
    geraNotaFiscalAvulsa() {
        it('NFE ADMINISTRAÇAO: Emissao da Fiscal Eletronica Avulsa', () => {
            cy.intercept('**/rest/cidadeController/consultarCodigoDescricao')
            .as('consultarCodigoDescricao')
            cy.moduloMenu('NFE ADMINISTRAÇÃO', 'Nota fiscal eletrônica avulsa');
            cy.wait('@consultarCodigoDescricao')
        });

        it('Insere dados da nota fiscal avulsa', () => {
            cy.spanAutoComplete('Prestador','JEANDES WESLEY MARTINS 95042261168')
            
            cy.digitaSpan('CPF / CNPJ', '01.192.855/0001-24').tab();
            
            cy.validaSpan('Base cálculo', ' [não informado]  ');

            cy.intercept('**/rest/servicoCnaeController/getServicosDoCnae?codigo_cnae=4751201').as('consultarCodigoDescricao')
            //cy.digitaSpan('CNAE','4751201').tab();
            cy.spanAutoComplete('CNAE','Comercio varejista especializado de equipamentos e suprimentos de informatica')
            cy.wait('@consultarCodigoDescricao')
            
            cy.intercept('**/rest/nfeInssCapaController/getValorInss?valorNota=0').as('nfeInssCapaController')
            cy.intercept('**/rest/nfeImpostoRendaCapaController/getValorIrrf?valorNota=0').as('nfeImpostoRendaCapaController')
            cy.clicaSpan('Serviço',"0",'[role="button"]');
            
            cy.digitaSpan('Serviço', '31.01 - Serviços técnicos em edificações, eletrônica, eletrotécnica, mecânica, telecomunicações e congêneres.{enter}')
            cy.wait('@nfeInssCapaController')
            cy.wait('@nfeImpostoRendaCapaController').wait(1000)
            cy.digitaSpan('Descrição do serviço', 'Teste de serviço gerado pelo automação',"0","textarea");
            cy.digitaSpan('Valor do serviço', '100,00').tab();
            
            //Clica no botao SALVAR
            cy.get('button[nat="Salvar"]').click(); 
            
             //valida se a nota foi salva com sucesso
             cy.get('.md-toast-content',{timeout:10000}).contains('Registro salvo com sucesso!', {timeout:10000});
        });
       

        it('Valida IMPRIMI NOTA FISCAL / GERAR DUAM', () => {

            //Valida Modal de Conferencia da nota
            cy.get('.pd-tela-padrao-titulo-popup',{timeout:10000})
            .contains('Conferencia de Nota Fiscal Eletrônica Avulsa');

            //Clica no botao GERAR DUAM
            cy.get('pd-tela-padrao-footer > .md-primary').click();
            
            //valida se duam gerado com suscesso
            cy.get('.md-toast-content',{timeout:10000}).contains('Registro salvo com sucesso!', {timeout:10000});
            
            
            //Imprimi a Nota Avulsa
            cy.wait(8000);
            cy.get('button[ng-click="vm.imprimirNotaAvulsa()"]').click(); 

            //Cilca em Imprimir Duam
            cy.get('button[ng-click="vm.imprimirDuam()"]').click();

            //Valida Modal Informar data de pagamento (DUAM)
            cy.get('.pd-tela-padrao-titulo-popup',{timeout:10000})
            .contains('Informar a data de pagamento');

            //Imprimi o DUAM
            cy.get('[ng-click="vm.imprimir()"]').click();
            
        });

        
    }
}

export default new notaFiscalAvulsa();