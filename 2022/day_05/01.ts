// https://adventofcode.com/2022/day/5

import * as fs from "fs";
import * as path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

let procedures = [];
let stacks = [];
let result = "";

let [stacksInputLines, proceduresInputLines] = input.split("\r\n\r\n").map((part: string) => part.split("\r\n"));

for (let i = stacksInputLines.length - 2; i >= 0; i--) {
    const line = stacksInputLines[i];
    for (let j = 1, k = 0; j < line.length; j += 4, k++) {
        if (!stacks[k]) stacks[k] = [];
        if (line[j] !== " ") stacks[k].push(line[j]);
    }
}

for (let i = 0; i < proceduresInputLines.length; i++) {
    const line = proceduresInputLines[i];
    let [_0, move, _2, from, _4, to] = line.split(" ").map(Number);
    procedures.push({ move, from: from - 1, to: to - 1 });
}

for (let i = 0; i < procedures.length; i++) {
    const { move, from, to } = procedures[i];
    for (let j = 0; j < move; j++) {
        stacks[to].push(stacks[from].pop());
    }
}

for (let i = 0; i < stacks.length; i++) {
    result += stacks[i][stacks[i].length - 1];
}

console.log(result);
