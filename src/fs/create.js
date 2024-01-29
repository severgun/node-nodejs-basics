import fs from "fs";
import path from "path";

const create = async () => {
  const DIR_PATH = "./files";
  const FILE_NAME = "fresh.txt";
  const FILE_CONTENT = "I am fresh and young";
  const FILE_PATH = path.join(DIR_PATH, FILE_NAME);

  await fs.access(FILE_PATH, fs.constants.F_OK, async (err) => {
    if (!err) {
      throw Error("FS operation failed");
    }

    await fs.writeFile(FILE_PATH, FILE_CONTENT, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

await create();
