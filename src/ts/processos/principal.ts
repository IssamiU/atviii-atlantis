import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import EditarCliente from "./editarCliente"
import ExcluirCliente from "./excluirCliente"
import CadastroHospedagem from "./cadastroHospedagem"
import ListagemHospedagem from "./listagemHospedagem"

export default class Principal extends Processo {
    constructor() {
        super()
        this.menu = new MenuPrincipal()
        this.execucao = true
    }

    processar(): void {
        while (this.execucao) {
            this.menu.mostrar()
            let opcao = this.entrada.receberNumero('Qual opção desejada? ')
            switch (opcao) {
                case 1:
                    this.processo = new TipoCadastroCliente()
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new EditarCliente()
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new TipoListagemClientes()
                    this.processo.processar()
                    break
                case 4:
                    this.processo = new ExcluirCliente()
                    this.processo.processar()
                    break
                case 5:
                    this.processo = new ListagemAcomodacoes()
                    this.processo.processar()
                    break
                case 6:
                    this.processo = new CadastroHospedagem()
                    this.processo.processar()
                    break
                case 7:
                    this.processo = new ListagemHospedagem()
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    console.log('\nAté logo!')
                    break
                default:
                    console.log('\nOpção inválida!')
            }
        }
    }
}