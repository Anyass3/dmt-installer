const svelteConfig = 'svelte.config.cjs';

const AddedConfig = /kit\:[\ ]{[\t\n\ ]*paths\:[\ ]{[\t\n\ ]*assets:[\ ]*\'\/youtube\-dl\'\,[\t\n\ ]*base:[\ ]*\'\/youtube\-dl\'[\t\n\ ]*\}[\ ]*\,/;

const fs = require('fs');

if (fs.existsSync(svelteConfig)) {
  svelteConfigFile = fs.readFileSync(svelteConfig, 'utf8');
  svelteConfigFile = svelteConfigFile.replace(AddedConfig, `kit: {`);
  fs.writeFileSync(svelteConfig, svelteConfigFile);

  console.log(`restored svelte.config.cjs`);
}
