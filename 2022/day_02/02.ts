// https://adventofcode.com/2022/day/2

import * as fs from "fs";
import * as path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputLines = input.split("\r\n");

let totalScore = 0;

const scoreMap: any = {
    "A X": 3 + 0,
    "A Y": 1 + 3,
    "A Z": 2 + 6,
    "B X": 1 + 0,
    "B Y": 2 + 3,
    "B Z": 3 + 6,
    "C X": 2 + 0,
    "C Y": 3 + 3,
    "C Z": 1 + 6,
};

for (let i = 0; i < inputLines.length; i++) {
    totalScore += scoreMap[inputLines[i]];
}

console.log(totalScore);
