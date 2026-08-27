const reverse = (l) => {
    let lNuovo = []

    for (let el of l){
      lNuovo.unshift(el)
    }
    
    lNuovo.splice(0,0,l.reduce((acc, current) => acc + current, 0))

    return lNuovo
}