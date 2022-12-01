const fs = require("fs");

// const input = fs.readFileSync("demo_input.txt", "utf8");
const input = fs.readFileSync("input.txt", "utf8");
// console.log(input);

const inputLines = [...input.split("\r\n"), ""];
// console.log(inputLines);

let currentTotal = 0;
let maxTotal = 0;

for (let i = 0; i < inputLines.length; i++) {
    // console.log(inputLines[i]);
    if (inputLines[i] === "") {
        if (currentTotal > maxTotal) {
            maxTotal = currentTotal;
        }
        currentTotal = 0;
    } else {
        currentTotal += parseInt(inputLines[i]);
    }
}

// console.log({ currentTotal, maxTotal });

console.log(maxTotal); // 66487
