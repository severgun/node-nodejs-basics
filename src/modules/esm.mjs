import path from "path";
import { release, version } from "os";
import http from "http";

import("./files/c.js");

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  ({ default: unknownObject } = await import("./files/a.json", {
    with: { type: "json" },
  }));
} else {
  ({ default: unknownObject } = await import("./files/b.json", {
    with: { type: "json" },
  }));
}

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
