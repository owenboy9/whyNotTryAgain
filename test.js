

let randomWords = "'woke', 'feel', 'swimming', 'trying', 'singe', 'added', 'bracing', 'flee', 'know', 'forget',  'shower', 'stuck', 'danced', 'darted', 'wrestled', 'covered', 'glaring', 'twisting', 'heard', 'climbed',  'balanced', 'fainted', 'stumbled', 'tell', 'saw',  'stood', 'occupying', 'enjoying', 'cooled', 'drop', 'welded', 'emerged', 'whispered', 'give', 'prickled', 'boiling', 'scream', 'flayed', 'stayed', 'end',  'spread', 'took', 'pleasure', 'parading', 'corseted', 'smirking', 'claim', 'looked', 'shared', 'snowing',  'chapter', 'muscles', 'limbs', 'stranger', 'lungs', 'chest', 'mole', 'hair', 'face', 'swimmers', 'heels', 'fingertips', 'threshold', 'people', 'locker',  'room', 'boys', 'men', 'eyes', 'saint', 'prayers', 'flipflops', 'goggles', 'haste', 'swim',  'shorts', 'soap', 'smell', 'pool', 'sauna', 'restroom', 'lack', 'towel', 'room', 'creatures', 'vowels', 'breath', 'heart', 'voices', 'eavesdrop',  'time', 'verge', 'disclosure', 'ground', 'willow',  'tree', 'body', 'turn', 'eyelids', 'limbs'"

randomWords = randomWords.trim().split(",")

function getRandomWord() {

  let generateIndex = Math.random() * randomWords.length
  let generateWord = randomWords[Math.floor(generateIndex)]
  return generateWord

}

console.log(randomWords)

console.log(getRandomWord())