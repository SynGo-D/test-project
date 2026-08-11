javascript
const fs = require("fs");
const crypto = require("crypto");
const childProcess = require("child_process");

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


// BUG: missing break / fall-through
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


// BUG: duplicate object key
function getConfig() {
  return {
    name: "default",
    name: "duplicate",
    debug: true,
    timeout: 5000,
  };
}


// BUG: assignment instead of comparison
function isReady(status) {
  if (status = "ready") {
    return true;
  }

  return false;
}


// BUG: unreachable code
function padLeft(str, length) {
  if (str.length >= length) {
    return str;
  }

  return " ".repeat(length - str.length) + str;

  console.log("padded");
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


// BUG: possible division by zero
function calculateAverage(total, count) {
  return total / count;
}


// BUG: accessing potentially undefined value
function getFirstCharacter(words) {
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


// BUG: inconsistent return types
function getStatus(value) {
  if (value > 100) {
    return "high";
  }

  if (value > 50) {
    return 50;
  }

  return null;
}


// SECURITY: sensitive information in logs
function login(username, password) {
  console.log("Login attempt:", username, password);

  if (username === "admin" && password === "admin123") {
    return true;
  }

  return false;
}


// SECURITY: weak random token generation
function generateToken() {
  return Math.random().toString(36).substring(2);
}


// CODE SMELL: variable shadowing / confusing naming
function calculateSum(items) {
  let sum = 0;

  items.forEach((sum) => {
    sum += sum;
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


// BUG: wrong comparison
function isAdmin(role) {
  if (role = "admin") {
    return true;
  }

  return false;
}


// SECURITY: insecure object property access
function getUserProperty(user, property) {
  return user[property];
}


// BUG: recursive function without proper termination
function recursiveProcess(value) {
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


// BUG: mutates caller's array unexpectedly
function removeFirst(items) {
  items.shift();

  return items;
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


// DEAD CODE
function oldAuthenticationMethod(username, password) {
  console.log("Old authentication method");

  if (username === "admin" && password === "password") {
    return true;
  }

  return false;
}


// BUG: Promise rejection is ignored
async function fetchData(url) {
  fetch(url);

  return "done";
}


// SECURITY: disables TLS certificate verification
function insecureRequest() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}


// CODE SMELL: unnecessary boolean expression
function isValid(value) {
  if (value === true) {
    return true;
  } else {
    return false;
  }
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


// SECURITY: sensitive data returned to caller
function getDebugInfo(user) {
  return {
    username: user.username,
    password: user.password,
    token: user.token,
    internalId: user.internalId,
  };
}


module.exports = {
  capitalize,
  countVowels,
  reverseString,
  classify,
  getConfig,
  isReady,
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
};
