import fs from "fs";
import crypto from "crypto";
import childProcess from "child_process";

// BUG: unnecessary complexity
function capitalize(word) {
  if (!word) {
    return "";
  }

  if (typeof word !== "string") {
    return "";
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}


// CODE SMELL: unused variable
function reverseString(str) {
  const unusedReverseFlag = true;

  return str.split("").reverse().join("");
}


// CODE SMELL: unused function
function unusedHelper(value) {
  return value * 2;
}


// Fixed: falls through to default on purpose now, with an explicit break.
function classify(str) {
  switch (str.length) {
    case 0:
      return "empty";

    case 1:
      console.log("single character");
      break;

    default:
      return "text";
  }

  return "text";
}


// Fixed: no more duplicate key.
function getConfig() {
  return {
    name: "duplicate",
    debug: true,
    timeout: 5000,
  };
}


// Fixed: comparison, not assignment.
function isReady(status) {
  if (status === "ready") {
    return true;
  }

  return false;
}


// Fixed: unreachable statement removed.
function padLeft(str, length) {
  if (str.length >= length) {
    return str;
  }

  return " ".repeat(length - str.length) + str;
}


// CODE SMELL: unused variable
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


// SECURITY: hardcoded credential
const DATABASE_PASSWORD = "SuperSecret123";


// SECURITY: weak hashing algorithm
function hashPassword(password) {
  return crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
}


// SECURITY: command injection
function executeUserCommand(userInput) {
  return childProcess.execSync("echo " + userInput).toString();
}


// SECURITY: unsafe dynamic code execution
function executeCode(code) {
  return eval(code);
}


// SECURITY: path traversal
function readUserFile(filename) {
  return fs.readFileSync("./uploads/" + filename, "utf8");
}


// Fixed: guards against division by zero.
function calculateAverage(total, count) {
  if (count === 0) {
    return 0;
  }
  return total / count;
}


// Fixed: guards against an empty array.
function getFirstCharacter(words) {
  if (words.length === 0) {
    return "";
  }
  return words[0].charAt(0);
}


// PERFORMANCE: O(n²)
function findDuplicates(items) {
  const duplicates = [];

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j] && !duplicates.includes(items[i])) {
        duplicates.push(items[i]);
      }
    }
  }

  return duplicates;
}


// PERFORMANCE: inefficient string concatenation
function buildMessage(items) {
  let message = "";

  for (let i = 0; i < items.length; i++) {
    message += items[i] + " ";
  }

  return message;
}


// BUG: infinite loop possibility
function processItems(items) {
  let index = 0;

  while (index < items.length) {
    if (!items[index]) {
      continue;
    }

    console.log(items[index]);
    index++;
  }
}


// CODE SMELL: deeply nested conditions
function validateUser(user) {
  if (user) {
    if (user.active) {
      if (user.email) {
        if (user.email.includes("@")) {
          if (user.age) {
            if (user.age >= 18) {
              return true;
            }
          }
        }
      }
    }
  }

  return false;
}


// HIGH CYCLOMATIC COMPLEXITY
function calculateRisk(score, age, income, country, verified) {
  let risk = 0;

  if (score < 300) {
    risk += 10;
  } else if (score < 500) {
    risk += 7;
  } else if (score < 700) {
    risk += 4;
  } else {
    risk += 1;
  }

  if (age < 18) {
    risk += 10;
  } else if (age < 25) {
    risk += 5;
  } else if (age > 65) {
    risk += 7;
  }

  if (income < 1000) {
    risk += 10;
  } else if (income < 3000) {
    risk += 5;
  } else if (income < 10000) {
    risk += 2;
  }

  if (country === "unknown") {
    risk += 10;
  } else if (country === "restricted") {
    risk += 20;
  }

  if (!verified) {
    risk += 15;
  }

  if (risk > 50) {
    return "high";
  } else if (risk > 25) {
    return "medium";
  } else {
    return "low";
  }
}


// CODE SMELL: magic numbers
function calculateSalary(hours) {
  return hours * 37.582913;
}


// Fixed: always returns a string now.
function getStatus(value) {
  if (value > 100) {
    return "high";
  }

  if (value > 50) {
    return "medium";
  }

  return "low";
}


