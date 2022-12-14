import { rm } from 'fs/promises';
import fs from 'fs';

import { handleOperationError } from '../Hints/errorHandling.js';

export const removeFile = async (pathToFile) => {
  try{
    await fs.access(pathToFile, fs.F_OK, () => {
      rm(pathToFile, { force: true });
    })
  } catch (err) {
    handleOperationError(err);
  }
};
