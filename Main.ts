import { Personagens } from "./Personagens";
import prompt from 'prompt-sync';
import { Melee } from "./Melee";
import { Ranged } from "./Ranged";
let entrada = prompt()

var melee: Personagens = new Melee('Kratos');
var ranged: Personagens = new Ranged('Eduardo Pool Party');

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
        case 2:
            console.log('+-------------------+');
            console.log('|      Batalha      |');
            console.log('+-------------------+');


        default:
            break;
    }
}

function treino(){
    let treino: number;

    console.log('+-----------------+');
    console.log('|   Treinamento   |');
    console.log('+-----------------+');

    console.log(`Escolha um para Treinar:\n1-Kratos ${Melee.nivel}\n2-Steve ${lutador1.nivel}\n3-Não treinar\n`);

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