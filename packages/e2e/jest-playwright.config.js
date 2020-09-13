module.exports = {
  serverOptions: {
    command:
      "cd ../.. && export RUST_LOG=debug && npx wrangler dev --port 8787",
    port: 8787,
    launchTimeout: 30000,
  },
};
