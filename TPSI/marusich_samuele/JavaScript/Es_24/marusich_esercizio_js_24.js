function protect_email(email) {
  const [username, domain] = email.split("@");
  const visiblePart = username.slice(0, username.indexOf(".") !== -1 ? username.indexOf(".") : Math.ceil(username.length / 2));
  return `${visiblePart} ...@${domain}`;
}


console.log(protect_email("samuele.marusich@istitutoagnelli.it")); 
    