import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class ExcluirCliente extends Processo {
    processar(): void {
        console.log('Exclusão de cliente')
        
        let nome = this.entrada.receberTexto('Digite o nome do cliente que deseja excluir: ')
        let cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nome)

        if (!cliente) {
            console.log('Cliente não encontrado!')
            return
        }

        if (cliente.Dependentes.length > 0) {
            console.log('Não é possível excluir um titular que possui dependentes!')
            return
        }

        const index = Armazem.InstanciaUnica.Clientes.indexOf(cliente)
        if (index > -1) {
            if (cliente.Titular) {           
                cliente.Titular.removerDependente(cliente)
            }
            Armazem.InstanciaUnica.Clientes.splice(index, 1)
            console.log('Cliente excluído com sucesso!')
        }
    }
}