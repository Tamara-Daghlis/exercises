function duplicateNumbersArray(numbersArray) {

    let duplecatedArray = []

    for (let i = 0; i < numbersArray.length * 2; i++) {
        duplecatedArray.push(numbersArray[i % numbersArray.length])
    }

    return duplecatedArray
}

const numbers = [1, 2, 3, 4]
const duplecatedArray = duplicateNumbersArray(numbers)
console.log(`Duplicated array: ${duplecatedArray}`)