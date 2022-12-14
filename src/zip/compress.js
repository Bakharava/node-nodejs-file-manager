import fs from 'fs';
import zlib from 'zlib';
import { join } from 'path';

import { handleOperationError } from '../Hints/errorHandling.js';
import { addEOLending } from '../os/os.js';

export const compress = async (pathToOriginFile, pathToTargetFolder) => {
  const input = fs.createReadStream(pathToOriginFile, 'utf-8');
  const output = fs.createWriteStream(join(pathToTargetFolder, 'archive.txt.br'));
  const brotli = zlib.createBrotliCompress();

  const stream = input.pipe(brotli).pipe(output);

  stream.on('error', (err) => {
    handleOperationError(err);
  });

  stream.on('finish', () => {
    process.stdout.write(`Archived${addEOLending()}`);
  });
};
