// Implementazione gerarchia Poligoni (Quadrato, Triangolo, ecc.) completa e funzionante
class Poligono {
    constructor(lati, lunghe) {
        this.lati = lati;
        this.lunghe = lunghe;
    }
    perimetro() {
        return this.lati * this.lunghe;
    }
}

class Quadrato extends Poligono {
    constructor(n) {
        super(4, n);
    }
    area() {
        return this.lunghe ** 2;
    }
}

class TriangoloEquilatero extends Poligono {
    constructor(n) {
        super(3, n);
    }
    area() {
        return (Math.sqrt(3) / 4) * this.lunghe ** 2;
    }
}

class Pentagono extends Poligono {
    constructor(n) {
        super(5, n);
    }
    area() {
        return 1.7205 * this.lunghe ** 2;
    }
}

class Esagono extends Poligono {
    constructor(n) {
        super(6, n);
    }
    area() {
        return 2.5981 * this.lunghe ** 2;
    }
}

class Ettagono extends Poligono {
    constructor(n) {
        super(7, n);
    }
    area() {
        return 3.6339 * this.lunghe ** 2;
    }
}

class Ottagono extends Poligono {
    constructor(n) {
        super(8, n);
    }
    area() {
        return 4.8284 * this.lunghe ** 2;
    }
}