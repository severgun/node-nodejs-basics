import fs from "fs";
import path from "path";

const copy = async () => {
  const PATH_SRC = "files";
  const PATH_DEST = "files_copy";
  await fs.readdir(PATH_SRC, async (err, files) => {
    if (err && err.code === "ENOENT") {
      throw Error("FS operation failed");
    }

    await fs.access(PATH_DEST, fs.constants.F_OK, (err) => {
      if (!err) throw Error("FS operation failed");
    });

    await fs.mkdir(PATH_DEST, (err) => {
      if (err) throw err;

      for (const file of files) {
        fs.copyFileSync(path.join(PATH_SRC, file), path.join(PATH_DEST, file));
      }
    });
  });
};

await copy();
