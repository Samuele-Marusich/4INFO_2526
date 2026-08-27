const invert_case = (stringa) => {
   stringa = stringa.split("")
   
   for (let i = 0; i < stringa.length; i++) {
      if (stringa[i] == stringa[i].toUpperCase()) {
         stringa[i] = stringa[i].toLowerCase()
      }
      else {
         stringa[i] = stringa[i].toUpperCase()
      }
   }

   let strOut = ""

   for (let char of stringa) {
      strOut = strOut.concat(char)
   }

   return strOut
}