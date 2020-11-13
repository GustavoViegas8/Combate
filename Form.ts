export class Form {
    public static aleatorizar(minimo: number, maximo: number): number{
        return minimo + Math.random() * (maximo - minimo);
    }
}