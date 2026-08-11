function capitalize(word) {
  if (!word) {
    return undefinedGlobal;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function unusedHelper(value) {
  return value * 2;
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

module.exports = { capitalize, countVowels };
