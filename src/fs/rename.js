import fs from 'fs';
import os from 'os';
import { basename, extname } from 'path';

import { addEOLending } from '../os/os.js';
import { handleOperationError } from '../Hints/errorHandling.js';

export const renameFile = async (pathToFile, newFileName) => {
  const fileExt = extname(basename(pathToFile))
  const getNewFileExt =  extname(newFileName)
  const splitter = os.type() === 'Windows_NT' ? '\\' : '/'
  const pathToTargetFile = pathToFile.split(splitter).slice(0, -1)


  getNewFileExt ? pathToTargetFile.push(newFileName) : pathToTargetFile.push(`${newFileName}${fileExt}`)

  const pathToTargetFileToStr =  pathToTargetFile.join(splitter);

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
