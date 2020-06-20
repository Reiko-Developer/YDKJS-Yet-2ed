function randMax(max) {
    return (Math.trunc(1E9 * Math.random()) % max);
}

var x = {
    '0': 0, '1': 0, '2': 0, '3': 0, '4': 0,
    '5': 0, '6': 0, '7': 0, '8': 0, '9': 0,
}

//Testing the results of random and using scientific notation!
for (let i = 0; i < 1e7; i++) {
    switch (randMax(10)) {
        case 0: x[0]++; break;

        case 1: x[1]++; break;

        case 2: x[2]++; break;

        case 3: x[3]++; break;

        case 4: x[4]++; break;

        case 5: x[5]++; break;

        case 6: x[6]++; break;

        case 7: x[7]++; break;

        case 8: x[8]++; break;

        default: x[9]++; break;

    }
}

console.log(x);
