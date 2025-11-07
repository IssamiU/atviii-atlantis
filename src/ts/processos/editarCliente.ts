import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class EditarCliente extends Processo {
    processar(): void {
        console.log('Edição de cliente')
        
        let nome = this.entrada.receberTexto('Digite o nome do cliente que deseja editar: ')
        let cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nome)

        if (!cliente) {
            console.log('Cliente não encontrado!')
            return
        }

        console.log(`\nEditando cliente: ${cliente.Nome}`)
        console.log('Deixe em branco para manter o valor atual\n')

        let novoNome = this.entrada.receberTexto('Novo nome: ')
        if (novoNome) cliente.Nome = novoNome

        let novoNomeSocial = this.entrada.receberTexto('Novo nome social: ')
        if (novoNomeSocial) cliente.NomeSocial = novoNomeSocial

        let novaData = this.entrada.receberData('Nova data de nascimento: ')
        if (novaData) cliente.DataNascimento = novaData

        console.log('Cliente atualizado com sucesso!')
    }
}