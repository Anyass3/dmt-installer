const fs = require('fs');
const svelteConfig = 'svelte.config.cjs';

let settings = fs.readFileSync('dmt/settings.json', 'utf-8');
settings = JSON.parse(settings);

const app_base = settings.app_base;
// change this to your app base name
// ie. the frontend sub-route in which the app should run.

const toAddConfig = `
	kit: {
		paths: {
			assets: '/${app_base}',
			base: '/${app_base}'
		},`;

if (fs.existsSync(svelteConfig)) {
  svelteConfigFile = fs.readFileSync(svelteConfig, 'utf8');
  svelteConfigFile = svelteConfigFile.replace(/kit:[\ ]*{/, toAddConfig);
  fs.writeFileSync(svelteConfig, svelteConfigFile);

  console.log(`Add base ^/${app_base}.*`);
}
