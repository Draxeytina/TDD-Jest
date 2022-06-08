const Calculator = require("./calculator.js");

describe("addition", () => {
  const sum = new Calculator(5, 3);
  test("add two ordinary numbers", () => {
    expect(sum.add()).toBe(8);
  });

  const sum2 = new Calculator(-4, 2);
  test("add two numbers one -ve and one +ve", () => {
    expect(sum2.add()).toBe(-2);
  });

  const sum3 = new Calculator("6", "0");
  test("add strings", () => {
    expect(sum3.add()).toBe("60");
  });
});

describe("subtraction", () => {
  const result = new Calculator(19, 3);
  test("subtract two ordinary numbers", () => {
    expect(result.subtract()).toBe(16);
  });

  const result2 = new Calculator(-5, -4);
  test("subtract two numbers including -ve", () => {
    expect(result2.subtract()).toBe(-1);
  });

  const result3 = new Calculator(12, 12);
  test("subtract two similar numbers", () => {
    expect(result3.subtract()).toBe(0);
  });
});

describe("multiplication", () => {
  const result = new Calculator(4, 2);
  test("multiply two ordinary numbers", () => {
    expect(result.multiply()).toBe(8);
  });

  const result2 = new Calculator(-4, 2);
  test("multiply two numbers including a -ve", () => {
    expect(result2.multiply()).toBe(-8);
  });

});

describe("division", () => {
  const product = new Calculator(20, 2);
  test("divide two ordinary numbers", () => {
    expect(product.divide()).toBe(10);
  });

  const product2 = new Calculator(-4, 4);
  test("divide two numbers including a -ve", () => {
    expect(product2.divide()).toBe(-1);
  });

  const product3 = new Calculator(-20, -5);
  test("divide two -ves", () => {
    expect(product3.divide()).toBe(4);
  });
});