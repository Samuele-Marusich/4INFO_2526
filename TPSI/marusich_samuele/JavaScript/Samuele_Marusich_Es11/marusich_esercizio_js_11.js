let Automobile = function(modello,colore,marca,costo,peso){
    (this.modello = modello),
    (this.colore = colore),
    (this.marca = marca),
    (this.costo = costo),
    (this.peso = peso),
    (this.mostra = function(){
        console.log(`Macchina: ${this.marca} ${this.modello} ${this.colore}, ${peso}kg, ${costo}€`);
    }),
    (this.vroom = function(){
        console.log("VROOOMM!!!!");
    }),
    (this.aumentaCosto = function(){
        this.costo += this.costo * 10 / 100;
        console.log(`Nuovo costo per ${this.marca} ${this.modello}: ${this.costo}€`);
    })
}
function main(){
    let modelli = ["500L","Cayenne","Aventador","Fiesta","Sport"];
    let marche = ["Fiat","Porsche","Lamborghini","Ford","Range Rover"];
    let colori = ["bianco","nero","nero","blu","rosso"];
    let costi = [20_000,100_000,200_000,30_000,140_000];
    let pesi = [1285,2500,1500,1180,2400];
    macchine=[];
    for(let indice = 0;indice<modelli.length;indice++){
        let mac = new Automobile(modelli[indice],colori[indice],marche[indice],costi[indice],pesi[indice]);
        macchine.push(mac);
    }
    for(let indice = 0;indice<macchine.length;indice++){
        macchine[indice].mostra();
        macchine[indice].vroom();
        macchine[indice].aumentaCosto();
    }
}
main();