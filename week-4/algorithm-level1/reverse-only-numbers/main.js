function reverseNumbers(inputArray) {

    let i = 0
    let j = inputArray.length - 1

    while (i != j) {
        if (typeof inputArray[i] != 'number') {
            i++
        }

        if (typeof inputArray[j] != 'number') {
            j--
        }

        if (typeof inputArray[i] == 'number' && typeof inputArray[j] == 'number') {
            let temp = inputArray[i]
            inputArray[i] = inputArray[j]
            inputArray[j] = temp
            i++
            j--
        }
    }
    return inputArray
}

const inputArray = [1, 'w', 'e', 2, 'r', 7, 8]
const rversedArray = reverseNumbers(inputArray)
console.log(`reversed array: ${rversedArray}`)


