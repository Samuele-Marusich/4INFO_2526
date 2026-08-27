const insert = (str1, agg, pos) => {
    return str1.slice(0, pos).trim() + " " + agg + " " + str1.slice(pos).trim()
};