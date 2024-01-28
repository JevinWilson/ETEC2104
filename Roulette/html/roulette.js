function Roulette() {
    // roulette numbers/french numbers
    let roulette = {
        0: "zero",
        34: "trente-quatre",
        10: "dix",
        21: "vingt-et-onze",
        28: "vingt-huit",
        4: "quatre",
        18: "dix-huit",
        9: "neuf",
        27: "vingt-sept",
        22: "vingt-deux",
        12: "douze",
        3: "tri",
        17: "sept",
        20: "vingt",
        11: "onze",
        33: "trente-trois",
        2: "deux",
        10: "dix",
        32: "trente-deux",
        "00": "zero",
        15: "quinze",
        8: "huit",
        25: "vingt-cinq",
        1: "un",
        31: "trente-et-un",
        20: "vingt",
        14: "quatorze",
        30: "trente",
        7: "sept",
        24: "vingt-quatre",
        29: "vingt-neuf",
        35: "trente-cinq",
        6: "six",
        13: "treize",
        23: "vingt-trois",
        19: "dix-neuf",
        5: "cinq",
        36: "trente-six",
    }
    
    // roulette numbers in order
    let rouletteOrder = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, 00, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

    // store number with color
    let rouletteColor = {};
    
    // assighn color to roulette numbers
    rouletteOrder.forEach((number, index) => {
        let color;
        if (number === 0) {
            color = "rouge"; 
        } 
        else if (number === "00") {
            color = "noir"; 
        } 
        else {
            color = (index % 2 === 0 ? "rouge" : "noir"); 
        }
        rouletteColors[number] = { color: color, french: roulette[number] };
    });

    // even or odd
    if (rouletteOrder[index] % 2 || rouletteOrder[index] == "00") {
        w += "Impair";
    }
    else {
        w += "Pair";
    }

    // assign number if manque or passe
    if (rouletteOrder[index] <= 18) {
        w += "Manque";
    }
    else if (rouletteOrder[index] > 18 || rouletteOrder[index] == "00"){
        w += "Passe";
    }
};

console.log(rouletteColor);