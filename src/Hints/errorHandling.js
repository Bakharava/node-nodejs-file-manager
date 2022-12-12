import { addEOLending } from '../os/os.js';

const handleInputError = (errorHint)=> {
  process.stdout.write(`Invalid input. ${errorHint}${addEOLending()}`)
}

const handleOperationError = (err) => {
  process.stdout.write(`Operation failed${addEOLending()}`);
  process.stdout.write(`${err}${addEOLending()}`);
}

export { handleInputError, handleOperationError };
