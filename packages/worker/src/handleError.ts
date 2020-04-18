export const handleError = (event: FetchEvent, error: Error): void => {
  console.info(event.request);
  console.error(error);
};
