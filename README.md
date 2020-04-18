# Cloudflare Workers Typescript Server & Client Template

A perfect\* template for a [Cloudflare Workers](https://workers.cloudflare.com/) project, using [Workers Sites](https://workers.cloudflare.com/sites) ([React](https://reactjs.org/) although can be easily swapped for [Gatsby](https://www.gatsbyjs.org/) or another static builder), [TypeScript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/), [Prettier](https://prettier.io/) and [Lerna](https://lerna.js.org/).

## Prerequisites

- [Node.js](https://nodejs.org/en/)

- [`cloudflared`](https://developers.cloudflare.com/argo-tunnel/downloads/)

  (On MacOS with Homebrew: `brew install cloudflare/cloudflare/cloudflared`)

## Getting Started

1. Fork repository:

   1. Click the [`Use this template`](https://github.com/GregBrimble/cf-workers-typescript-template/generate) button.

   1) Add GitHub Actions secret for [`CF_API_TOKEN`](https://dash.cloudflare.com/profile/api-tokens) using `Edit Cloudflare Workers` template permissions.

1. (Optionally) Update `.nvmrc`:

   - Find available versions with `nvm ls-remote`
   - Use the current Node.js version with `node -v > .nvmrc`

1. Update `wrangler.toml`:

   1. `sed 's/script-name/my-new-worker-name/g' wrangler.toml`

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

   1. `sed 's/script-name/my-new-worker-name/g' package.json`

   1. `sed 's/repositoryname/newrepositoryname/g' package.json`

   1. Update GitHub account name in the following locations:

      1. `repository.url`

      1. `bugs.url`

      1. `homepage`

   1. Update `homepage` and `author`.

1. `npm i`

1. (Optionally) Update npm packages: `npm run updatePackages`

1. Update `README.md`

1. Follow additional instructions in `/packages/*/README.md`

## Scripts

These should all be self-explanatory:

- `npm run lint`

  - `npm run lint:fix`

- `npm run test`

  - `npm run test:client`
  - `npm run test:server`

- `npm run deploy`

To start a local version:

1. In one terminal window, run `npm run start:client`.

1. In another, run `npm run start` and navigate to [http://localhost:8787](http://localhost:8787).

## About

- `/packages/client` is simply a CRA created with `npx create-react-app . --template typescript --use-npm`.

- `/packages/server` an function which intercepts a request to the client. If it returns a 404, the request is passed through to the client.

- `/packages/worker` attempts to fetch from the server first, falling back on the client.

---

\* May not be perfect
