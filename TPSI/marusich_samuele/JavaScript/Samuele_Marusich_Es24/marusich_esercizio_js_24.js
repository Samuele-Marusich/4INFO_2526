const protect_email = (email) => {
   email = email.split("@")
   return `${email[0].slice(0, email[0].length / 2)}...@${email[1]}`
};