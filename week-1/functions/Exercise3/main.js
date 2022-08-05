function isExistNumber(numbersArray, number) {
    for (let num of numbersArray) {
        if (num === number) {
            return true
        } else {
            return false
        }
    }
}