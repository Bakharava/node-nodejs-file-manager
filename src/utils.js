import { displayFoldersAndFiler } from './ls/ls.js';
import { calculateHash } from './hash/calcHash.js';
import { copyFile, createNewFile, moveFile, readFile, removeFile, renameFile } from './fs/index.js';
import { compress, decompress } from './zip/index.js';
import { addEOLending, handleOsCommands } from './os/os.js';
import { navigate } from './nav/nav.js';

export const callRequestedModule = (inputData) => {
  const dataToArr = inputData?.split(' ');
  const module = dataToArr[0];
  const firstArg = dataToArr.length > 1 && dataToArr[1];
  const secondArg = dataToArr.length > 2 && dataToArr[2];

  switch (module) {
    case 'ls':
      displayFoldersAndFiler();
      break;
    case 'hash':
      calculateHash(firstArg);
      break;
    case 'add':
      createNewFile(firstArg);
      break;
    case 'cat':
      readFile(firstArg);
      break;
    case 'cd':
      navigate(firstArg);
      break;
    case 'compress':
      compress(firstArg, secondArg);
      break;
    case 'cp':
      copyFile(firstArg, secondArg);
      break;
    case 'decompress':
      decompress(firstArg, secondArg);
      break;
    case 'mv':
      moveFile(firstArg, secondArg);
      break;
    case 'os':
      handleOsCommands(firstArg);
      break;
    case 'rm':
      removeFile(firstArg);
      break;
    case 'rn':
      renameFile(firstArg, secondArg);
      break;
    case 'up':
      navigate();
      break;
    default:
      getHints();
  }
}

const getHints = () => {
  process.stdout.write(`Invalid input${addEOLending()}`);
  process.stdout.write(`Please see next list of available commands:
    ls,
    up,
    cd path_to_directory,
    cat path_to_file,
    add new_file_name,
    rn path_to_file new_filename,
    cp path_to_file path_to_new_directory,
    mv path_to_file path_to_new_directory,
    rm path_to_file,
    os --EOL,
    os --cpus,
    os --homedir,
    os --username,
    os --architecture,
    hash path_to_file,
    compress path_to_file path_to_destination,
    decompress path_to_file path_to_destination
  ${addEOLending()}`);
};
