
import requisicaoValidaCamposObrigatorios from "./processoCompraValidaCamposObrigatorios";
import requisicaoInsereDados from "./processoCompraInsereDados";
import requisicaoExcluiDados from "./processoCompraExcluirDados";
import processoComprasJulgamento from "./processoCompraJulgamento";
import processoComprasAutorizacao from "./processoCompraAutorizacao";
import processoCompraInsereDados from "./processoCompraInsereDados";
class suiteProcessoCompra {
    suite() {

        /*
        describe('Cadastro de requisição - Valida campos Obrigátorios', () =>{
            requisicaoValidaCamposObrigatorios.ReqvalidaCampos();
                
        });*/
        
        describe('Cadastro de requisição - Valida inserção de dados', () =>{
            processoCompraInsereDados.processoCompras();
           
        });
        
       /* describe('Processo de compra - julgamento', () =>{
        
            processoComprasJulgamento.procComprasJulgamento();   
        });
        
        describe('Processo de compra - Autorização', () =>{
        
            processoComprasAutorizacao.procComprasAutorizacao();   
        });*/
        
        /*
        describe('Exclui Cadastro de requisição - Valida exclusão de dados', () =>{
            requisicaoExcluiDados.reqExcluiDados();
        
        });
        
        */
    }
}

export default new suiteProcessoCompra();