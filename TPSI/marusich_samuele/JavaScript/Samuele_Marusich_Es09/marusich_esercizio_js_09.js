function password(){
    let password = prompt("Immettere la password")
    password == null && alert("Operazione annullata.") || password != "Agnell1no" && password != null && alert("Password errata.") || password == "Agnell1no" && alert("Benvenuto")
}
let username = prompt("Immettere l'username")
username == null && alert("Operazione annullata.") || username != "Admin" && username != null && alert("Non so chi tu sia.") || username == "Admin" && password()
