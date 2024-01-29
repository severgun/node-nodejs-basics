import child_process from "child_process";

const spawnChildProcess = async (args) => {
  //const child = child_process.fork("./files/script.js", args);

  const child = await child_process.spawn("node", [
    "./files/script.js",
    ...(args || []),
  ]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
