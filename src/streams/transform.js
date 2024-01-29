import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");

      callback(null, data + "\n");
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
