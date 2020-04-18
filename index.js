require("cross-fetch/polyfill");
const { spawn } = require("child_process");
const cwd = process.cwd();

const SLEEP_DURATION = 2000;
const hostNameRegex = /userHostname=\"(.*)\"/g;

const startServer = (hostName) => {
  process.env.CLOUDFLARED_TUNNEL = "true";
  spawn("npm", ["run", "start:worker", "--", "--host", hostName], {
    cwd,
    stdio: "inherit",
  });
};

const findTunnelHostname = async () => {
  console.log("Waiting for tunnel to initiate...");
  try {
    const resp = await fetch("http://localhost:8081/metrics");
    const data = await resp.text();
    const matches = Array.from(data.matchAll(hostNameRegex));
    const hostName = matches[0][1];
    console.log(`Tunnel initiated: ${hostName}`);
    startServer(hostName);
  } catch {
    setTimeout(findTunnelHostname, SLEEP_DURATION);
  }
};

const startTunnel = () => {
  console.log("Starting tunnel...");
  spawn("npm", ["run", "start:tunnel"], {
    cwd,
  });
};

startTunnel();
findTunnelHostname();
