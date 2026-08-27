((utente)=>{
    let {nome,role,is_admin = false} = utente;
    console.log(nome,role,is_admin);
})({nome: "Jon",role: "user"});