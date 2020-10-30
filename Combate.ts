import prompt from 'prompt-sync';
let entrada = prompt()

class Personagens{
    constructor(
        public nome: string, 
        public arma: string,
        public nivel: number,
        public dano: number,
        public vida: number) {}
}

var lutador0: Personagens = new Personagens('Kratos', 'Machado', 1, 20, 150);
var lutador1: Personagens = new Personagens('Steve','Espada', 1, 15, 200);

let num: number; num = 0;

while(num != 9){
    console.log('+------------------------+');
    console.log('|          Menu          |');
    console.log('|       1-Treinar        |');
    console.log('|       2-Batalhar       |');
    console.log('|       9-Sair           |');
    console.log('+------------------------+');
    
    num = +entrada('Opção: ')
    
}