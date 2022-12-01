const fs = require("fs");

// const input = fs.readFileSync("demo_input.txt", "utf8");
const input = fs.readFileSync("input.txt", "utf8");
// console.log(input);

const inputLines = [...input.split("\r\n"), ""];
// console.log(inputLines);

let currentTotal = 0;
let maxTotals = [0, 0, 0];
let maxTotalsSum = 0;

for (let i = 0; i < inputLines.length; i++) {
    if (inputLines[i] === "") {
        for (let j = 0; j < maxTotals.length; j++) {
            if (currentTotal > maxTotals[j]) {
                let tmpTotal = maxTotals[j];
                maxTotals[j] = currentTotal;
                currentTotal = tmpTotal;
            }
        }
        currentTotal = 0;
    } else {
        currentTotal += parseInt(inputLines[i]);
    }
}

for (let i = 0; i < maxTotals.length; i++) {
    maxTotalsSum += maxTotals[i];
}

// console.log(currentTotal, maxTotals, maxTotalsSum);

console.log(maxTotalsSum); // 197301
