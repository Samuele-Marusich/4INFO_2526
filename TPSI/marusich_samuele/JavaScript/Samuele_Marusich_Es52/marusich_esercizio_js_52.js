const psw_gen = (len) => {
    let password = []
    while (password.length != len) {
        let ran = Math.floor(Math.random() * (58 - 122) + 122)
        (ran < 58 && ran > 47) || (ran > 64 && ran < 91) || (ran > 96 && ran < 123) ? password.push(String.fromCharCode(ran)) : null
    }
    return password
};