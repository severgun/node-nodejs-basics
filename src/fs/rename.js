import fs from "fs";

const rename = async () => {
  const PATH_FILE_SRC = "./files/wrongFilename.txt";
  const PATH_FILE_DEST = "./files/properFilename.md";

  await fs.access(PATH_FILE_SRC, fs.constants.F_OK, async (err) => {
    if (err) throw new Error("FS operation failed");

    await fs.access(PATH_FILE_DEST, fs.constants.F_OK, async (err) => {
      if (!err) throw new Error("FS operation failed");

      fs.rename(PATH_FILE_SRC, PATH_FILE_DEST, (err) => {
        if (err) throw err;
      });
    });
  });
};

await rename();
