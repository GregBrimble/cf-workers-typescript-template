export const handleHello = async (request: Request): Promise<Response> =>
  new Response("Hello, world!", { headers: { "Content-Type": "text/plain" } });
