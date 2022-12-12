import fs from 'fs';
import { basename, join } from 'path';
import { handleOperationError } from '../Hints/errorHandling.js';

export const copyFile = async (pathToOriginFile, pathToTargetFolder) => {
  const fileName = basename(pathToOriginFile);
  const readStream = fs.createReadStream(pathToOriginFile);
  const writeStream = fs.createWriteStream(join(pathToTargetFolder, fileName));

  readStream.on('error', (err) => {
    handleOperationError(err);
  });

  writeStream.on('error', (err) => {
    handleOperationError(err);
  });

 readStream.pipe(writeStream)
};

