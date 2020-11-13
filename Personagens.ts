import { Form } from "./Form";
export class Personagens{
    protected _nome: string;
    protected _nivel: number;
    protected _dano: number;
    protected _vida: number;
    
    constructor(nome: string) {
        this._nome = nome;
        this._nivel = 1;
        this._dano = Form.aleatorizar(1, 15);
        this._vida = Form.aleatorizar(50, 100);
    }
}
