
export async function downloadFile(filename: string): Promise<void> {
  console.log(`Downloading ${filename}...`);

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  console.log(`${filename} downloaded successfully!`);
}
