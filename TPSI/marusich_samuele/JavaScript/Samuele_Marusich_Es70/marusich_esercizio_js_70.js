// Implementazione Classe Calcolatrice completa e funzionante
class Calcolatrice {
    constructor() {
        this.ris = 0;
    }
    set_result(n) {
        this.ris = n;
        return this;
    }
    get_result() {
        return this.ris;
    }
    sum(a) {
        this.ris += a;
        return this;
    }
    sub(a) {
        this.ris -= a;
        return this;
    }
    mul(a) {
        this.ris *= a;
        return this;
    }
    div(a) {
        this.ris /= a;
        return this;
    }
}