const utente = {
  nome: "Samuele",
  cognome: "marusich",
  età: 25,
  email: "samuele.marusich@example.com"
};

const chiavi = Object.keys(utente);

for (let i = 0; i < chiavi.length; i++) {
  const chiave = chiavi[i];
  console.log(`${chiave}: ${utente[chiave]}`);
}


