function Roulette() {
    // roulette numbers
    let rouletteOrder = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

    // store roulette outcomes
    let rouletteOutcome = {};

    // french names
    let frenchNames = {
        0: "zero, ",
        1: "un, ",
        2: "deux, ",
        3: "trois, ",
        4: "quatre, ",
        5: "cinq, ",
        6: "six, ",
        7: "sept, ",
        8: "huit, ",
        9: "neuf, ",
        10: "dix, ",
        11: "onze, ",
        12: "douze, ",
        13: "treize, ",
        14: "quatorze, ",
        15: "quinze, ",
        16: "seize, ",
        17: "dix-sep, t",
        18: "dix-huit, ",
        "00": "zero, ",
        19: "dix-neuf, ",
        20: "vingt, ",
        21: "vingt et un, ",
        22: "vingt-deux, ",
        23: "vingt-trois, ",
        24: "vingt-quatre, ",
        25: "vingt-cinq, ",
        26: "vingt-six, ",
        27: "vingt-sept, ",
        28: "vingt-huit, ",
        29: "vingt-neuf, ",
        30: "trente, ",
        31: "trente et un, ",
        32: "trente-deux, ",
        33: "trente-trois, ",
        34: "trente-quatre, ",
        35: "trente-cinq, ",
        36: "trente-six, "
    }

    // store roulette outcome
    rouletteOrder.forEach((number, index) => {
        let color;
        let evenOrOdd;
        let manqueOrPasse;

        if (number === 0) {
            color = ", rouge";
        }
        else if (number === "00") {
            color = ", noir";
        }
        else {
            // alternate color down the list
            color = (index % 2 === 0)? ", rouge" : ", noir";
        }

        if (number != 0 && number!= "00") {
            evenOrOdd = (number % 2 === 0)? ", pair" : ", impair";
        }

        if (number != "00" && number <= 18) {
            manqueOrPasse = "manque";
        } 
        else if (number != "00" && number > 18) {
            manqueOrPasse = "passe";
        }

        rouletteOutcome[number] = {
            frenchNames: frenchNames[number],
            color: color,
            evenOrOdd: evenOrOdd,
            manqueOrPasse: manqueOrPasse
        };
    });

    console.log(rouletteOutcome);
}

Roulette();