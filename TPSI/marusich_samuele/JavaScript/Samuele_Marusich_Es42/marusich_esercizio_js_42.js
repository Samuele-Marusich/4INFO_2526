const swap = (l, n, m) => {
    let x = l.at(n)
    l.splice(n, 1) 
    l.splice(m >= 0 ? m : m+1, 0, x)

    return l
};