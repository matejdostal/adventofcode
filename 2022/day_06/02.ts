// https://adventofcode.com/2022/day/6

import * as fs from "fs";
import * as path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const LENGTH_OF_MESSAGE_MARKER = 14;
let result = -1;

for (let i = LENGTH_OF_MESSAGE_MARKER; i < input.length; i++) {
    let set = new Set(input.substring(i - LENGTH_OF_MESSAGE_MARKER, i).split(""));
    if (set.size === LENGTH_OF_MESSAGE_MARKER) {
        result = i;
        break;
    }
}

console.log(result);
