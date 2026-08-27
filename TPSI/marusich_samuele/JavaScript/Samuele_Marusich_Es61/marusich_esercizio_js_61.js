function count_occurence(text) {
   let arr_text = text.split(" ")
   let occorrenze = new Map()

   arr_text.forEach(parola => {
      if (occorrenze.has(parola))
         occorrenze.set(parola, occorrenze.get(parola) + 1)
      else
         occorrenze.set(parola, 1)
   });

   return occorrenze
}