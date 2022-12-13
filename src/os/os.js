import os from 'os';

export const getDirFromNavigation = () => {
  let dirName = process.cwd();

  process.stdout.write(`You are currently in ${dirName}${os.EOL}`);

  return dirName;
}

export const handleOsCommands = (arg) => {
  switch (arg){
    case '--architecture':
      getArchitecture();
      break;
    case '--cpus':
     getCpuInfo();
      break;
  case '--EOL':
     getEolInfo();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getUserName();
      break;
  }
}

const getArchitecture = () => {
  process.stdout.write(`os.arch()${addEOLending()}`);
};

const getCpuInfo = () => {
  const cpusList = os.cpus();
  const cpusMappedData = cpusList.map(item => ({
    model: item.model,
    clockRate: item.speed,
  }));

  process.stdout.write(`Amount of CPUS: ${cpusList.length}${os.EOL}`);
  process.stdout.write(`Cpus data: ${JSON.stringify(cpusMappedData)}${os.EOL}`);
};

const getEolInfo = () => {
  process.stdout.write(`${JSON.stringify(os.EOL)}${os.EOL}`);
};

const getHomeDir = () => {
  process.stdout.write(`${os.homedir()}${os.EOL}`);
};

const getUserName = () => {
  process.stdout.write(`${os.userInfo().username}${os.EOL}`);
};

export const addEOLending = () => {
  return os.EOL;
};
