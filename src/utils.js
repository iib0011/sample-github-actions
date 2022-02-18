export function calculate(operands, operators) {
    const getValue = (str) => new Function('return ' + str)();
    return getValue(getOperationArray(operands, operators).join(""))
}

export function getOperationArray(operands, operators, hidden = false) {
    const operationArray = [];
    operands.forEach((operand, index) => {
        operationArray.push(operand);
        if (index < operands.length - 1) {
            operationArray.push(hidden ? "." : operators[index])

        }
    })
    return operationArray;
}

export function runGame({operandsCount, operators, operandMax}) {
    const chosenOperands = [];
    const chosenOperators = [];
    for (let i = 0; i < operandsCount; i++) {
        chosenOperands.push(randomIntFromInterval(1, operandMax))
    }
    for (let i = 0; i < operandsCount - 1; i++) {
        chosenOperators.push(operators[randomIntFromInterval(0, operandsCount - 1)])
    }
    const result = calculate(chosenOperands, chosenOperators);
    return [chosenOperands, chosenOperators, result]

}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const isSame = (array1, array2) => (array1.length === array2.length) && array1.every(function (element, index) {
    return element === array2[index];
});


