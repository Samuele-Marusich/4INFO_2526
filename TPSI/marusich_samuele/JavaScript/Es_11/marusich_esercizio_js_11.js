function creaAutomobile(marca, modello, anno, colore, alimentazione) {
  return {
    marca: marca,
    modello: modello,
    anno: anno,
    colore: colore,
    alimentazione: alimentazione,
    
    accendi: function() {
      console.log(`${this.marca} ${this.modello} è accesa.`);
    },
    
    guida: function() {
      console.log(`${this.marca} ${this.modello} sta guidando.`);
    },
    
    spegni: function() {
      console.log(`${this.marca} ${this.modello} è spenta.`);
    }
  };
}

const auto1 = creaAutomobile("Fiat", "Panda", 2020, "rosso", "benzina");
const auto2 = creaAutomobile("Tesla", "Model 3", 2022, "nero", "elettrica");
const auto3 = creaAutomobile("BMW", "X5", 2019, "bianco", "diesel");
const auto4 = creaAutomobile("Toyota", "Yaris", 2021, "blu", "ibrida");
const auto5 = creaAutomobile("Audi", "A4", 2018, "grigio", "benzina");

const automobili = [auto1, auto2, auto3, auto4, auto5];

for (let i = 0; i < automobili.length; i++) {
  automobili[i].accendi();
  automobili[i].guida();
  automobili[i].spegni();
}


