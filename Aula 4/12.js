let fact = (a) => {
    if (a == 0)
        return 1;
    else
        return a * fact(a - 1);
}

console.log(fact(5))