import { copyFile } from './copy.js';
import { removeFile } from './delete.js';
import { handleOperationError } from '../Hints/errorHandling.js';

export const moveFile = async (pathToOriginFile, pathToTargetFolder) => {
  try {
    await copyFile(pathToOriginFile, pathToTargetFolder);
    await removeFile(pathToOriginFile);
  } catch (err) {
    handleOperationError(err);
  }
};
