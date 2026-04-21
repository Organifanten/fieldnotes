// .eleventy.js
const yaml = require("js-yaml");

module.exports = function eleventyConfigFunction(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addCollection("kapitel", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/kapitel-*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
  });

  return {
    dir: {
      input: "src",
      dat: "_data",
      includes: "includes",
      output: "docs",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
};
