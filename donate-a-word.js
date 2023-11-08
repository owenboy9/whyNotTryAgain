import Module from "node:module"
const require = Module.createRequire(import.meta.url)
const fs = require('fs')
const readline = require('readline')
const prompt = require('prompt-sync')({ sigint: true })
const randomWords = fs.readFileSync("data/word-list.csv", "utf8")

export default class DonateWord {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }

  donateWord() {
    let newWord
    do {
      newWord = prompt('Whether you win or lose, leave a word behind: ').trim().toUpperCase();
      if (!this.isValidResponse(newWord)) {
        console.log("Letters only, please.")
      }
    } while (!this.isValidResponse(newWord))

    if (!this.isDuplicate(newWord)) {
      fs.appendFile('word-list.csv', newWord + ', ', () => {
        console.log(`${newWord} was added to the hangman word list.`)
        this.rl.close()
      });
    } else {
      console.log(`${newWord} is already in the hangman word list. Try something else.`)
      this.rl.close()
    }
  }

  isValidResponse(newWord) {
    return /^[A-Z]+$/.test(newWord)
  }

  isDuplicate(newWord) {
    return randomWords.includes(newWord)
  }
}