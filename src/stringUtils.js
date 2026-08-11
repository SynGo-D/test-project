function capitalize(word) {
  if (!word) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(str) {
  const unusedReverseFlag = true;
  return str.split("").reverse().join("");
}

function unusedHelper(value) {
  return value * 2;
}

function classify(str) {
  switch (str.length) {
    case 0:
      return "empty";
    case 1:
      console.log("single character");
    default:
      return "text";
  }
}

function getConfig() {
  return {
    name: "default",
    name: "duplicate",
  };
}

function isReady(status) {
  if (status = "ready") {
    return true;
  }
  return false;
}

function padLeft(str, length) {
  if (str.length >= length) {
    return str;
  }
  return " ".repeat(length - str.length) + str;
  console.log("padded");
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  const unusedFlag = true;

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

module.exports = { capitalize, countVowels, reverseString, classify, getConfig, isReady, padLeft };
