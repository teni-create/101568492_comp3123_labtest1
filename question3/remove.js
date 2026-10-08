const fs = require('fs');
const path = require('path');

process.chdir(__dirname);

const logsDirectory = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory).sort();

    files.forEach((fileName) => {
        console.log(`delete files...${fileName}`);
        fs.unlinkSync(path.join(logsDirectory, fileName));
    });

    fs.rmdirSync(logsDirectory);
}