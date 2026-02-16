function untokenize(str) {
  return str.replace(/ /g, "-");
}


const input = "Nel mezzo del cammin di nostra vita";
const output = untokenize(input);
console.log(output); 
