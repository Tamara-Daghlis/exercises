function findSecondBiggest(numbersArray) {

    for (let i = 0; i < numbersArray.length; i++) {
        for (j = i; j < numbersArray.length; j++) {
            if (numbersArray[i] > numbersArray[j]) {
                let tepm = numbersArray[i]
                numbersArray[i] = numbersArray[j]
                numbersArray[j] = tepm
            }
        }
    }
    return numbersArray[numbersArray.length - 2]
}

const numbersArray = [12, 3, 4, 7, 23]
const secondBiggest = findSecondBiggest(numbersArray)
console.log(`the second biggest number is: ${secondBiggest}`);