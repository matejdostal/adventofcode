// https://adventofcode.com/2022/day/4

const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const inputLines = input.split("\r\n");

let count = 0;

for (let i = 0; i < inputLines.length; i++) {
    let pairs = inputLines[i].split(",").map((p) => p.split("-").map((n) => Number(n)));
    if (
        (pairs[0][0] <= pairs[1][0] && pairs[0][1] >= pairs[1][0]) ||
        (pairs[0][0] <= pairs[1][1] && pairs[0][1] >= pairs[1][1]) ||
        (pairs[1][0] <= pairs[0][0] && pairs[1][1] >= pairs[0][0]) ||
        (pairs[1][0] <= pairs[0][1] && pairs[1][1] >= pairs[0][1])
    ) {
        count++;
    }
}

console.log(count);
