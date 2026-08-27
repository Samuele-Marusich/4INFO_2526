const bin_to_dec = (n) => {
   return n.split("").reverse().reduce((acc, e, i) => acc + ((2 ** i) * e), 0)
};