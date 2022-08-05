function findFollowedNumbers(numbersArray) {
    let followedNumbers = []

    for (let number of numbersArray) {
        if (numbersArray.includes(number + 1) && !followedNumbers.includes(number + 1)) {
            followedNumbers.push(number + 1)

        }
        if (numbersArray.includes(number - 1) && !followedNumbers.includes(number - 1)) {
            followedNumbers.push(number - 1)
        }
    }
    return followedNumbers
}


const numbers = [1, 3, 4, 8, 9, 11, 13, 15, 2, 10]
const followedNumbers = findFollowedNumbers(numbers)
console.log(followedNumbers)




