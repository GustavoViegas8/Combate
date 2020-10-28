import prompt from 'prompt-sync';
class Personagens{
    constructor(
        public nome: string, 
        public arma: string,
        public nivel: number,
        public dano: number,
        public vida: number) {}
}

let entrada = prompt()
var lutador: Personagens = new Personagens('Kratos', 'Machado', 1, 5, 150);
console.log('Lutador:', lutador);