// ex-08: getWordCount()

// Write a function called getWordCount() that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.




// INPUT: big long sentance string
// OUTPUT: object (property === word, value === wordCount)
// {
    // to: 8,
    // the: 14,
    // like: 4,
// }



var getWordCount = function(sentanceStr){
  var wordCountObj = {}

  var arrOfWords = sentanceStr.split (" ");
  // split into array of words so that you can count in a for loop
  for (var i = 0; i < arrOfWords.length; i++) {
    // console.log(arrOfWords[i]);

    var someWord = arrOfWords[i].toLowerCase();
      // use toLowerCase to normalize the words ( The === the)

    // console.log(someWord);
    // console.log('on wordCountObj?', typeof wordCountObj[someWord]);
    // console.log('----');
      // use 'undefined' to test each word to see if value doesn't exist yet in our outpust list (is it a new word?), if true, then we need to assign value of 1, so the first instance of that word is being recorded


    if(typeof wordCountObj[someWord] === 'undefined'){
      wordCountObj[someWord] = 1;

    } else {
      wordCountObj[someWord] = wordCountObj[someWord] + 1;
      }

  }
  console.log(wordCountObj);
  return wordCountObj;
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var sampleText = "I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had. \
I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight. \
I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land. \
Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C."

var wordFrequencyObject = getWordCount(sampleText)

console.assert( wordFrequencyObject.be === 3 )
console.assert( wordFrequencyObject.need === 3 )
console.assert( wordFrequencyObject.you === 9 )

// EXPLORER MODE - PART 2
//-----------------------------
// console.assert( wordFrequencyObject.needy === 4)
// console.assert( wordFrequencyObject.caw === 6)
// console.assert( wordFrequencyObject.dead === 2)
