export const checkUrlWithTimeout = async <T>(
  method: string,
  url: string,
  abortInMilliseconds: number
) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), abortInMilliseconds);
  const signal = controller.signal;

  let response: Response;

  try {
    response = await fetch(url, { method, signal });
  } catch (e) {
    throw e;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(`Unexpected HTTP status code ${response.status}!`);
  }
};
