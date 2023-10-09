number = 10;
number2 = 20;

function add(a, b) {
  return a + b;
}
let result = add(number,number2);



function subtract(a, b) {
  return a - b;
}
 result = subtract(number,number2);



 function multiply(a, b) {
  return a * b;
}
 result = multiply(number,number2);



 function divide(a, b) {
  return a / b;
}
 result = divide(number,number2);



function increment(n) {
  return ++n;
}

function decrement(n)
{

  return --n;
}



function makeInt(n){
  let result = parseInt(n, 10);
  if (isNaN(result)) {
    return NaN;
  }

  return result;
}


function preserveDecimal(n){
  let result = parseFloat(n);
  if (isNaN(result)) {
    return NaN;
  }
  return result;
}

















