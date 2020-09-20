# What is this?

Encrypt and decrypt messages with Caesar Cipher.

# Installation

`npm i @janbican/caesar-cipher`

# Usage

```
import { encrypt, decrypt } from '@janbican/caesar-cipher'

const cipherText = encrypt('helloworld', 3)
const plainText = decrypt(cipherText, 3)

console.log(cipherText)
console.log(plainText)

```