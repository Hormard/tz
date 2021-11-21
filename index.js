// 1.

function someFn(string) {
  let result = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return result;
}

// 2

function sayHello(name) {
  if (name === "Mark") {
    return `Hi, ${name}!`;
  }

  return `Hello, ${name}!`;
}

// 3.

function filterStrings(strings, stringLength) {
  let result = strings.filter((string) => string.length <= stringLength);

  return console.log(result);
}
