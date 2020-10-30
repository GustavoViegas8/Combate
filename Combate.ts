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

    switch (num) {
        case 1:
            treino()
            break;
    
        default:
            break;
    }
}

function treino(){
    let treino: number;

    console.log('+-----------------+');
    console.log('|   Treinamento   |');
    console.log('+-----------------+');

    console.log(`Escolha um para Treinar:\n1-Kratos ${lutador0.nivel}\n2-Steve ${lutador1.nivel}\n3-Não treinar\n`);

    treino = +entrada('Opção: ')
    switch (treino) {
        case 1:
            console.log('Kratos');
            console.log('Treino bem sucedido!');
            break;
        case 2:
            console.log('Steve');
            console.log('Treino bem sucedido!');
            break;
        default:
            console.log('Ok! Saindo...');
            break;
    }
}