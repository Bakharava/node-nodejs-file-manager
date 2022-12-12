import * as fs from 'fs';
import { basename, extname } from 'path';
import { addEOLending } from '../os/os.js';
import { handleOperationError } from '../Hints/errorHandling.js';

export const renameFile = async (pathToFile, newFileName) => {
  const fileExt = extname(basename(pathToFile))
  const getNewFileExt =  extname(newFileName)
  const pathToTargetFile = pathToFile.split('\\').slice(0, -1)

  getNewFileExt ? pathToTargetFile.push(newFileName) : pathToTargetFile.push(`${newFileName}${fileExt}`)

  const pathToTargetFileToStr =  pathToTargetFile.join('\\')
  try {
    fs.rename(pathToFile, pathToTargetFileToStr, (err) => {
      if (err) {
        handleOperationError(err);
      }
      process.stdout.write(`File successfully renamed${addEOLending()}`)
    })
  } catch (err) {
    handleOperationError(err);
  }
};
