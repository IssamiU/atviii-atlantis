import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Acomodacao from "../modelos/acomodacao"
import Cliente from "../modelos/cliente"
import Hospedagem from "../modelos/hospedagem"

export default class CadastroHospedagem extends Processo{
    private titular: Cliente | undefined
    private acomodacoes: Acomodacao[]
    private hospedagens: Hospedagem[]
    private confirmacao: string = "Hospedagem Realizada com sucesso..."

    constructor(){
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.execucao = true
    }

    processar(): void {
        console.log("\n--- Cadastro de Hospedagem ---\n")
        
        let clientes = Armazem.InstanciaUnica.Clientes
        let titulares = clientes.filter(c => c.Titular === undefined)
        
        if(titulares.length === 0){
            console.log("Nenhum titular cadastrado.\n")
            return
        }
        
        console.log("--- Titulares Disponíveis ---")
        titulares.forEach((titular, index) => {
            console.log(`${index + 1}. ${titular.Nome}`)
        })
        console.log("-----------------------------")
        
        let nomeCliente = this.entrada.receberTexto("Digite o nome do titular desejado: ")
        
        for(let cliente of clientes){
            if(cliente.Titular === undefined && cliente.Nome.toLowerCase() === nomeCliente.toLowerCase()){
                this.titular = cliente
                break
            }
        }

        if(!this.titular){
            console.log("Titular não encontrado com esse nome.\n")
            return
        }

        console.log(`Titular selecionado: ${this.titular.Nome}\n`)
        console.log("--- Tipos de Acomodação ---")
        
        this.acomodacoes.forEach((acomodacao, index) => {
            console.log(`${index + 1} - ${acomodacao.NomeAcomadacao}`)
        })
        console.log("-----------------------------")
        
        let opcao = this.entrada.receberNumero("Qual o tipo de acomodação deseja se hospedar? ")
        
        if(opcao >= 1 && opcao <= this.acomodacoes.length){
            let acomodacaoSelecionada = this.acomodacoes[opcao - 1]
            let novaHospedagem = new Hospedagem(this.titular, acomodacaoSelecionada)
            this.hospedagens.push(novaHospedagem)
            console.log(`\n${this.confirmacao}`)
            console.log(`Acomodação: ${acomodacaoSelecionada.NomeAcomadacao}\n`)
        } else {
            console.log("Opção inválida!\n")
        }
    }
}