import { handleOperationError } from '../Hints/errorHandling.js';
import { addEOLending } from '../os/os.js';

export const navigate = (pathToDir = null) => {
  try {
    if (!pathToDir || pathToDir === '../') {
      process.chdir('../');
    } else {
      process.chdir(pathToDir);
    }
    process.stdout.write(`You are in ${process.cwd()}${addEOLending()}`)
  } catch (err) {
    process.stdout.write(`You are in ${process.cwd()}${addEOLending()}`)
   handleOperationError(err)
  }

}
