const fs = require('fs');
const path = require('path');

const terms = [
    "physiotherapist", "physiotherapy", "biokineticist", "biokinetics",
    "\\bpatient\\b", "\\bpatients\\b",
    "\\bdiagnose\\b", "\\bdiagnoses\\b", "\\bdiagnosed\\b", "\\bdiagnosing\\b",
    "\\bcure\\b", "\\bcures\\b", "\\bcured\\b", "\\bcuring\\b",
    "\\btreatment\\b", "\\btreatments\\b", "\\btreating\\b",
    "\\bmedical\\b", "\\bmedically\\b",
    "\\bprescribe\\b", "\\bprescribes\\b", "\\bprescribed\\b", "\\bprescribing\\b",
    "\\brehabilitation\\b", "\\brehab\\b",
    "HPCSA", "practice number"
];

const regex = new RegExp("(" + terms.join("|") + ")", "gi");

function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkSync(filepath, filelist);
        } else {
            if (filepath.match(/\.(tsx|ts|md|mdoc|js|jsx|json)$/)) {
                filelist.push(filepath);
            }
        }
    }
    return filelist;
}

const files = walkSync('./caretherapy/src').concat(walkSync('./caretherapy/public'));

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        if (line.match(regex) && !line.includes("TODO: HPCSA Compliance Review")) {
            console.log(`${file}:${index + 1}: ${line.trim()}`);
        }
    });
});
