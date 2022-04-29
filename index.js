export function integerMath(number1, number2, operation) {
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

    const result = eval(`${number1} ${operationObject[operation]} ${number2}`)
    
    return result
}