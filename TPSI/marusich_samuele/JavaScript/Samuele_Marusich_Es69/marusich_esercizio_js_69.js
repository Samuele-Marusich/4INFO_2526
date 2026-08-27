class Quadrato{
    constructor(lato){
        this.lato = lato
    }
    get lato(){
        return this._lato
    }
    set lato(lato){
        this._lato = lato
    }
    get area(){
        return this.lato ** 2
    }
    get perimetro(){
        return this.lato*4
    }
}