const upper_case = (stringa) => {
    let risultato = ""

    for (let c of stringa){
        let code = c.charCodeAt(0)
        risultato = risultato.concat((code >= 97 && code <= 122) ? String.fromCharCode(code - 32) : String.fromCharCode(code))
    }

    return risultato
}