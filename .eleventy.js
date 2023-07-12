module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addWatchTarget('static');
  };