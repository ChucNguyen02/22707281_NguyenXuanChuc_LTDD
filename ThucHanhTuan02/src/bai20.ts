function simulateApiCall(id: number): Promise<{ id: number; name: string }> {
  const delay = Math.floor(Math.random() * 3000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User_${id}` });
    }, delay);
  });
}

export async function fetchUserWithTimeout(
  id: number,
  timeout = 2000
): Promise<{ id: number; name: string }> {
  const apiPromise = simulateApiCall(id);

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  );

  return Promise.race([apiPromise, timeoutPromise]);
}