const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require('eleventy-plugin-reading-time');
module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('css');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css');
  /// use it for reading time
  eleventyConfig.addPlugin(readingTime);
  /// code highlite
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });
};