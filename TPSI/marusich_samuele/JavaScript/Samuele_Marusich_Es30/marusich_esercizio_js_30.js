const tronca = (stringa, l) => {
    if (stringa.length <= l) {
        return stringa
    }

    let strOut = ""
    strOut = strOut.concat(stringa.slice(0, l), "...")

    return strOut
}