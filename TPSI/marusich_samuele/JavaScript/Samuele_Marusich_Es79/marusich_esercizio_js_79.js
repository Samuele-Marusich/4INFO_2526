class Automobile {
    constructor() {
        this.accesa = false;
        this._velocita = 0;
        this._persone = 0;
        this._marcia = 1;
    }
    
    get persone() {
        return this._persone;
    }
    
    set persone(val) {
        if (val > 5) throw new Error("Troppe persone");
        if (this.accesa && this._velocita > 0) throw new Error("Auto in movimento");
        this._persone = val;
    }
    
    get velocita() {
        return this._velocita;
    }
    
    set velocita(val) {
        if (!this.accesa) throw new Error("Auto spenta");
        if (val > 130) throw new Error("Velocita eccessiva");
        this._velocita = val;
    }
    
    get marcia() {
        return this._marcia;
    }
    
    aggiungi_marcia() {
        if (!this.accesa) throw new Error("Auto spenta");
        if (this._marcia >= 6) throw new Error("Marcia massima raggiunta");
        this._marcia++;
    }
    
    togli_marcia() {
        if (!this.accesa) throw new Error("Auto spenta");
        if (this._marcia <= 1) throw new Error("Marcia minima raggiunta");
        this._marcia--;
    }
}