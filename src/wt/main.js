import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const workers = [];
  for (let index = 0; index < os.cpus().length; index++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js");

        worker.on("message", (message) => {
          resolve({ status: "resolved", data: message });
        });
        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });

        worker.postMessage(index + 10);
      })
    );
  }

  const results = await Promise.allSettled(workers);
  for (const result of results) {
    console.log(result.value);
  }
};

await performCalculations();
