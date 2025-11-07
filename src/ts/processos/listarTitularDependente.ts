import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ListarTitularDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Encontrar titular a partir do dependente');
        const nomeDependente = this.entrada.receberTexto('Digite o nome do dependente: ');

        const dependente = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nomeDependente && c.Titular);

        if (!dependente) {
            console.log('Dependente não encontrado ou o cliente informado não é um dependente.');
            return;
        }

        const titular = dependente.Titular;
        console.log('Titular encontrado:');
        console.log('---------------------------');
        console.log(`Nome: ${titular.Nome}`);
        console.log(`Nome social: ${titular.NomeSocial}`);
        console.log(`Data de nascimento: ${titular.DataNascimento.toLocaleDateString()}`);
        console.log('---------------------------');
    }
}