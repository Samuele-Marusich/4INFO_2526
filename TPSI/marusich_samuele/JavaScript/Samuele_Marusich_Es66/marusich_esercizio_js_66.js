((item) => {
    let [name, price, quantity] = item;
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
})(["Egg", 0.25, 12]);