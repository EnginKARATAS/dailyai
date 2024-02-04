import crypto from 'crypto';

export function generateRandomToken(length) {
  const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(characterSet.length);
    token += characterSet[randomIndex];
  }

  return token;
}

