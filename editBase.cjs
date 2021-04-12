const fs = require('fs');

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

const app_base = settings.app_base;
// change this to your app base name
// ie. the frontend sub-route in which the app should run.

const canEditRe = `[\\t\\n\\ ]*base:[\\ ]*['"]${app_base}['"][\\ ]*`;

function edit(filePath, re, toAdd) {
  if (fs.existsSync(filePath)) {
    let fileStr = fs.readFileSync(filePath, 'utf8');
    canEdit = !RegExp(canEditRe).test(fileStr);
    if (canEdit) {
      fileStr = fileStr.replace(re, toAdd);
      fs.writeFileSync(filePath, fileStr);
      console.log(`Add base ^/${app_base}.*`);
    }
  }
}

edit(
  'vite.config.js',
  /plugins:[\ ]*\[/,
  `	base: '${app_base}',
	plugins: [`
);
edit(
  'vite.config.cjs',
  /plugins:[\ ]*\[/,
  `	base: '${app_base}',
	plugins: [`
);
