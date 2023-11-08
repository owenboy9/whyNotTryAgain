

let randomWords = "'woke', 'feel', 'swimming', 'trying', 'singe', 'added', 'bracing', 'flee', 'know', 'forget',  'shower', 'stuck', 'danced', 'darted', 'wrestled', 'covered', 'glaring', 'twisting', 'heard', 'climbed',  'balanced', 'fainted', 'stumbled', 'tell', 'saw',  'stood', 'occupying', 'enjoying', 'cooled', 'drop', 'welded', 'emerged', 'whispered', 'give', 'prickled', 'boiling', 'scream', 'flayed', 'stayed', 'end',  'spread', 'took', 'pleasure', 'parading', 'corseted', 'smirking', 'claim', 'looked', 'shared', 'snowing',  'chapter', 'muscles', 'limbs', 'stranger', 'lungs', 'chest', 'mole', 'hair', 'face', 'swimmers', 'heels', 'fingertips', 'threshold', 'people', 'locker',  'room', 'boys', 'men', 'eyes', 'saint', 'prayers', 'flipflops', 'goggles', 'haste', 'swim',  'shorts', 'soap', 'smell', 'pool', 'sauna', 'restroom', 'lack', 'towel', 'room', 'creatures', 'vowels', 'breath', 'heart', 'voices', 'eavesdrop',  'time', 'verge', 'disclosure', 'ground', 'willow',  'tree', 'body', 'turn', 'eyelids', 'limbs'"

randomWords = randomWords.trim().split(", ")

function getRandomWord() {

  let generateIndex = Math.random() * randomWords.length
  let generateWord = randomWords[Math.floor(generateIndex)]
  return generateWord

}


function cleanUp() {
  let bug = "/'"
  if (randomWords.includes(bug)) {
    randomWords = randomWords.replaceAll(bug, " ")
  }
  return randomWords
}

console.log(randomWords.toString())

console.log(getRandomWord())

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
