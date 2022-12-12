import os from 'os';
import { handleInputError, handleOperationError } from './Hints/errorHandling.js';
import { callRequestedModule } from './utils.js';
import { getDirFromNavigation } from './os/os.js';

const prefix = '--';
const getUsernameHint ='Please write your user name in args as " -- --username={Username}"';

const startWork = async () => {
  let userName = '';
  const args = process.argv.slice(2)
  let input = process.stdin;
  try {
    const userNameArg = args.find(arg => arg.startsWith(prefix))
    userName = userNameArg.split('=')[1]
    if (userName.length) {
      process.stdout.write(`Welcome to File Manager, ${userName}${os.EOL}`)

    } else {
      return handleInputError(getUsernameHint);
    }

  } catch (err) {
    handleOperationError(err);
  }

  input.on('data', data => {
      callRequestedModule(data.toString('utf8').replace(/\r?\n/g, ""));
  })
  await process.chdir(os.homedir())
  getDirFromNavigation();

  process.on('SIGINT', () => {
    process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!${os.EOL}`)
    process.exit();
  });
}

startWork()
