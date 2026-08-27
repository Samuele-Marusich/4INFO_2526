function deduplicate(lista) {
    let tmp = new Set(lista)
    return Array.from(tmp.keys())
}