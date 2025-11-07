import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    private acomodacao: Acomodacao
    private titular: Cliente
    private dataCadastro: Date

    constructor(titular: Cliente, acomodacao: Acomodacao){
        this.titular = titular
        this.acomodacao = acomodacao
        this.dataCadastro = new Date()
    }

    public get Acomodacao(): Acomodacao {
        return this.acomodacao
    }

    public get Titular(): Cliente {
        return this.titular
    }

    public get DataCadastro(): Date {
        return this.dataCadastro
    }
}