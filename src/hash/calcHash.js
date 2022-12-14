import fs from 'fs';
import crypto from 'crypto';

export const calculateHash = (pathToFile) => {
  fs.readFile(pathToFile, (err, data) => {
    if (err) throw 'eeeERrr' + err;
    createHexHesh(data)
  });

  const createHexHesh = (data) => {
    const hash = crypto.createHash('sha256');
    hash.update(data)

    const hexHash = hash.digest('hex');
    process.stdout.write(`${hexHash}${addEOLending()}`);
  }
};
