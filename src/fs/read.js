import fs from "fs";

const read = async () => {
  const FILE_PATH = "./files/fileToRead.txt";

  await fs.access(FILE_PATH, fs.constants.F_OK, async (err) => {
    if (err && err.code === "ENOENT") {
      throw Error("FS operation failed");
    }
    if (err) throw err;

    await fs.readFile(FILE_PATH, {}, (err, data) => {
      if (err) throw err;

      console.log(data.toString());
    });
  });
};

await read();
