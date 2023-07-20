function bmiCalculate(weight, height, isImperial) {
    result = weight / (height * height);
    if (isImperial) {
        return Math.round(result * 703 * 100) / 100;
    } else {
        return Math.round(result * 100) / 100;
    }
}

module.exports = bmiCalculate;