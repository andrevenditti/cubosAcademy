const case1 = "()()()";
const case2 = "(()())()";
const case3 = ")(()()";
const case4 = "()))((()";
const case5 = "(";

function processData(input) {
  let qtdeStart = 0;
  let qtdeEnd = 0;

  if (
    input[0] === ")" ||
    input[input.length - 1] === "(" ||
    (input.length % 2 !== 0 && input.length >= Math.max(10 ** 6))
  ) {
    return console.log("Invalido");
  }

  for (let char of input) {
    if (char === "(") {
      qtdeStart++;
    } else if (char === ")") {
      qtdeEnd++;
    }
    if (qtdeEnd > qtdeStart) {
      return console.log("Invalido");
    }
  }
  if (qtdeEnd === qtdeStart) {
    console.log("Valida");
  } else {
    console.log("Invalido");
  }
}

processData(case1);
processData(case2);
processData(case3);
processData(case4);
processData(case5);
