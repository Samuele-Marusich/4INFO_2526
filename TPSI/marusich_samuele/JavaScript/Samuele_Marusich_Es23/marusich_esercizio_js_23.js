const abbreviazione = (stringa) => {
    stringa = stringa.split(" ")
    return `${stringa[0].toUpperCase().charAt(0)}${stringa[0].slice(1)} ${stringa[1].toUpperCase().charAt(0)}.`
}