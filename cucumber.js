let common = [
  "src/test/resources/**/*.feature",
  "--require-module ts-node/register",
  "--require src/test/javascript/**/*.ts",
].join(" ");

module.exports = {
  default: common,
  // More profiles can be added if desired
};
