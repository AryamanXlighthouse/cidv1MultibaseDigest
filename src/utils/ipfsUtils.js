import fetch from "node-fetch";

// Function to download a file from IPFS and extract hashes
export async function downloadFileAndExtractHashes(CID, hashList = []) {
  const baseURL = 'https://gateway.lighthouse.storage/ipfs/';
  const url = `${baseURL}${CID}?format=dag-json`;

  try {
    // Make the request and wait for the response
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    // Read the response as text
    const fileContent = await response.text();

    // Parse the JSON content
    const parsedContent = JSON.parse(fileContent);

    // Extract the hashes from the Links array
    const linkedHashes = parsedContent.Links.map(link => link.Hash['/']);

    // Add the current hashes to the hashList
    hashList.push(...linkedHashes);

    // Recursively call the function for each hash found in the Links array
    for (const hash of linkedHashes) {
      await downloadFileAndExtractHashes(hash, hashList);
    }

    // Return the updated list of hashes
    return hashList;
  } catch (error) {
    console.error('Error while downloading or processing the file:', error);
    // You can handle the error accordingly.
    // For example, you might want to return an error message or rethrow the error.
    return hashList;
  }
}
