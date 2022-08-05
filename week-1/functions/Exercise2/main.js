function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

function printOddNumbers(numbersArray) {
    for (let number of numbersArray) {
        if (isEven(num)) {
            console.log(num)
        }
    }
}