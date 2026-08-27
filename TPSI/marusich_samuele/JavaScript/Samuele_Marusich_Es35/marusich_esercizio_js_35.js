const tronca = (s, n) => {
    if (s.length <= n) {
        return s
    }

    let strOut = ""
    strOut = strOut.concat(s.slice(0, n), "...")

    return strOut
};