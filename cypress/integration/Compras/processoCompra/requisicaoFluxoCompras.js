

import requisicaoInsereDados from "../RequisicaoProdutos/requisicaoInsereDados";

class requisicaoFluxoCompras {
    requisicaoProcesoCompras(){

        describe('Cadastro de requisição - Valida inserção de dados', () =>{
            requisicaoInsereDados.reqInsereDados()
           
        });       
      
    }
}

export default new requisicaoFluxoCompras();