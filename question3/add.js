const fs = require('fs');
const path = require('path');

// Start in the folder containing this script.
process.chdir(__dirname);

const logsDirectory = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

// Change the current working directory to Logs.
process.chdir(logsDirectory);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(process.cwd(), fileName);

    fs.writeFileSync(filePath, `This is log file ${i}.\n`);
    console.log(fileName);
}