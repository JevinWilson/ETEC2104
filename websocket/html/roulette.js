"use strict";

let spinHistory = [];

// roulette outcome [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, 00, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36]
let rouletteOutcome = [
    {number: 0, french: "zero", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 34, french: "trois-quatre", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 10, french: "dix", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 21, french: "vingt-et-un", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 28, french: "vingt-huit", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 4, french: "quatre", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 18, french: "dix-huit", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 9, french: "neuf", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 27, french: "vingt-sept", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 22, french: "vingt-deux", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 12, french: "douze", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 3, french: "trois", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 17, french: "sept", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 20, french: "vingt", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 11, french: "onze", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 33, french: "treize", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 2, french: "deux", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 10, french: "dix", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 32, french: "treize", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: "00", french: "zero", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 15, french: "quinze", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 8, french: "huit", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 25, french: "vingt-cinq", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 1, french: "un", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 31, french: "treize", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 20, french: "vingt", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 14, french: "quatorze", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 30, french: "treize", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 7, french: "sept", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 24, french: "vingt-quatre", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"},
    {number: 29, french: "vingt-neuf", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 35, french: "trente-cinq", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 6, french: "six", color: ", rouge", oddOrEven: ", pair", manqueOrPasse: ", manque"},
    {number: 13, french: "treize", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 23, french: "vingt-trois", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 19, french: "neuf", color: ", noir", oddOrEven: ", impair", manqueOrPasse: ", passe"},
    {number: 5, french: "cinq", color: ", rouge", oddOrEven: ", impair", manqueOrPasse: ", manque"},
    {number: 36, french: "trente-six", color: ", noir", oddOrEven: ", pair", manqueOrPasse: ", passe"}
]

function updateSpinHistory() {
    let table = document.getElementById('spinHistory');
    if (!table) {
        table = document.createElement('table');
        table.id = 'spinHistory';
        document.body.appendChild(table);
    }
    // clear table for update
    table.innerHTML = '';

    // table headers
    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    headerRow.insertCell(0).textContent = "Number";
    headerRow.insertCell(1).textContent = "French";
    headerRow.insertCell(2).textContent = "Color";
    headerRow.insertCell(3).textContent = "Odd/Even";
    headerRow.insertCell(4).textContent = "Manque/Passe";

    // add past spins to the top
    spinHistory.slice().reverse().forEach(spin => {
        let row = table.insertRow(1); // Insert after the header row
        row.insertCell(0).textContent = spin.number;
        row.insertCell(1).textContent = spin.french;
        row.insertCell(2).textContent = spin.color.trim();
        row.insertCell(3).textContent = spin.oddOrEven.trim();
        row.insertCell(4).textContent = spin.manqueOrPasse.trim();
    });
}

function roulette() {
    // get random index: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
    let randomIndex = Math.floor(Math.random() * rouletteOutcome.length);
    let winner = rouletteOutcome[randomIndex];

    // output result
    console.log(`${winner.number} ${winner.french} ${winner.color} ${winner.oddOrEven} ${winner.manqueOrPasse}`);

    // output to display: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    let display = document.getElementById('display');
    display.textContent = `${winner.number} ${winner.french} ${winner.color} ${winner.oddOrEven} ${winner.manqueOrPasse}`;

    // store results in array
    spinHistory.unshift(winner);

    // keep table to 10 rows
    if (spinHistory.length > 10) {
        spinHistory.pop();
    }
    updateSpinHistory();
    console.log('Spin button clicked');
}

// establish websocket connection
let sock = new WebSocket("ws://" + document.location.host + "/ws");
// event listener for websocket connection
sock.addEventListener("open", () => {
    console.log("WebSocket connection opened.");
});
// event listener for websocket message
sock.addEventListener("message", (ev) => {
    let display = document.getElementById('display');
    display.textContent = ev.data;
});
// event listener for websocket close
sock.addEventListener("close", () => {
    console.log("WebSocket connection closed.");
});
// bind roulette function to spin button
document.getElementById('spinButton').addEventListener('click', () => {
    let result = roulette(); // Call the roulette function to get the result
    sock.send(result); // Send the result to the server
});

document.getElementById('spinButton').addEventListener('click', roulette);