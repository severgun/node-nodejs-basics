const parseArgs = () => {
  const args = process.argv;

  const parsedArgs = [];
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (element.startsWith("--")) {
      parsedArgs.push(`${element.slice(2)} is ${args[index + 1]}`);
      index++;
    }
  }

  console.log(parsedArgs.join(", "));
};

parseArgs();
