import { Personagens } from "./Personagens";
import { Form } from "./Form";

export class Melee extends Personagens {
    private _arma: string;
    private _forca: number;
    private _defesa: number;

    constructor(nome: string){
        super(nome);
        this._arma = 'Espada';
        this._forca = Form.aleatorizar(20, 160);
        this._defesa = Form.aleatorizar(10, 80);
        this._nivel = 1;
        this._dano = Form.aleatorizar(1, 15);
        this._vida = Form.aleatorizar(50, 100);
    }

}