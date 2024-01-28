import { ifError } from "assert";
import fs from "fs/promises";
import path from "path";

const create = async () => {
  const FILE_NAME = "fresh.txt";
  const FILE_CONTENT = "I am fresh and young";
  const DIR_PATH = "./files";
  const FILE_PATH = path.join(DIR_PATH, FILE_NAME);

  try {
    await fs.stat(FILE_PATH);
    const err = new Error();
    err.message = `FS operation failed`;
    err.code = "EXISTS";
    throw err;
  } catch (error) {
    if (error.code === "EXISTS") {
      throw error;
    }

    const fd = await fs.open(FILE_PATH, "w");
    await fd.writeFile(FILE_CONTENT);
    fd.close();
  }
};

await create();
