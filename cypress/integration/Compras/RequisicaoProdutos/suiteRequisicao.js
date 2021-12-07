
import requisicaoValidaCamposObrigatorios from "./requisicaoValidaCamposObrigatorios";
import requisicaoInsereDados from "./requisicaoInsereDados";
import requisicaoExcluiDados from "./requisicaoExcluirDados";

describe('Cadastro de requisição - Valida campos Obrigátorios', () =>{
    requisicaoValidaCamposObrigatorios.ReqvalidaCampos();
        
});

describe('Cadastro de requisição - Valida inserção de dados', () =>{
    requisicaoInsereDados.reqInsereDados()
   
});

describe('Exclui Cadastro de requisição - Valida exclusão de dados', () =>{
    requisicaoExcluiDados.reqExcluiDados();

});