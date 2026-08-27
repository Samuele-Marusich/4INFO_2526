let Numeri = function(x,y,z){
    (this.x = Number(x)),
    (this.y = Number(y)),
    (this.z = Number(z)),
    (this.maggiore = function(){
        let max = this.x > this.y ? this.x : this.y;
        max = max > this.z ? max : this.z;
        return `Il maggiore è ${max}`;
    })
}
function main(){
    let trii = [[10,"20",33],[-1,0,44444],[12,12,"12"],[33,"-12","-1"]];
    for(let indice = 0;indice<trii.length;indice++){
        let trio = trii[indice];
        let nuovo = new Numeri(trio[0],trio[1],trio[2]);
        console.log(nuovo.maggiore());
    }
}
main()