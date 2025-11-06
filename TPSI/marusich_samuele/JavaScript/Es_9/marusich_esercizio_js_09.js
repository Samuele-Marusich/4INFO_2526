function canceled(){
    alert("Canceled");
}

function login(){
    let username = prompt("Inserisci il nome utente: ");

    if(username === "Admin"){
        let password = prompt("Inserisci la password utente: ");

        if(password === "Agnell1no"){
            alert("Welcome!");
        }else if(password === null){
            canceled();
        }else{
            alert("Wrong password");
        }
    }else if(username === null){
        canceled();
    }else{
        alert("I don't know you");
    }
}