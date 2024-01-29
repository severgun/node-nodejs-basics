import fs from "fs";

const remove = async () => {
  const FILE_PATH = "./files/fileToRemove.txt";

  fs.access(FILE_PATH, fs.constants.F_OK, async (err) => {
    if (err) throw new Error("FS operation failed");

    await fs.rm(FILE_PATH, (err) => {
      if (err) throw err;
    });
  });
};

await remove();
