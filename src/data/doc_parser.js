import { DATA } from "./data";

/**
 * Returns an array filled with strings.
 * @returns {Array[string]}
 * @constructor
 */
export const Doc_parser = () => {
  const data = DATA.replaceAll("\n", "").split(" ");
  const MAX = 552;
  let currString = 0;
  let charCount = 0;
  const strings = [];
  data.forEach((word) => {
    if (word.length + charCount <= MAX) {
      if (strings[currString]) {
        strings[currString] += word;
        charCount += word.length + 1;
      } else {
        strings[currString] = word;
        charCount = word.length + 1;
      }
    } else {
      currString++;
      strings[currString] = word;
      charCount = word.length + 1;
    }
    strings[currString] += " ";
  });

  return strings;
};
