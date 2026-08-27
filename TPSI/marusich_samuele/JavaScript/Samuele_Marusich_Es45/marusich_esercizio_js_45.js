const only_upper = (s) => {
    let a = s.split("")
    return a.filter((carattere) => carattere.charCodeAt(0) >= 65 && carattere.charCodeAt(0) <= 90)
};