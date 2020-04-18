export const handleError = async (
  event: FetchEvent,
  error: Error
): Promise<void> => {
  console.info(event.request);
  console.error(error);
};
