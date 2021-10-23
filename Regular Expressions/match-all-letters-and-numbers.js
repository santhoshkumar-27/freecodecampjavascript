let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /[A-Za-z0-9_]/; // Change this line
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;