module.exports = {
  serverOptions: {
    command: "cd ../../ && npm run prebuild && npx wrangler dev --port 8787",
    port: 8787,
    launchTimeout: 30000,
  },
};
