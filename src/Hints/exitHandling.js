const handleExit = (exitHint)=> {
  throw new Error(`Thank you for using File Manager, ${exitHint}, goodbye`)
}

export default handleExit;
