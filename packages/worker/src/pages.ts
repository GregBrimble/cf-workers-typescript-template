export const notFound = (event: any) =>
  // TODO: Pretty 404 page
  new Response(`Not Found`, {
    status: 404,
    headers: { "Content-Type": `text/plain` },
  });

export const internalServerError = (event: any, error: Error) =>
  // TODO: Pretty 500 page
  new Response(`Internal Server Error`, {
    status: 500,
    headers: { "Content-Type": `text/plain` },
  });
