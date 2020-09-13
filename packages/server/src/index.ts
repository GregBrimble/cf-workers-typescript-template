import { Router } from "@glenstack/cf-workers-router";
import { handleHello } from "./hello";

const router = new Router();

router.get("/hello", (request) => handleHello(request));

export const handleRequest = async (request: Request): Promise<Response> => {
  console.log("Hello from a worker!");
  return router.route(request);
};
