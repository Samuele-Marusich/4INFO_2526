let Automobile = function(persone,vel,rapporto,stato){
    (this.persone = Number(persone) >= 0 ? (Number(persone) <= 5 ? Number(persone) : 5) : 0),
    (this.velocita = Number(vel) >= 0 ? (Number(vel) <= 180 ? Number(vel) : 180) : 0),
    (this.rapporto = Number(rapporto) >= 1 ? (Number(rapporto) <= 6 ? Number(rapporto) : 6) : 1),
    (this.stato = stato == "on" ? true : false),
    (this.toggleStato = function(){
        this.stato = !this.stato;
        this.velocita = 0;
        this.rapporto = 1;
    }),
    (this.setVelocita = function(n){
        n = Number(n);
        let diff = this.velocita - n;
        if(Math.abs(diff) < 30 && this.stato){
            this.velocita = Number(n)
        }
    }),
    (this.aumentaRapporto = function(){
        if(this.rapporto < 6 && this.stato){
            (this.rapporto)++;
        }
    }),
    (this.diminuisciRapporto = function(){
        if(this.rapporto > 1 && this.stato){
            (this.rapporto)--;
        }
    }),
    (this.setPersone = function(n){
        n = Number(n);
        if(this.velocita == 0 && n >= 0 && n <= 5){
            this.persone = n;
        }
    }),
    (this.visualizzaStato = function(){
        console.log(`Macchina => stato : ${this.stato ? "on":"off"}, persone : ${this.persone}, velocità : ${this.velocita} km/h, rapporto : ${this.rapporto}`);
    })
}
function main(){
    let macc = new Automobile(2,130,5,"on");
    macc.visualizzaStato();
    macc.aumentaRapporto();
    macc.visualizzaStato();
    macc.setPersone(2);
    macc.visualizzaStato();
    macc.setVelocita(170);
    macc.visualizzaStato();
    macc.setVelocita(150);
    macc.visualizzaStato();
    macc.toggleStato();
    macc.visualizzaStato();
}
main()
