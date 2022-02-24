let func = (a, b, c) => {
    if (a == b == c)
        return console.log('Equilátero');
    else if (a == b || b == c || a == c)
        return console.log('Isósceles');
    else
        return console.log('Escaleno');
}
func(1, 2, 3)
func(1, 2, 2)
func(1, 1, 1)