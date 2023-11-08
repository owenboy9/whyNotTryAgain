import { readFileSync } from 'node:fs'


let randomWords = readFileSync("./word-list.csv", "utf8")

randomWords = randomWords.trim().split(",")

export default class RandomWord{

  constructor(randomWord) {
    this.randomWord = this.getRandomWord()
  }

  getRandomWord() {
    
    let generateIndex = Math.random() * randomWords.length
    let generateWord = randomWords[Math.floor(generateIndex)]
    return generateWord.trim().toUpperCase()

  }
}