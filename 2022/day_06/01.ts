// https://adventofcode.com/2022/day/6

import * as fs from "fs";
import * as path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const LENGTH_OF_MARKER = 4;
let result = -1;

for (let i = LENGTH_OF_MARKER - 1; i < input.length; i++) {
    let position = i + 1;
    let set = new Set(input.substring(position - LENGTH_OF_MARKER, position).split(""));
    if (set.size === LENGTH_OF_MARKER) {
        result = position;
        break;
    }
}

console.log(result);
