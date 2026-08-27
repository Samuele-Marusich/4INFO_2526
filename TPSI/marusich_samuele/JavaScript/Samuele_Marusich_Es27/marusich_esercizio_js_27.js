const capitalize_all = (stringa) => {
   let splitted = stringa.split(" ")

   let ret = ""

   for (let s of splitted){
      ret = ret.concat(s.charAt(0).toUpperCase(), s.substring(1).concat(" "))
   }

   return ret.trim()
}