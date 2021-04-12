const fs = require('fs');

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

const app_base = settings.app_base;

const re = `[\\t\\n\\ ]*base:[\\ ]*'${app_base}'[\\ ]*,[\\t\\n\\ ]*`;

function reset(filePath, re, value) {
  if (fs.existsSync(filePath)) {
    let fileStr = fs.readFileSync(filePath, 'utf8');
    fileStr = fileStr.replace(RegExp(re), value);
    fs.writeFileSync(filePath, fileStr);

    console.log(`restored base ^/${app_base}.*`);
  }
}

reset('vite.config.js', re, `\n\t`);
reset('vite.config.cjs', re, `\n\t`);
