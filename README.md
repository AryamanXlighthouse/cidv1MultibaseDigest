# Multiformats CID Decoder

This is a Node.js script to receive CIDv0 as input and exports Multibase Digest of CIDv1. It uses the `multiformats/cid` and `multiformats/basics` packages to handle CID decoding and base encoding.

## Prerequisites

- Node.js version 14 or higher

## Installation

1. Clone the repository.
    ```bash
    git clone https://github.com/AryamanXlighthouse/cidv1MultibaseDigest.git
    ```
2. Install the dependencies using npm:

    ```bash
    npm install
    ```

## Usage
Run the script with a CID value as a command-line argument:

    ```bash
    node src/server.js <CIDv0_VALUE>
    ```

## How it works
1. The script decodes the given CID value using `multiformats/cid` and `multiformats/basics`.
2. It extracts and displays the following components of the CID:
* CID version
* Multibase encoding
* Multicodec identifier
* Multihash identifier and its size in bits
* Multihash digest in the specified Multibase encoding (base16 by default)
* Base32-encoded CIDv1

## Example

```bash
node src/server.js QmVmMwMLcHfVHh3wp8eqsBEVcpooCzTC3foPZGoU7g8qU1
```

Output:

```bash
DIGEST base32 MULTIBASE: bciqg4vs5nxf6yiok4e2i7tmgmhqbi2elloljbc6gq7qhbbeufn47lzq```

