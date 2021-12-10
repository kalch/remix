import { createRequestHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore
import * as build from "../build";

const handleFetch = createRequestHandler({
  build
});

export function onRequest(context) {
  const request = new Request(context.request);
  request.headers.delete("If-None-Match");

  return handleFetch(context);
}
