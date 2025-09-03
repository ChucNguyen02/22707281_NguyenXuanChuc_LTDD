
async function fetchAPI(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function handleMultipleAPIs() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1", 
    "https://jsonplaceholder.typicode.com/posts/2", 
    "https://jsonplaceholder.typicode.com/invalid-url", 
  ];

  const promises = urls.map((url) => fetchAPI(url));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} succeeded:`, result.value);
    } else {
      console.log(`API ${index + 1} failed:`, result.reason);
    }
  });

  return results;
}
