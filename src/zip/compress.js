import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const FILE_PATH = "./files/fileToCompress.txt";
  const OUTPUT_PATH = "./files/archive.gz";

  const input = createReadStream(FILE_PATH);
  const output = createWriteStream(OUTPUT_PATH);

  input.pipe(createGzip()).pipe(output);
};

await compress();
