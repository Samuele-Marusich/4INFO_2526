const gen_arr = (len) => {
    let list = Array(len).fill().map(e => Math.floor(Math.random() * 100)), l2 = [...list];
    return [list, l2.reverse()]
};