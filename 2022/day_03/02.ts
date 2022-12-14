// https://adventofcode.com/2022/day/3

import * as fs from "fs";
import * as path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const inputLines = input.split("\r\n");

const priorities: any = {};
let sumOfPriorities = 0;

for (let i = "a".charCodeAt(0), p = 1; i <= "z".charCodeAt(0); i++, p++) {
    priorities[String.fromCharCode(i)] = p;
}
for (let i = "A".charCodeAt(0), p = 27; i <= "Z".charCodeAt(0); i++, p++) {
    priorities[String.fromCharCode(i)] = p;
}

for (let i = 0; i < inputLines.length; i += 3) {
    let chars1: any = {},
        chars2: any = {};
    for (let j = 0, inputLine = inputLines[i]; j < inputLine.length; j++) chars1[inputLine[j]] = true;
    for (let j = 0, inputLine = inputLines[i + 1]; j < inputLine.length; j++) chars2[inputLine[j]] = true;
    for (let j = 0, inputLine = inputLines[i + 2]; j < inputLine.length; j++) {
        let char = inputLine[j];
        if (chars1[char] && chars2[char]) {
            sumOfPriorities += priorities[char];
            break;
        }
    }
}

console.log(sumOfPriorities);
