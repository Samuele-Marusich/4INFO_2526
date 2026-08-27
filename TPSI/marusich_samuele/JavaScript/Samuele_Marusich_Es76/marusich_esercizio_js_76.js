class Orario {
    constructor(ora, min, sec) {
        this.hours = ora;
        this.minutes = min;
        this.seconds = sec;
    }
    
    calcolaS() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
    
    calcolaRis(h, m, s) {
        return { "hours": h, "minutes": m, "seconds": s, "milliseconds": s * 1000 };
    }
    
    diff(secondoOrario) {
        let ora1 = this.calcolaS();
        let ora2 = secondoOrario.calcolaS();
        let ff = Math.abs(ora1 - ora2);
        return this.calcolaRis(ff / 3600, ff / 60, ff);
    }
}