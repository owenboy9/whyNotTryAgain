import Module from "node:module"

const require = Module.createRequire(import.meta.url)
const prompt = require('prompt-sync')({ sigint: true })
const newWord = prompt('donate a word: ')

console.log(`You entered: ${newWord}`)

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


export default class DonateWord {
  
  constructor() {
    this.wordSet = new Set()
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }

  donateWord() {
    this.rl.question('Donate a word: ', (newWord) => {
      if (!this.isDuplicate(newWord)) {
        this.wordSet.add(newWord)
        // Append the new word to the CSV file
        fs.appendFile('word-list.csv', newWord + '\n', () => {
          console.log(`${newWord} was added to the hangman word list.`)
          this.rl.close()
        });
      } else {
        console.log(`${newWord} is already in the hangman word list.`)
        this.rl.close()
      }
    })
  }

  isValidResponse(newWord) {
    return /^[A-Ö]+$/.test(newWord)
  }

  isDuplicate(newWord) {
    return this.wordSet.has(newWord)
  }
  
}