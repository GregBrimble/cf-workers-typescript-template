# Cloudflare Workers Typescript Server & Client Template

[![GitHub Actions Test](https://github.com/GregBrimble/cf-workers-typescript-template/workflows/Test/badge.svg)](https://github.com/GregBrimble/cf-workers-typescript-template/actions?query=workflow%3ATest)
[![GitHub Actions Deploy](https://github.com/GregBrimble/cf-workers-typescript-template/workflows/Deploy/badge.svg)](https://github.com/GregBrimble/cf-workers-typescript-template/actions?query=workflow%3ADeploy)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/GregBrimble/cf-workers-typescript-template.svg?logo=lgtm&style=plastic)](https://lgtm.com/projects/g/GregBrimble/cf-workers-typescript-template/alerts/)
[![LGTM Code Quality](https://img.shields.io/lgtm/grade/javascript/g/GregBrimble/cf-workers-typescript-template.svg?logo=lgtm&style=plastic)](https://lgtm.com/projects/g/GregBrimble/cf-workers-typescript-template/context:javascript)
[![Code Climate Maintainability](https://img.shields.io/codeclimate/maintainability/GregBrimble/cf-workers-typescript-template.svg?style=plastic)](https://codeclimate.com/github/GregBrimble/cf-workers-typescript-template/maintainability)
[![Codecov](https://img.shields.io/codecov/c/github/GregBrimble/cf-workers-typescript-template?logo=codecov&style=plastic)](https://codecov.io/gh/GregBrimble/cf-workers-typescript-template)
[![License](https://img.shields.io/github/license/GregBrimble/cf-workers-typescript-template?style=plastic)](https://github.com/GregBrimble/cf-workers-typescript-template/blob/master/LICENSE)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/GregBrimble/cf-workers-typescript-template.svg?logo=github&style=plastic)](https://github.com/GregBrimble/cf-workers-typescript-template)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=plastic)](https://lerna.js.org/)

A perfect\* template for a [Cloudflare Workers](https://workers.cloudflare.com/) project, using [Workers Sites](https://workers.cloudflare.com/sites) ([React](https://reactjs.org/) although can be easily swapped for [Gatsby](https://www.gatsbyjs.org/) or another static builder), [TypeScript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/) and [Prettier](https://prettier.io/).

**And now, with end-to-end tests thanks to the new [`wrangler dev`](https://github.com/cloudflare/wrangler#-dev) command and [Playwright](https://playwright.dev/)! ✨**

## Prerequisites

- [Node.js](https://nodejs.org/en/)

- [`cloudflared`](https://developers.cloudflare.com/argo-tunnel/downloads/)

  (On MacOS with Homebrew: `brew install cloudflare/cloudflare/cloudflared`)

## Getting Started

### Automatic

Click [the button below](<(https://deploy.workers.cloudflare.com/?url=https://github.com/GregBrimble/cf-workers-typescript-template&paid=true)>) and follow the setup instructions.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/GregBrimble/cf-workers-typescript-template&paid=true)

### Manual

1. Fork repository:

   1. Click the [`Use this template`](https://github.com/GregBrimble/cf-workers-typescript-template/generate) button.

   1. Add GitHub Actions secret for [`CF_ACCOUNT_ID`](https://dash.cloudflare.com/?to=/:account/workers) and [`CF_API_TOKEN`](https://dash.cloudflare.com/profile/api-tokens) using `Edit Cloudflare Workers` template permissions.

   1. Enable the [CodeClimate](https://github.com/settings/installations/205740), [Codecov](https://github.com/settings/installations/655980), [LGTM](https://github.com/settings/installations/2030503), and [Synk](https://snyk.io/) apps.

1. (Optionally) Update `.nvmrc`:

   - Find available versions with `nvm ls-remote`
   - Use the current Node.js version with `node -v > .nvmrc`

1. Update `wrangler.toml`:

   1. Replace `script-name` and `script-name-dev` with `new-script-name` and `new-script-name-dev` respectively.

   1. Add KV Namespaces. For example:

      ```toml
      kv-namespaces = [
        { binding = "NAMESPACENAME", id = "86bbce2f10524d33a5f26517e8dee123" }
      ]
      ```

      - Find existing namespaces with `wrangler kv:namespace list`
      - Create a new namespace with `wrangler kv:namespace create NAMESPACENAME`

   1. Update `account_id`.

1. Update `package.json`:

   1. Replace `script-name` with `new-script-name`.

   1. Replace `repositoryname` with `newrepositoryname`.

   1. Update GitHub account name in the following locations:

      1. `repository.url`

      1. `bugs.url`

      1. `homepage`

   1. Update `homepage` and `author`.

1. `npm i`

1. (Optionally) Update npm packages: `npm run updatePackages`

1. Update `README.md`, (don't forget the badges!).

1. Follow additional instructions in `/packages/*/README.md`

## Scripts

These should all be self-explanatory:

- `npm run lint`

  - `npm run lint:fix`

- `npm run test`

  - `npm run test:client`
  - `npm run test:server`
  - `npm run test:e2e`

- `npm run deploy`

To start a local version:

1. In one terminal window, run `npm run start:client`.

1. In another, run `npm run start` and navigate to [http://localhost:8787](http://localhost:8787).

## About

- `/packages/client` is simply a CRA created with `npx create-react-app . --template typescript --use-npm`.

- `/packages/server` an function which intercepts a request to the client. If it returns a 404, the request is passed through to the client.

- `/packages/worker` attempts to fetch from the server first, falling back on the client.

- `/packages/e2e` runs end-to-end tests on the full-stack Worker.

---

\* May not be perfect
