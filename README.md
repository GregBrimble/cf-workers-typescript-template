# Cloudflare Workers Typescript Server & Client Template

## Prerequisites

1. [`wrangler`](https://github.com/cloudflare/wrangler)

   1. `npm install -g @cloudflare/wrangler`

## Getting Started

1. Fork repository:

   1. Click the [`Use this template`](https://github.com/GregBrimble/cf-workers-typescript-template/generate) button.

   1) Add GitHub secret for [`CF_API_TOKEN`](https://dash.cloudflare.com/profile/api-tokens) using `Edit Cloudflare Workers` template permissions.

1. Update `.nvmrc`:

   - Find available versions with `nvm ls-remote`.
   - Use the current Node.js version with `node -v > .nvmrc`.

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

   1. Update `account_id` if required.

1. Update `package.json`:

   1. `sed 's/script-name/my-new-worker-name/g' package.json`

   1. `sed 's/repositoryname/newrepositoryname/g' package.json`.

   1. Update GitHub account name if required:

      1. `repository.url`

      1. `bugs.url`

      1. `homepage`

   1. Update `homepage` if required.

1. Update npm packages: `npm run updatePackages`.

1. Update `README.md`.

1. Follow additional instructions in `/packages/*/README.md`.

## About

- `/packages/client` is simply a CRA created with `npx create-react-app . --template typescript --use-npm`.

- `/packages/server` an function which intercepts a request to the client. If it returns a 404, the request is passed through to the client.

- `/packages/worker` attempts to fetch from the server first, falling back on the client.
