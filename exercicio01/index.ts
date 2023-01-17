/* EXERCICIO 1 criar 3 classes de objetos
 1º Classe de herois da Marvel
 2º Classe de Vingadores
 3º Classe de Vingadores que morreram no cinema
  Metodos: voar, Correr muito rapido, Bater, Lutar
  Atributos: Teletransporte, Se regenerar, Super Força, Imortalidade

  Construir atraveis do metodo Construtor. 
*/

class heroisMarvel{
    teletransporte: boolean;//boolean: verdadeiro ou falso
    regenerar: boolean;//boolean: verdadeiro ou falso
    superForça: boolean;//boolean: verdadeiro ou falso
    imortalidade:boolean;//boolean: verdadeiro ou falso

    constructor(t:boolean, r:boolean, sf: boolean, i: boolean){
        this.teletransporte = t;
        this.regenerar = r;
        this.superForça = sf;
        this.imortalidade = i;
    }
    exibirPoder(): void {
        console.log(`O heroi tem o poder de se teletransportar ${this.teletransporte}, de se regenerar ${this.regenerar}, de super força ${this.superForça}, de imortalidade ${this.imortalidade}`)
    }
    
}
let heroismarvel = new heroisMarvel(true, true, true, true)
heroismarvel.exibirPoder();

class Vingadores extends heroisMarvel{

}
class vingadoreMortos extends Vingadores{

}