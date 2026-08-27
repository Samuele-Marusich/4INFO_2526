class Orario {
    constructor(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
    }
    
    getUnixTime() {
        return this.h * 3600 + this.m * 60 + this.s;
    }
    
    min(ora2, ora3) {
        let orari = [this, ora2, ora3];
        let minOra = this;
        for (let ora of orari) {
            if (ora.getUnixTime() < minOra.getUnixTime()) {
                minOra = ora;
            }
        }
        return { h: minOra.h, m: minOra.m, s: minOra.s };
    }
}