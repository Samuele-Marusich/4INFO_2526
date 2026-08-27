const ordina = (l) => {
    return l.sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : a.title.toLowerCase() == b.title.toLowerCase() ? 0 : -1 
    })
};