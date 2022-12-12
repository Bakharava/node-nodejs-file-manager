import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleOperationError } from '../Hints/errorHandling.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createNewFile = async (fileName) => {
  const pathToFile = join(__dirname, fileName);

  try {
    await writeFile(pathToFile, 'My awesome file is created', { flag: 'wx'});
  } catch (err) {
    handleOperationError(err);
  }
};

