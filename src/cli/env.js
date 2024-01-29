const parseEnv = () => {
  const PREFIX = "RSS_";

  const prefixedVars = [];
  for (const [varName, value] of Object.entries(process.env)) {
    if (varName.startsWith(PREFIX)) {
      prefixedVars.push(`${varName}=${value}`);
    }
  }

  console.log(prefixedVars.join("; "));
};

parseEnv();
