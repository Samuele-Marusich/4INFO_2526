const map_arr = (l, n) => {
    return l.map((elemento, indice) => { return +elemento % n == 0 && +elemento != 0? 0 : elemento}) 
};