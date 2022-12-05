const { exec } = require("child_process");

const [year, day, part] = process.argv[2].split("/");

// example: 'npx tsc 2022\\day_01\\01.ts && node 2022\\day_01\\01.js && del "2022\\day_01\\01.js"',
const command = `npx tsc ${year}\\day_${day}\\${part}.ts && node ${year}\\day_${day}\\${part}.js && del "${year}\\day_${day}\\${part}.js"`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});
