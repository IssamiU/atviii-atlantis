import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ListarDependenteTitular extends Processo {
    processar(): void {
        console.clear();
        console.log('Listar dependentes de um titular específico');
        const nomeTitular = this.entrada.receberTexto('Digite o nome do titular: ');

        const titular = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nomeTitular && !c.Titular);

        if (!titular) {
            console.log('Titular não encontrado. Verifique o nome e tente novamente.');
            return;
        }

        if (!titular.Dependentes || titular.Dependentes.length === 0) {
            console.log('Este titular não possui dependentes cadastrados.');
            return;
        }

        console.log(`Dependentes do titular ${titular.Nome}:`);
        titular.Dependentes.forEach(dep => {
            console.log('---------------------------');
            console.log(`Nome: ${dep.Nome}`);
            console.log(`Nome social: ${dep.NomeSocial}`);
            console.log(`Data de nascimento: ${dep.DataNascimento.toLocaleDateString()}`);
        });
        console.log('---------------------------');
    }
}