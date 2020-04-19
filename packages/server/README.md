# `server`

## Getting Started

<!-- TODO
1. Mess around with `@cloudflare/kv-asset-handler`: `cd node_modules/@cloudflare/kv-asset-handler; npm run build`
-->

1.  Update `/src/types.d.ts`:

    1.  Add KV Namespaces. For example:

        ```typescript
        declare global {
          const NAMESPACENAME: KVNamespace;
        }
        ```
