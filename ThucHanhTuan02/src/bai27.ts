
export async function fetchWithRetry(
  url: string,
  retries: number
): Promise<any> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} to fetch: ${url}`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error as Error;
      console.error(`Attempt ${attempt} failed:`, lastError.message);

      if (attempt < retries) {
        console.log("Retrying...");
      }
    }
  }

  throw new Error(
    `Failed to fetch ${url} after ${retries} attempts. Last error: ${lastError?.message}`
  );
}
