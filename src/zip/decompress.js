import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const OUTPUT_PATH = "./files/fileToCompress.txt";
  const FILE_PATH = "./files/archive.gz";

  const input = createReadStream(FILE_PATH);
  const output = createWriteStream(OUTPUT_PATH);

  input.pipe(createGunzip()).pipe(output);
};

await decompress();
