function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null)
            this.position = randMax(this.symbols.length - 1);

        this.position =
            (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null)
            this.position = randMax(this.symbols.length - 1)

        return this.symbols[this.position];

    }
}

var reelCustom = Object.create(reel);

reelCustom.displayTop = function () {
    if (this.position == 0)
        return this.symbols[this.symbols.length - 1];
    return this.symbols[this.position - 1];
}

reelCustom.displayBot = function () {
    if (this.position == this.symbols.length - 1)
        return this.symbols[0];
    return this.symbols[this.position + 1];
}

reelCustom.displayAll = function () {
    return [
        this.displayTop(),
        this.display(),
        this.displayBot()
    ]
}

var slotMachine = {
    reels: [
        Object.create(reelCustom),
        Object.create(reelCustom),
        Object.create(reelCustom)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        })
    },
    display() {
        var result = [];
        this.reels.forEach(function spinReel(reel) {
            result.push(reel.displayAll());
        })

        console.log('--------');
        

        for (let i = 0; i < result.length; i++) {
            let tmp = '';
            for (let j = 0; j < result[i].length; j++) {
                tmp += result[j][i];

            }
            console.log(tmp);
        }
    }
}

slotMachine.spin();
slotMachine.display();

slotMachine.spin();
slotMachine.display();

slotMachine.spin();
slotMachine.display();