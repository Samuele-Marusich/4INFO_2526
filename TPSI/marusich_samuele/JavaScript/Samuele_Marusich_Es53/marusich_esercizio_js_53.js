const shuffle = (l, m) => {
   let arr1 = l.slice(0, m)
   let arr2 = l.slice(m + 1)
   
   return arr2.concat(arr1)
};