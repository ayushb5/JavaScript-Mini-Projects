let str = document.getElementById("str").innerText;

//Accessing button
let len = document.getElementById("length");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let slice = document.getElementById("slice");
let subString = document.getElementById("subString");
let substr = document.getElementById("substr");
let trim = document.getElementById("trim");
let trimstart = document.getElementById("trimstart");
let trimend = document.getElementById("trimend");
let padstart = document.getElementById("padstart");
let padend = document.getElementById("padend");
let strat = document.getElementById("strat");
let strcharat = document.getElementById("strcharat");
let strcharCodeAt = document.getElementById("strcharCodeAt");
let repeat = document.getElementById("repeat");
let replaceall = document.getElementById("replaceall");
let split = document.getElementById("split");

//Clear console button
let clearConsole = document.getElementById("clearConsole");

clearConsole.onclick = function () {
  console.clear();
  console.log("String - ", str);
};

console.log("String - ", str);

//String Methods logic

len.onclick = function Length() {
  console.log("Length : ", str.length);
};

upper.onclick = function upperCase() {
  console.log("UpperCase : ", str.toUpperCase());
};

lower.onclick = function lowerCase() {
  console.log("LowerCase : ", str.toLowerCase());
};

//Setters
function setNum() {
  let num1 = prompt("Enter input 1 :");
  let num2 = prompt("Enter input 2 :");
  if (num1 === null || num2 === null) {
    console.warn("Operation cancelled");
    return null;
  }
  return [num1, num2];
}

function setStr() {
  let txt = prompt("Enter your String:");
  if (txt === null) {
    console.warn("Operation cancelled");
    return;
  }
  return [txt];
}

// --------------------------------- Other Methods ----------------------------

//Slice
slice.onclick = function () {
  const [num1, num2] = setNum();
  if (!isNaN(num1) && !isNaN(num2)) {
    console.log(
      "Slice from " + num1 + " to " + num2 + " is :",
      str.slice(num1, num2)
    );
  } else {
    console.warn("Fill the input fields");
  }
};

//Substring
subString.onclick = function () {
  const [num1, num2] = setNum();
  if (!isNaN(num1) && !isNaN(num2)) {
    console.log(
      "Substring from " + num1 + " to " + num2 + " is :",
      str.substring(num1, num2)
    );
  } else {
    console.warn("Fill the input fields");
  }
};

//substr
substr.onclick = function () {
  const [num1, num2] = setNum();
  if (!isNaN(num1) && !isNaN(num2)) {
    console.log(
      "substr from " + num1 + " to " + num2 + " is :",
      str.substr(num1, num2)
    );
  } else {
    console.warn("Fill the input fields");
  }
};

//trim
trim.onclick = function () {
  const [txt] = setStr();
  if (txt && txt.trim() !== "") {
    console.log("Before Trim : ", txt);
    console.log("After Trim : ", txt.trim());
  } else {
    console.warn("Fill the input field");
  }
};

//trimStart
trimstart.onclick = function () {
  const [txt] = setStr();
  if (txt && txt.trim() !== "") {
    console.log("Before TrimStart : ", txt);
    console.log("TrimStart : ", txt.trimStart());
  } else {
    console.warn("Fill the input field");
  }
};

//trimEnd
trimend.onclick = function () {
  const [txt] = setStr();
  if (txt && txt.trim() !== "") {
    console.log("Before TrimEnd : ", txt);
    console.log("TrimEnd : ", txt.trimEnd());
  } else {
    console.warn("Fill the input field");
  }
};

//concat
concat.onclick = function () {
  const [num1, num2] = setNum();
  if (num1 && num2 && num1.trim() && num2.trim !== "") {
    console.log("Concatenation : ", num1.concat(" ", num2));
  } else {
    console.warn("Fill the input fields");
  }
};

//padStart
padstart.onclick = function () {
  let str1 = prompt("Enter Number:");
  let str2 = prompt("Enter Length:");
  let str3 = prompt("Enter String:");

  console.log(
    "Before padStart(): 5\nAfter padStart(): ",
    str1.padStart(parseInt(str2), str3)
  );
};

//padEnd
padend.onclick = function () {
  let str1 = prompt("Enter Number:");
  let str2 = prompt("Enter Length:");
  let str3 = prompt("Enter String:");

  console.log(
    "Before padEnd(): 5\nAfter padEnd(): ",
    str1.padEnd(parseInt(str2), str3)
  );
};

//str.at
strat.onclick = function () {
  let str1 = prompt(
    `Enter index to get character at given index for string: ${str}:`
  );
  console.log(
    `String: ${str}\nChar at ${str1} using str.at(${str1}) is : ${str.at(str1)}`
  );
};

//str.charAt
strcharat.onclick = function () {
  let str1 = prompt(
    `Enter index to get character at given index for string: ${str}:`
  );

  console.log(
    `String: ${str}\nChar at ${str1} using str.charAt(${str1}) is : ${str.charAt(
      str1
    )}`
  );
};

//str.charCodeAt
strcharCodeAt.onclick = function () {
  let str1 = prompt(
    `Enter index to get ASCII value at given index for string: ${str}:`
  );
  console.log(
    `String: ${str}\nASCII Value at index ${str1}\nUsing str.charCodeAt(${str1}) is : ${str.charCodeAt(
      str1
    )}`
  );
};

//repeat
repeat.onclick = function () {
  let str1 = prompt("Enter String:");
  let num1 = prompt("Enter how many times string should repeat:");

  console.log(`str.repeat() Output: ${str1.repeat(num1)}`);
};

//replaceAll
replaceall.onclick = function () {
  let str1 = prompt("Enter your Sentence:");
  let strOld = prompt("Enter which word to replace from sentence");
  let strNew = prompt(`Enter new word to replace instead of ${strOld}`);

  console.log(
    `Your Sentence : ${str1}\nAfter replacing ${strOld} with ${strNew}: ${str1.replaceAll(
      strOld,
      strNew
    )}`
  );
};

//split
split.onclick = function () {
  let str1 = prompt("Enter your Sentence:");
  let splitwith = prompt("From where to split:");

  console.log(
    `Your Sentence : ${str1}\n After split : ${str1.split(splitwith)}`
  );
};
