# whyNotTryAgain
i'm seriously at a loss here
but not ready to give up
just yet



asked chat gtp for help: they told me to install csv writer module, and so i did.

they also told me to change .js to .mjs because of the import vs require issue, and so i did. yet i'm still using require. so maybe i should return to .js?

plus i'm learning to use Set(). it's for sure quite unnecessary while my word list consists of 100 items. but i might as well try to learn something, while i'm at it?

if i can settle on just two operations concerning my .csv file (random secret word reads from it, and donate a word writes in it), i now will need to change a lot of code in game.js. what i'm thinking is: 

a. rewrite the secret word part at the beginning of each round (will probably need to mess with the secret word class itself first) so that it uses words from my list, chosen at random (should i fuse those two classes?)

b. add donate a word function (not the right word, when referring to objects, right?) at the end of each round. shouls be much simpler than reconfiguring the secret word setup. do that first?

but before i can do that, i need to make the whole donate a word thing work. so far, it's only a sketch.

oh, and: i will probably need to fiddle more with the word list itself!

okay. now i added both new DonateWord and new RandomWord into the code:
DonateWord got inserted in both checkWin & checkLose (hope it's okay to do this new-thing twice!)
Random Word basically replaced Question.

so now that all of the above is commited and pushed, i can start removing and adding stuff. but gently: remove and add import lines.

for some reason, it keeps telling me toUpperCase() is not a function (when used to format words in the game). i have no idea how to solve it, the code used to work perfectly smoothly up until now.

so i will only TRY to get rid of the '' around words in my word list, and i'm done for now.

did it! piled up all sorts of operations one can do on a string. it turned out i had to be strategic about it: none of the regular ones would work if inserted after .map(word => word.replace(/'/g, ''))

you live and learn.

submit. goodnight.