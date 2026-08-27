class Fibonacci {
    calc(n) {
        let a = 1, b = 0;
        for (let i = 0; i < n; i++) {
            let tmp = a + b;
            a = b;
            b = tmp;
        }
        return b;
    }
}