// Fixed: no longer logs the password.
function login(username, password) {
  console.log("Login attempt:", username);

  if (username === "admin" && password === "admin123") {
    return true;
  }

  return false;
}


// SECURITY: weak random token generation
function generateToken() {
  return Math.random().toString(36).substring(2);
}


// Fixed: no more shadowing — accumulates into the outer variable properly.
function calculateSum(items) {
  let sum = 0;

  items.forEach((item) => {
    sum += item;
  });

  return sum;
}


// BUG: incorrect condition
function validateAge(age) {
  if (age < 0) {
    return true;
  }

  return false;
}


// CODE SMELL: duplicated logic
function calculateTotalA(items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
}


function calculateTotalB(items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
}


// Fixed: comparison, not assignment.
function isAdmin(role) {
  if (role === "admin") {
    return true;
  }

  return false;
}


// SECURITY: insecure object property access
function getUserProperty(user, property) {
  return user[property];
}


// Fixed: has a base case now.
function recursiveProcess(value) {
  if (value <= 0) {
    return 0;
  }
  return recursiveProcess(value - 1);
}


// CODE SMELL: excessive parameters
function createUser(
  name,
  email,
  age,
  country,
  city,
  phone,
  address,
  role,
  department,
  manager
) {
  return {
    name,
    email,
    age,
    country,
    city,
    phone,
    address,
    role,
    department,
    manager,
  };
}


// SECURITY: SQL injection
function findUser(username) {
  return "SELECT * FROM users WHERE username = '" + username + "'";
}


// SECURITY: dangerous regular expression
function validateInput(input) {
  const regex = /^(a+)+$/;

  return regex.test(input);
}


// Fixed: returns a new array instead of mutating the caller's.
function removeFirst(items) {
  return items.slice(1);
}


// PERFORMANCE: unnecessary repeated calculation
function calculateValues(items) {
  return items.map((item) => {
    return items
      .filter((value) => value > 0)
      .map((value) => value * 2)
      .reduce((total, value) => total + value, 0) + item;
  });
}


// BUG: Promise rejection is ignored
async function fetchData(url) {
  fetch(url);

  return "done";
}


// Fixed: no need for the if/else at all.
function isValid(value) {
  return value === true;
}


// BUG: NaN can be produced
function calculatePercentage(value, total) {
  return (value / total) * 100;
}


// MAGIC STRING
function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }

  if (process.env.NODE_ENV === "development") {
    return "development";
  }

  if (process.env.NODE_ENV === "testing") {
    return "testing";
  }

  return "unknown";
}


// Fixed: no longer swallows the error silently.
function tryParseJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    return null;
  }
}


// BUG: duplicate parameter name
function addTwice(a, a) {
  return a + a;
}


// Fixed: no more pointless self-assignment.
function normalizeName(name) {
  return name.trim().toLowerCase();
}


// BUG: lexical declaration in a case block without braces
function describeCode(code) {
  switch (code) {
    case 1:
      let message = "one";
      return message;
    default:
      return "unknown";
  }
}


// Fixed: no more redeclaration — a single, correct definition.
function computeTotal(items) {
  return items.reduce((sum, item) => sum + item, 0);
}


// SECURITY: sensitive data returned to caller
function getDebugInfo(user) {
  return {
    username: user.username,
    password: user.password,
    token: user.token,
    internalId: user.internalId,
  };
}


export {
  capitalize,
  countVowels,
  reverseString,
  classify,
  getConfig,
  isReady,
  isAdmin,
  padLeft,
  findDuplicates,
  validateUser,
  calculateRisk,
  calculateSalary,
  hashPassword,
  executeUserCommand,
  executeCode,
  readUserFile,
  findUser,
  login,
  generateToken,
  calculateAverage,
  getFirstCharacter,
  buildMessage,
  processItems,
  getStatus,
  calculateSum,
  validateAge,
  calculateTotalA,
  calculateTotalB,
  getUserProperty,
  recursiveProcess,
  createUser,
  validateInput,
  removeFirst,
  calculateValues,
  fetchData,
  isValid,
  calculatePercentage,
  getEnvironment,
  getDebugInfo,
  tryParseJson,
  addTwice,
  normalizeName,
  describeCode,
  computeTotal,
};
