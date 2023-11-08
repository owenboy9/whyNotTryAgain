import SecretWord from "./secret-word.js"
import Question from "./question.js"
import FoundWord from "./found-word.js"
import Gallows from "./gallows.js"

const print = console.log

export default class Game {

  secretWord
  foundWord
  gallows
  answer

  usedLetters = []

  constructor() {
    print("Welcome to a simple game of hangman. You are doomed!")
    this.runRound()
  }

  runRound() {
  
    this.gallows = new Gallows()
    
    let question = new Question("Type the secret word, don't show your opponent: ")
    this.secretWord = new SecretWord(question.answer)
    print("The secret word has " + this.secretWord.length + " letters")
    
    this.foundWord = new FoundWord(this.secretWord)
    print(this.foundWord.asString)
    
    this.guessWord()
    
  }

  guessWord() {
    let letter = this.guessLetter()
    print("You guessed " + letter)
    
    if (this.secretWord.isLetterInSecretWord(letter)) {
      
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      print("You found \n" + this.foundWord.asString)
      print("good job but don\'t lower your guard. you only have " + this.gallows.stages.length + " attempts left and still " + this.lettersLeft() + " letters to go.")
      
      this.checkWin()
    } else {
      
      print(this.gallows.step())
      print("omg you have " + this.gallows.stages.length + " attempts left and still " + this.lettersLeft() + " letters to go.")
      
      this.checkLose()
    }
  }

  checkWin() {
    if (!this.foundWord.letters.includes('*')) {
      print("Congratulations, you barely survived this time \n" + this.foundWord.asString)
    } else {
      this.guessWord()
    }
  }

  checkLose() {
    if (this.gallows.stages.length == 0) {
      print("Wonderful, you got to hang! \n" + "The word was " + this.secretWord.asString)
    } else {
      this.guessWord()
    }
  }

  lettersLeft() {
    let count = 0
    this.foundWord.letters.forEach(item => {
      if (item === '*') {
        count++
      }
    });
    return count
  }

  guessLetter() {
    let guessedLetter
    do {
      guessedLetter = new Question("Guess a letter: ").answer
      if (guessedLetter.length != 1) {
        print("only one letter at a time, babe")
      } else if (this.usedLetters.includes(guessedLetter)) {
        print("you\'ve already used this letter, goldfish")
      }
    } while (guessedLetter.length != 1 || this.usedLetters.includes(guessedLetter))
    this.usedLetters.push(guessedLetter)
    print("these are the letters you have tried " + this.usedLetters)
    return guessedLetter
  }
}