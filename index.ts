class Veiculos{
    cor: string; // string: cadeia de caracteres
    ano: number;// number: numeros inteiros
    doc_ok: boolean;//boolean: verdadeiro ou falso

    constructor(c:string, a: number, d: boolean){
        this.cor = c;
        this.ano = a;
        this.doc_ok = d;
    }
    exibirDocs(): void {
        console.log(`O veiculo tem a cor ${this.cor}, ano ${this.ano} e o documento esta ${this.doc_ok}`)
    }
    
}
let veiculo = new Veiculos("verde", 2022, true)
veiculo.exibirDocs();

class Carros{

}
class Motos{

}