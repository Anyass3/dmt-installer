const svelteConfig = 'svelte.config.cjs';

const fs = require('fs');

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

const app_base = settings.app_base;

const AddedConfig = `[\\t\\n\\ ]*kit\\:[\\ ]{[\\t\\n\\ ]*paths\\:[\\ ]{[\\t\\n\\ ]*assets:[\\ ]*\\'\\/${app_base}\\'\\,[\\t\\n\\ ]*base:[\\ ]*\\'\\/${app_base}\\'[\\t\\n\\ ]*\\}[\\ ]*\\,`;

if (fs.existsSync(svelteConfig)) {
  svelteConfigFile = fs.readFileSync(svelteConfig, 'utf8');
  svelteConfigFile = svelteConfigFile.replace(RegExp(AddedConfig), `\n\tkit: {`);
  fs.writeFileSync(svelteConfig, svelteConfigFile);

  console.log(`restored svelte.config.cjs`);
}
