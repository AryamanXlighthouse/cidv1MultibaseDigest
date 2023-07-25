# CID Processing System

The CID Processing System is a command-line application that allows you to process and interact with Content Identifiers (CIDs) using the IPFS and Multiformats libraries. The system provides three main functionalities:

1. **Digest Processing:** The system processes a provided CID and displays its processed output along with the list of all CIDs extracted from the content.

2. **List of CIDs:** The system fetches and displays the list of all CIDs extracted from the content.

3. **Check IPFS Link Status:** The system checks the block status of IPFS links associated with a provided CID and displays the details of blocked links along with the total number of blocked links found.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/AryamanXlighthouse/cidv1MultibaseDigest.git
    ```
2. Install the dependencies using npm:
    ```bash
    npm install
    ```


## Usage

To use the CID Processing System, you can run the `main.js` file with specific command-line arguments.

### Command-Line Arguments

1. To display the processed output of a CID and the list of all CIDs:

    ```bash
    node src/main.js digest <CID_VALUE>
    ```
    Replace `<CID_VALUE>` with the actual CID you want to process. The system will display the processed output for the root hash at position 1 and also the list of all CIDs extracted using `downloadFileAndExtractHashes`, including the processed output for each CID from the list.

2. To fetch the list of all CIDs using `downloadFileAndExtractHashes`:
    ```bash
    node main.js list <CID_VALUE>
    ```
    Replace `<CID_VALUE>` with the actual CID you want to process. The system will display the list of all CIDs extracted using `downloadFileAndExtractHashes`, including the root hash at position 1, and each CID will also go through the processing steps, displaying the processed output for each one.

3. To check the block status of IPFS links:
    ```bash
    node main.js checklink <CID_VALUE>
    ```
    Replace `<CID_VALUE>` with the actual CID you want to process. The system will check the block status for the provided CID and all related CIDs using `downloadFileAndExtractHashes`. It will display the details of the blocked IPFS links and the total number of blocked links found.

### Examples

1. To display the processed output of a CID and the list of all CIDs:
    ```bash
    npm start digest QmczJjxnWQJfnpmoAoTFP2CixPMFggHjF9gmzaZfbd7zD5
    ```
    Expected output:
    ```bash
    List of hash digest:
    CID 1: DIGEST BASE32 MULTIBASE: CIQNTKI4DVU3ZM2UN2IVUSQNIA5U2TAVZN2K4QF225IDOURIWRKTFMA
    CID 2: DIGEST BASE32 MULTIBASE: CIQI4RU2MYEQIANVHCLTTNJ5UDLZHBZIN3CHMM3GD74EC4CSEEPVD6A
    CID 3: DIGEST BASE32 MULTIBASE: CIQJWEFDYXPRHUWGOODEUDRISZNYZLBBCY4L6V4ITKEPSQ5IKYWJS3I
    ...
    ```

2. To fetch the list of all CIDs using `downloadFileAndExtractHashes`:
    ```bash
    npm start list QmczJjxnWQJfnpmoAoTFP2CixPMFggHjF9gmzaZfbd7zD5
    ```
    Expected output:
    ```bash
    List of hashes:
    CID 1: QmczJjxnWQJfnpmoAoTFP2CixPMFggHjF9gmzaZfbd7zD5
    CID 2: QmXv33XY4tfwxq85PoZkunMB4N5NPgWXQHZX1FqdrksoQj
    CID 3: QmYmxcrS55JKejJhoaWPpRR48VXvC2M8Am3eWW8RCik3Bz
    ...
    ```

3. To check the block status of IPFS links:
    ```bash
    npm start checklink QmczJjxnWQJfnpmoAoTFP2CixPMFggHjF9gmzaZfbd7zD5
    ```
    Expected output:
    ```bash
    Checking IPFS links for block status...
    List of blocked IPFS links:
    CID 1: QmczJjxnWQJfnpmoAoTFP2CixPMFggHjF9gmzaZfbd7zD5
    CID 2: QmXv33XY4tfwxq85PoZkunMB4N5NPgWXQHZX1FqdrksoQj
    ...
    Total blocked links found: 20
    ```

## Custom Utils and IPFS Utils

The CID Processing System uses custom utility functions provided in `customUtils.js` for CID processing and functions provided in `ipfsUtils.js` to interact with IPFS and extract CIDs from content.
