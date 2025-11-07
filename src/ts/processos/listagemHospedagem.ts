import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Hospedagem from "../modelos/hospedagem"
import ImpressorCliente from "../impressores/impressorCliente"
import ImpressorAcomodacao from "../impressores/impressorAcomodacao"

export default class ListagemHospedagem extends Processo {
    private hospedagens: Hospedagem[]

    constructor() {
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
    }

    processar(): void {
        console.clear()
        console.log("\n--- Listagem de Hospedagens ---")
        
        if(this.hospedagens.length === 0) {
            console.log("\nNenhuma hospedagem registrada.")
            return
        }

        this.hospedagens.forEach((hospedagem, index) => {
            console.log(`\n========== Hospedagem ${index + 1} ==========`)
            console.log(`\nTitular:`)
            let impressorCliente = new ImpressorCliente(hospedagem.Titular)
            console.log(impressorCliente.imprimir())
            console.log(`\nAcomodação:`)
            let impressorAcomodacao = new ImpressorAcomodacao(hospedagem.Acomodacao)
            console.log(impressorAcomodacao.imprimir())
            console.log(`\nData de Cadastro: ${hospedagem.DataCadastro.toLocaleDateString()}`)
            console.log(`=====================================`)
        })

        console.log(`\nTotal de hospedagens: ${this.hospedagens.length}`)
    }
}