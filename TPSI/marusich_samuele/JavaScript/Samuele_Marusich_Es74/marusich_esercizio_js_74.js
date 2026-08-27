class Automobile {
    constructor(brand, model, year, color, cc) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.cc = cc;
    }
    presenta() {
        console.log(`${this.brand} ${this.model} del ${this.year}, colore: ${this.color} a ${this.cc}`);
    }
}