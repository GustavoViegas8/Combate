import { Personagens } from "./Personagens";
import { Form } from "./Form";

export class Ranged extends Personagens {
    private _arma: string;
    private _velocidade: number;
    private _esquiva: number;

    constructor(nome: string){
        super(nome);
        this._arma = 'Arco';
        this._velocidade = Form.aleatorizar(20, 80);
        this._esquiva = Form.aleatorizar(10, 50);
        this._nivel = 1;
        this._dano = Form.aleatorizar(5, 15);
        this._vida = Form.aleatorizar(30, 70);
    }
}