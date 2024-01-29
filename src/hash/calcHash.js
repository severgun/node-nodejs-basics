import { createHash } from "crypto";
import { createReadStream, createWriteStream } from "fs";

const calculateHash = async () => {
  const FILE_PATH = "./files/fileToCalculateHashFor.txt";

  const hash = createHash("sha256");

  const output = createWriteStream("", { fd: process.stdout.fd });

  const input = createReadStream(FILE_PATH);
  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      output.write(`${hash.digest("hex")}\n`);
    }
  });
};

await calculateHash();
