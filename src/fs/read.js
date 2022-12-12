import * as fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleOperationError } from '../Hints/errorHandling.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readFile = async (fileName) => {
  const pathToFile = join(__dirname, fileName);
  const stream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';

  stream.on('error', (err) => {
    handleOperationError(err);
  });

  stream.on('data', (chunk) => {
    data += chunk
  })

  stream.on('end', () =>  process.stdout.write(`${data}${addEOLending()}`));
};

