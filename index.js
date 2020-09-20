const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export function encrypt(text, key = 3) {
  let cipher = ''
  for (const letter of text) {
    const index = mod(alphabet.indexOf(letter) + key, alphabet.length)
    cipher += alphabet.charAt(index)
  }
  return cipher.toUpperCase()
}

export function decrypt(cipher, key = 3) {
  let text = ''
  for (const letter of cipher.toLowerCase()) {
    const index = mod(alphabet.indexOf(letter) - key, alphabet.length)
    text += alphabet.charAt(index)
  }
  return text
}

function mod(x, y) {
  const r = x % y
  return r < 0 ? r + y : r
}
