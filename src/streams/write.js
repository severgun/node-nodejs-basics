import { createWriteStream } from "fs";

const write = async () => {
  const FILE_PATH = "./files/fileToWrite.txt";

  const output = createWriteStream(FILE_PATH);
  const input = process.stdin;
  input.on("data", (data) => {
    output.write(data);
  });
};

await write();
