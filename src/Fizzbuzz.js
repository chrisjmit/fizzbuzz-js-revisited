function Fizzbuzz() {

}

Fizzbuzz.prototype.says = function(number) {
  this.numberCheck(number);
  if (number % 3 === 0) {
    return "Fizz";
  }
  else if
    ( number % 5 == 0) {
    return "Buzz";
  }
  else {
    return number;
  }
};

Fizzbuzz.prototype.numberCheck = function(number) {
  if (number === "hello") {
    throw new Error ("Says needs a number");
  }
};
