# Samurai Admin (frontend)

This repsoitory contains the admin site for [Samurai-Backend](https://github.com/Wandering-Cursor/Samurai-Backend/).
To deploy it, you can use [npm](https://www.npmjs.com/) and deploy it as either, static site, or a [Node.js](https://nodejs.org/en) application.
For local development, you can also use Run and Debug in Visual Studio Code ([launch.json](.vscode/launch.json)).

## Useful links

This frontend uses [PrimeVue](https://primevue.org/) and [PrimeFlex](https://primeflex.org/) for components.

## Audit notices

As shown in [this](https://github.com/primefaces/primevue/issues/5606) issue, PrimeVue has some problems when using Quill v2, so for now, 1.3.7 is used.
Once the issue will be solved though, it will be updated to the latest version.