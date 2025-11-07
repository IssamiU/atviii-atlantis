import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando cadastro de dependente...');

        const nomeTitular = this.entrada.receberTexto('Digite o nome do titular ao qual o dependente será vinculado: ');
        const titular = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nomeTitular && !c.Titular);

        if (!titular) {
            console.log('Titular não encontrado. Verifique o nome e tente novamente.');
            return;
        }

        const nome = this.entrada.receberTexto('Nome do dependente: ');
        const nomeSocial = this.entrada.receberTexto('Nome social do dependente (ou vazio): ');
        const dataNascimento = this.entrada.receberData('Data de nascimento do dependente: ');

        const dependente = new Cliente(nome, nomeSocial, dataNascimento);


        dependente.Titular = titular;
        titular.adicionarDependente(dependente);


        try {
            if (titular.Endereco) {
                dependente.Endereco = titular.Endereco;
            }
        } catch { }

        const cadastroDocs = new CadastrarDocumentosCliente(dependente);
        cadastroDocs.processar();

        Armazem.InstanciaUnica.Clientes.push(dependente);

        console.log('Dependente cadastrado com sucesso!');
    }
}