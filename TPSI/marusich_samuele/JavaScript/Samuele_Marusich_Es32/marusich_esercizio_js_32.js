const special_concat = (str1, str2) => {
   if (str1.length === 0 || str2.length === 0) {
      return "parole non adatte"
   }

   if (str1.includes(" ") || str2.includes(" ")) {
      return "parole non adatte"
   }
   
   let strOut = ""
   strOut += str2.charAt(0) + str1.slice(1) + str1.charAt(0) + str2.slice(1)
   return strOut

   
   
};