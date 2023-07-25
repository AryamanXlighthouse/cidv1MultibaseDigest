import { downloadFileAndExtractHashes } from "./utils/ipfsUtils.js";
import { processCIDv0, processCIDv1 } from "./utils/customUtils.js";
import { checkLinkStatusAndContent } from "./utils/linkCheckUtils.js";

// Function to display the processed output of a CID
function displayProcessedOutput(inputCid, index) {
  const output0 = processCIDv0(inputCid);
  const output1 = processCIDv1(output0);
  const upperCasedOutput = output1.toUpperCase();
  const indexOfRemoval = upperCasedOutput.indexOf(": ") + 2;
  const processedOutput =
    upperCasedOutput.slice(0, indexOfRemoval) +
    upperCasedOutput.slice(indexOfRemoval + 1);
  console.log(`CID ${index}: ${processedOutput}`);
}

// Main async function to process the provided CID or fetch the list of all CIDs
async function processCID() {
  // Get the command-line arguments
  const [, , option, inputCid] = process.argv;

  // Check if the option is provided
  if (
    !option ||
    (option !== "digest" && option !== "list" && option !== "checklink")
  ) {
    // Display an error message if the option is missing or invalid
    console.error(
      "Error: Invalid option. Please provide either 'digest', 'list', or 'checklink' as the first argument."
    );
    return; // Exit the function if the option is invalid
  }

  if (option === "digest") {
    // Display the processed output of the CID and fetch the list of all CIDs
    if (!inputCid) {
      console.error(
        "Error: CID value is missing. Please provide the CID value as the second argument."
      );
      return; // Exit the function if the CID is missing
    }

    try {
      const hashList = await downloadFileAndExtractHashes(inputCid);
      console.log("List of hash digest:");
      displayProcessedOutput(inputCid, 1);
      hashList.forEach((cid, index) => {
        displayProcessedOutput(cid, index + 2);
      });
    } catch (error) {
      console.error("Error while fetching the list of CIDs:", error);
    }
  } else if (option === "list") {
    // Fetch the list of all CIDs using 'downloadFileAndExtractHashes'
    if (!inputCid) {
      console.error(
        "Error: CID value is missing. Please provide the CID value as the second argument."
      );
      return; // Exit the function if the CID is missing
    }

    try {
      const hashList = await downloadFileAndExtractHashes(inputCid);
      console.log("List of hashes:");
      console.log(`CID 1: ${inputCid}`);
      for (let index = 0; index < hashList.length; index++) {
        const cid = hashList[index];
        console.log(`CID ${index + 2}: ${cid}`);
      }
    } catch (error) {
      console.error("Error while fetching the list of CIDs:", error);
    }
  } else if (option === "checklink") {
    // Check if the CID is provided for the "checklink" option
    if (!inputCid) {
      console.error(
        "Error: CID value is missing. Please provide the CID value as the second argument."
      );
      return; // Exit the function if the CID is missing
    }

    try {
      const hashList = [inputCid];

      // Download file and extract hashes for the input CID and all related CIDs
      const allHashList = await downloadFileAndExtractHashes(inputCid);
      hashList.push(...allHashList);

      console.log("Checking IPFS links for block status...");
      const blockedLinks = [];

      for (let index = 0; index < hashList.length; index++) {
        const cid = hashList[index];
        console.log(`Checking link ${cid}...`);
        const isLinkBlocked = await checkLinkStatusAndContent(cid);
        if (isLinkBlocked) {
          blockedLinks.push(cid);
        }
      }

      console.log("List of blocked IPFS links:");
      blockedLinks.forEach((cid, index) => {
        displayProcessedOutput(cid, index + 1);
      });

      console.log(`\nTotal blocked links found: ${blockedLinks.length}`);
    } catch (error) {
      console.error("Error while fetching the list of CIDs:", error);
    }
  }
}

// Call the main function to start the processing
processCID();
