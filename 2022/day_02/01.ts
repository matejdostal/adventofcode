// https://adventofcode.com/2022/day/2

const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputLines = input.split("\r\n");

let totalScore = 0;

const scoreMap = {
    "A X": 1 + 3,
    "A Y": 2 + 6,
    "A Z": 3 + 0,
    "B X": 1 + 0,
    "B Y": 2 + 3,
    "B Z": 3 + 6,
    "C X": 1 + 6,
    "C Y": 2 + 0,
    "C Z": 3 + 3,
};

for (let i = 0; i < inputLines.length; i++) {
    totalScore += scoreMap[inputLines[i]];
}

console.log(totalScore);

export {};
