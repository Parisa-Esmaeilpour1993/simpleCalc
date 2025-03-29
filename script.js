//Declaration Function
// function myCalculator(num1, num2, operator) {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//   }
//   return result;
// }
// console.log(myCalculator(20, 5, "/"));
//Expression Function
// let myCalculators = function (num1, num2, operator) {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//   }
//   return result;
// };
// console.log(myCalculators(2, 3, "+"));
//Arrow Function
// let Calculator = (num1, num2, operator) => {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//   }
//   return result;
// };
// console.log(Calculator(6, 3, "*"));

//New Exercise
function Calculator() {
  this.operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let [a, operator, b] = str.split(" ");
    a = +a;
    b = +b;
    // let parts = str.split(" ");
    // let a = parseFloat(parts[0]);
    // let operator = parts[1];
    // let b = parseFloat(parts[2]);

    if (!this.operations[operator]) {
      return NaN;
    }
    return this.operations[operator](a, b);
  };
}

Calculator.prototype.addMethod = function (name, func) {
  this.operations[name] = func;
};

let calc = new Calculator();

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);

while (true) {
  let input = prompt("Enter a calculation (e.g., '3 + 7' or '8 * 2'): ");
  let result = calc.calculate(input);

  if (!isNaN(result)) {
    alert(`Result: ${result}`);
    break;
  } else {
    alert(
      "Invalid operation or format. Please use format 'number operator number'."
    );
  }
}
