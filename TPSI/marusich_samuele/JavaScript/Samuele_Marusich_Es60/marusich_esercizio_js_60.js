function is_anagram(lista) {
    let tmp = new Map()

    for (let word of lista){
        let sorted = word.toLowerCase().split("").sort().join("")
        tmp.set(sorted, word)
    }
    return Array.from(tmp.values())
}