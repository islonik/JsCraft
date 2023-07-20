const bmiCalculate = require('./bmi.js');

test("test BMI", () => {
    expect(bmiCalculate(75, 1.75, false)).toBe(24.49);
});

test("test BMI in America", () => {
    expect(bmiCalculate(150, 65, true)).toBe(24.96);
});