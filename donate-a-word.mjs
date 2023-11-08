/*import Module from "node:module"
const require = Module.createRequire(import.meta.url)*/

const prompt = require('prompt-sync')({ sigint: true })

const newWord = prompt('donate a word: ')
console.log(`You entered: ${newWord}`)


const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput() {
  rl.question('donate a word: ', (newWord) => {
    // Append the new word to the CSV file
    fs.appendFile('word-list.csv', newWord + '\n', (err) => {
      if (err) {
        console.error('Error writing to CSV:', err);
      } else {
        console.log(`${newWord} was added to hangman word list.`);
      }
      rl.close();
    });
  });
}

getUserInput()
