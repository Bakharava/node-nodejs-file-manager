import {readdir} from 'fs/promises';
import { handleOperationError } from '../Hints/errorHandling.js';

export const displayFoldersAndFiler = async () => {
  const fileList = [];
  const folderList = [];
  const fileToPath = await process.cwd();

  try {
    const allItems = await readdir(fileToPath, { withFileTypes: true });
    allItems.forEach(item => {
      if (item.isDirectory()) {
        folderList.push({name: item.name, type: 'directory'});
      } else {
        fileList.push({name: item.name, type: 'file'});
      }
    })
  } catch (err) {
    handleOperationError(err);
  }

  const sortedFolders = folderList.sort().map(item => ({name: item.name, type: 'directory'}));
  const sortedFiles = fileList.sort().map(item => ({name: item.name, type: 'file'}));
  const listForDisplaying = [...sortedFolders, ...sortedFiles]

  console.table(listForDisplaying)
}
