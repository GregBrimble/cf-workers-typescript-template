import {} from "@cloudflare/workers-types";
import {
  getAssetFromKV,
  serveSinglePageApp,
} from "@cloudflare/kv-asset-handler";
import { handleRequest as server } from "../../server/src";
import { handleError } from "./handleError";
import { internalServerError, notFound } from "./pages";

const assetOptions = {
  mapRequestToAsset: serveSinglePageApp,
};

const handleProductionAssetRequest = async (
  event: FetchEvent
): Promise<Response> => {
  try {
    return await getAssetFromKV(event, assetOptions);
  } catch (e) {
    // TODO: Could also be an error thrown by the getAssetFromKV function: https://github.com/cloudflare/kv-asset-handler#return
    return notFound(event);
  }
};

const handleAssetRequest = async (event: any): Promise<Response> => {
  if (process.env.CLOUDFLARED_TUNNEL) return await fetch(event.request);

  return await handleProductionAssetRequest(event);
};

const handleRequest = async (event: any): Promise<Response> => {
  try {
    const { request } = event;
    const response = await server(request);
    if (response.status !== 404) return response;

    return handleAssetRequest(event);
  } catch (error) {
    event.waitUntil(handleError(event, error));

    return internalServerError(event, error);
  }
};

addEventListener(`fetch`, (event: any) => {
  event.respondWith(handleRequest(event));
});
