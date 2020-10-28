"use strict";
//Classe
var Personagens = /** @class */ (function () {
    function Personagens() {
        this.nome = '';
        this.nivel = 1;
        this.arma = '';
        this.dano = 5;
        this.vida = 150;
    }
    return Personagens;
}());
var lutador;
lutador = new Personagens();
console.log('Lutador:', lutador);
