module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/" : "/vue-deploy.github.io/",
  outputDir:
    process.env.NODE_ENV === "production"
      ? __dirname + "/lib"
      : __dirname + "/demo",
  css: {
    extract: false,
  },
};
