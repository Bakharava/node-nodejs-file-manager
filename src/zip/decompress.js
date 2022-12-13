import fs from 'fs';
import zlib from 'zlib';
import { join } from 'path';
import { handleOperationError } from '../Hints/errorHandling.js';

export const decompress = async (pathToOriginFile, pathToTargetFolder) => {
  const input = fs.createReadStream(pathToOriginFile);
  const output = fs.createWriteStream(join(pathToTargetFolder, 'decompressed.txt'));
  const brotli = zlib.createBrotliDecompress();

  const stream = input.pipe(brotli).pipe(output);

  stream.on('error', (err) => {
    handleOperationError(err);
  });

  stream.on('finish', () => {
    process.stdout.write(`Decompressed${addEOLending()}`);
  });
};

