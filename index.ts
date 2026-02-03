class GYM{
    peso:number;
    estatura:number;
    constructor(peso:number, estatura:number){
        this.peso=peso;
        this.estatura=estatura;
    }
    public IMC(): void{
        let estado;
        let imc= (this.peso/(this.estatura*this.estatura));
        if(imc< 18.5){
            estado="Bajo peso";
        }else if (imc>=18.5 && imc <=24.9){
            estado="Normal";
        }else if (imc>=25 && imc <=29.9){
            estado="Sobre peso";
        }else if(imc>=30){
            estado="Obesidad";
        }

        console.log("El IMC es de: "+imc+"y su estado es: "+estado);
//          Interpretacion (Adultos):
// Bajo peso: Menos de 18.5.
// Normal: 18.5 - 24.9.
// Sobre peso: 25.5 - 29.9.
// Obesidad 30.0 o mas
    }
}
let cliente = new GYM(105,1.76);





class Conversor{
    constructor(temp:number){
    }
    public FC():void {
        //f°-32/1.8
    }
    public CF():void {
        //c°=5/9(f°-32)
    }
    public KF():void {
        //°f=(K-273.15)/5+32
    }
    public KC():void {

    }
}
let aire = new Conversor(45);



class Instituto{
    falta:number;
    nombre:string;

constructor(falta:number, nam:string){
    this.falta=falta;
    this.nombre=nam;
    }

public seleccion() :void{
     if(this.falta==1){
        
    }

}
}
