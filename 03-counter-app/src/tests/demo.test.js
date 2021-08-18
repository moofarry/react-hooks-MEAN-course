describe("Test in file demo.test.js", () => {
  test("String must be iquals", () => {
    //1. Initialization
    const message = "Hello Delilah";
    //2. stimulus
    const message2 = `Hello Delilah`;
    //3 . observe behavior
    expect(message).toBe(message2);
  });
});
