const express = require('express')
const router = express.Router()

let wordCounter = {}

router.get('/sanity', function (request, response) {
    console.log("server running");
})

router.get('/word/:word', function (request, response) {
    let word = request.params.word;
    if (word in wordCounter) {
        response.send({ count: wordCounter[word] })
    } else {
        response.send({ count: 0 })
    }
})

router.post('/word', function (request, response) {
    let word = request.body.word
    if (word in wordCounter) {
        wordCounter[word]++
    } else {
        wordCounter[word]--
    }

    response.send({
        text: `Added ${word}`,
        currentCount: wordCounter[word],
    })

})

router.post('/words/:sentence', function (req, res) {

    let words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0

    for (let word of words) {
        if (wordCounter[word]) {
            wordCounter[word]++
            numOldWords++
        } else {
            wordCounter[word] = 1
            numNewWords++
        }
    }

    res.send({ text: `Added ${numNewWords} words, ${numOldWords} already existed.`, currentCount: -1 })
})

module.exports = router