// https://adventofcode.com/2022/day/1

const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputLines = [...input.split("\r\n"), ""];

let currentTotal = 0;
let maxTotal = 0;

for (let i = 0; i < inputLines.length; i++) {
    if (inputLines[i] === "") {
        if (currentTotal > maxTotal) {
            maxTotal = currentTotal;
        }
        currentTotal = 0;
    } else {
        currentTotal += parseInt(inputLines[i]);
    }
}

console.log(maxTotal);

export {};
