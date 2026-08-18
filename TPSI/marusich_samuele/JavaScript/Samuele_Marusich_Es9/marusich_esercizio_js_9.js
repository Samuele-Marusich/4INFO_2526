document.addEventListener("DOMContentLoaded",main,false);
function main(){
    let pass;
    let user = prompt("User: ");
    user == null && alert("Cancellato");
    user != null && (user == "admin" || alert("IDK"));
    user == "admin" && (pass = prompt("Password: "));
    user == "admin" && pass == null && alert("Cancellato");
    user == "admin" && pass != "Agnell1no" && pass != null && alert("Wrong");
    pass == "Agnell1no" && alert("Welcome");
}
