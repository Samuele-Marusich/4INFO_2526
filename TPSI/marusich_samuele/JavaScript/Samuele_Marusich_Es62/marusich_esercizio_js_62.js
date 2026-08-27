const unique_random_numbers = (n, m) => {
   let numeri = new Set()
   
   while (numeri.size < n)
      numeri.add(Math.ceil(Math.random() * m))

   return Array.from(numeri).sort()
}