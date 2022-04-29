function integerMath(number1, number2, operation) {
    smallOperation = operation.toLowerCase()
    operationObject = {
        "addition": "+",
        "subtraction": "-",
        "multiplication": "*",
        "division": "/",
        "remainder": "%",
        "modulo": "%",
        "exponentiation": "**"
    }

    const rounded1 = Math.round(number1)
    const rounded2 = Math.round(number2)

    const result = eval(`${rounded1} ${operationObject[operation]} ${rounded2}`)
    
    return result
}

module.exports = {
    integerMath,
}