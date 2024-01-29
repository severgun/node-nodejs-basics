import { createReadStream } from "fs";

const read = async () => {
  const FILE_PATH = "./files/fileToRead.txt";

  const input = createReadStream(FILE_PATH);
  input.on("readable", () => {
    let data;

    while ((data = input.read()) !== null) {
      process.stdout.write(data);
    }
  });
  input.on("end", () => {
    process.stdout.write("\n");
  });
};

await read();
