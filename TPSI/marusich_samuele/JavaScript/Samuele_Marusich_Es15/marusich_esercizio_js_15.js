let Fibonacci = function(n){
    (this.n = Number(n)),
    (this.calcola = function(){
        let ris = [0,1];
        for(let indice = 0;indice<this.n;indice++){
            ris.push(ris[indice] + ris[indice+1]);
        }
        console.log(`${this.n} => ${ris[this.n]}`)
    })
}
function main(){
    let inputs = [40,10,5,"4",6,"100",0];
    for(let indice = 0; indice< inputs.length;indice++){
        let fib = new Fibonacci(inputs[indice]);
        fib.calcola()
    }
}
main()
