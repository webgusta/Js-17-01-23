/* EXERCICIO 1 criar 3 classes de objetos
 1º Classe de herois da Marvel
 2º Classe de Vingadores
 3º Classe de Vingadores que morreram no cinema
  Metodos: voar, Correr muito rapido, Bater, Lutar
  Atributos: Teletransporte, Se regenerar, Super Força, Imortalidade

  Construir atraveis do metodo Construtor.
*/
var heroisMarvel = /** @class */ (function () {
    function heroisMarvel(t, r, sf, i) {
        this.teletransporte = t;
        this.regenerar = r;
        this.superForça = sf;
        this.imortalidade = i;
    }
    heroisMarvel.prototype.exibirPoder = function () {
        console.log("O heroi tem o poder de se teletransportar ".concat(this.teletransporte, ", de se regenerar ").concat(this.regenerar, ", de super for\u00E7a ").concat(this.superForça, ", de imortalidade ").concat(this.imortalidade));
    };
    return heroisMarvel;
}());
var heroismarvel = new heroisMarvel(true, true, true, true);
heroismarvel.exibirPoder();
var Vingadores = /** @class */ (function () {
    function Vingadores() {
    }
    return Vingadores;
}());
var vingadoreMortos = /** @class */ (function () {
    function vingadoreMortos() {
    }
    return vingadoreMortos;
}());
