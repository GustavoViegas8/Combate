//Classe
class Personagens{
    nome: string = '';
    nivel: number = 1;
    arma: string = '';
    dano: number = 5;
    vida: number = 150;
}

var lutador: Personagens;
lutador = new Personagens()
console.log('Lutador:', lutador);