const reverse = (l) => {
  let lNuovo = []

  for (let el of l){
    lNuovo.unshift(el)
  }

  return lNuovo
};