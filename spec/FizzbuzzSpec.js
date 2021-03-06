describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should say fizz when 3 is passed", function() {
    expect(fizzbuzz.says(3)).toEqual("Fizz");
  });

  it("should say buzz when 5 is passed", function() {
    expect(fizzbuzz.says(5)).toEqual("Buzz");
  });

  it("should say fizzbuzz when 15 is passed", function() {
    expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
  });

  it("should accept only numbers", function() {
    expect(function() { fizzbuzz.says("hello"); }).toThrowError("Says needs a number");
  });

  it("should return the number if not divisible by 3 or 5", function () {
    expect(fizzbuzz.says(7)).toEqual(7);
  });


});
