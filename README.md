# DMT-Standalone-APP-Installer for svelte-kit

> should work with vinilla svelte vite-apps but for rollup some minor changes will do.

> Now with vite we don't neccesarily need hash-based-routing.
> any type of routing will work

### in the settings.json

- app_base: change app_base value to your app_base-route - the frontend sub-route in which the app should run.
- manifest: if you have one in static change it the name to yours
- app_html: your main html entry before build
- build: your app build directory
- hook: if you have a dmt hook change it to its directory

# installation

in your project's root directory

```bash
npx degit anyass3/dmt-installer dmt
node dmt/setup.cjs
```

now to install the dmt-app

```bash
npm run dmt-install
```
# dmt-installer
