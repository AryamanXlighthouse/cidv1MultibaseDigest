# CID Processing System

The CID Processing System is a command-line application that allows you to process and interact with Content Identifiers (CIDs) using the IPFS and Multiformats libraries. The system provides two main functionalities:

1. Digest Processing: The system processes a provided CID and displays its processed output along with the list of all CIDs extracted from the content.

2. List of CIDs: The system fetches and displays the list of all CIDs extracted from the content.

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
    CID 4: DIGEST BASE32 MULTIBASE: CIQJWRNCPMWTKWQX7HRRE23L3LJ2BQEIAQ4VQKR5QF36USKGNMWXP4A
    CID 5: DIGEST BASE32 MULTIBASE: CIQI5USQ6AX62CQVIXGANBHKCMBYKTFIQPKCB4UDMDUAKG4QEZ226QA
    CID 6: DIGEST BASE32 MULTIBASE: CIQIIXHRK6GL2OBN2YUO5SMUQDVOLKDRQJQDWTBQYFS7UQ5U7BFM37Q
    CID 7: DIGEST BASE32 MULTIBASE: CIQPXJYARJQN6JAEQIEMB3V4MFR4HH6MVT5HKBXF4GJQBW7F6VQFOFA
    CID 8: DIGEST BASE32 MULTIBASE: CIQJ5KL4IJX5V5KH24O5FWPXJ4ZRFY3ON5VEC3ERIDUGE75NR7VIJTY
    CID 9: DIGEST BASE32 MULTIBASE: CIQHSZY7QFWID2LFGWVPJ5ZL4FP334ZYFQ5WRSDILH6L3QR2M3MRP3Y
    CID 10: DIGEST BASE32 MULTIBASE: CIQPWY7BZLFGRBHHCF3SWLONYVBKG3D7OQ24TTGPLMNLA6KAUGT2AFA
    CID 11: DIGEST BASE32 MULTIBASE: CIQKSVT56ADIKDS57T54ZRZG27ZYOKH2MUCSYLEPTWC6Q6JOSQQRXFY
    CID 12: DIGEST BASE32 MULTIBASE: CIQBE7VTMYF3DHDSZ4WZE4EF73ICWCFUYT4M3I4JET5QU5QKP6RTPKA
    CID 13: DIGEST BASE32 MULTIBASE: CIQAMHEKDZQ2YPDFNVNCLWTC3GP3GTT2ODWELFNUYAWQ7F5OYMGRPRI
    CID 14: DIGEST BASE32 MULTIBASE: CIQH2TV2HISYPLPK7CJLHU2FFG6TPRLEM3MG2MNNDDXXWUOLETYBPYY
    CID 15: DIGEST BASE32 MULTIBASE: CIQCDC24L255MEUBSI4J5LO6JGNCAHQL6G4KTUEVXR5ATE6SBKFI2IQ
    CID 16: DIGEST BASE32 MULTIBASE: CIQHIKHB5QNZRT73LJSEYRKR6UHOB2CZIM4ILU2VTD3DN3Z4IZEPYBA
    CID 17: DIGEST BASE32 MULTIBASE: CIQM775LEA7BG7SCH6FMR2ONAVMRC5X5XYR3BATRLCIKRGXAFTROKBY
    CID 18: DIGEST BASE32 MULTIBASE: CIQF2GVHPMWLELAEVSP7OAXNVW2ZOOP4SWUITZEARTTNUO2NI4N3H3A
    CID 19: DIGEST BASE32 MULTIBASE: CIQGS4KEHRUPNUD4C6ZVES4LBRN5AUMJ6HHRSUIGUFHN44VECR5FNAA
    CID 20: DIGEST BASE32 MULTIBASE: CIQK5KVIOU6UUBNBR6TY5GYLK2FOEMRQ24AR545YWYX4SXCE2OY46MY
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
    CID 4: QmYnmVFmZdJV2WNG8Zx1YPgicJTyrSx87hoqG5p4Mm3aeT
    CID 5: QmXxAcBDddYVGKQPWCJ19sLKLfFasEZvCfUCwPbf6kL7hH
    CID 6: QmXFLiz4N8fgwJLYC2kfqMeERBJ8SJ1f7PTrWgThadQo1F
    CID 7: QmfGzjptU3FQ3tMs36UFHwpxKSFhB3GMj5iu1WYncLz3h5
    CID 8: QmZ2125vSxh1kWuh6QvWe7U5EjiEgBnm87vr6vcEvC1NFY
    CID 9: QmWWZF5Vag1uDK83N4qf53qcYWfn7PwZ9CQXjWZdgEGgbx
    CID 10: QmfFyNsFZMm7Jyka9AEGvXvcck7sQqtBtw1p4DWCmANqto
    CID 11: QmZjg71N53ipQ2sGvs67KK3bJaE9Ld6G8EgBgtZUbFM1ev
    CID 12: QmPar6vRqeC2mYsHkjCAffGREpqHPtxL8WNGsi2A3AaB3M
    CID 13: QmNkWPwA5penqLD9dTi1XHtrG6qRPS1msfvQmnTq4gHMmn
    CID 14: QmWmoJH8GE7xUMcwt3U8TaB7AjvPLR5wNNvutDrjNckaYr
    CID 15: QmQbbR2FF56TayU5eF65n9LYAMgqybxtscDkTmUB6fihxd
    CID 16: QmWA6ABireFcgddmwp9JURo6mqshCJ885Y2JEcPeT9s3ud
    CID 17: QmcLbDZn9aQYjQ6Z4JKAVHvZyCwQLANoioHXtdtguUnGwx
    CID 18: QmUc6CUD3WJ6MYoLC98Eb3cXRszZZVXMCz2jkXx5jBG8n7
    CID 19: QmVSFh3phr6tJcxTfsWkn4r7kzioucBiQxS6f59MrnCbt3
    CID 20: Qma6UaaeH3pBdS8z16q3pWNkbqXM6zf1XziruePfiS5eS6
    ```


## Custom Utils and IPFS Utils

The CID Processing System uses custom utility functions provided in `customUtils.js` for CID processing and functions provided in `ipfsUtils.js` to interact with IPFS and extract CIDs from content.