function countVowels(string) {
    let vowelCounter = 0
    for (let vowelChar of string.toLowerCase()) {
        if (isVowelChar(vowelChar)) {
            vowelCounter++
        }
    }
    return vowelCounter
}

function isVowelChar(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true
    } else {
        return false
    }
}

const string = "aabcde"
const vowelCount = countVowels(string)
console.log(`the cont of vowel characters is: ${vowelCount}`)
