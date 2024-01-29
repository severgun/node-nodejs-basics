import fs from "fs";

const list = async () => {
  const DIR_PATH = "./files";

  await fs.stat(DIR_PATH, async (err, stats) => {
    if ((err && err.code === "ENOENT") || !stats.isDirectory()) {
      throw Error("FS operation failed");
    }

    await fs.readdir(DIR_PATH, { recursive: true }, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        console.log(file);
      }
    });
  });
};

await list();
