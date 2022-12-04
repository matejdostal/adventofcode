// https://adventofcode.com/2022/day/3

const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const inputLines = input.split("\r\n");

const priorities = {};
let sumOfPriorities = 0;

for (let i = "a".charCodeAt(0), p = 1; i <= "z".charCodeAt(0); i++, p++) {
    priorities[String.fromCharCode(i)] = p;
}
for (let i = "A".charCodeAt(0), p = 27; i <= "Z".charCodeAt(0); i++, p++) {
    priorities[String.fromCharCode(i)] = p;
}

for (let i = 0; i < inputLines.length; i++) {
    const inputLine = inputLines[i];
    let startChars = {},
        endChars = {},
        startIndex = 0,
        endIndex = inputLine.length - 1,
        char;
    while (startIndex < endIndex) {
        char = inputLine[startIndex];
        if (endChars[char]) {
            sumOfPriorities += priorities[char];
            break;
        }
        startChars[char] = true;
        char = inputLine[endIndex];
        if (startChars[char]) {
            sumOfPriorities += priorities[char];
            break;
        }
        endChars[char] = true;
        startIndex++;
        endIndex--;
    }
}

console.log(sumOfPriorities);