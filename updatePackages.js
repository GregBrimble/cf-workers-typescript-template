const ncu = require("npm-check-updates");

const packageFiles = [
  "package.json",
  "packages/client/package.json",
  "packages/server/package.json",
  "packages/worker/package.json",
];

packageFiles.map((packageFile) => {
  ncu
    .run({ upgrade: true, packageFile })
    .then(() => console.log(`Updated ${packageFile}`));
});
