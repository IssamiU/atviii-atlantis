import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Todos os dependentes de um titular específico`)
        console.log(`| 3 - Encontrar titular a partir do dependente`)
        console.log(`| 4 - Todos os dependentes de um titular específico`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
        console.log(`****************************`)
    }
}