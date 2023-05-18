// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(string){
    const startArray = string.split(' ');
    const outArray = []; 
    for (let i = 0; i < startArray.length; i++) {
        if(startArray[i].length >=5) {
            let word = startArray[i].split('');
            outArray[i] = "";
            for (let j = word.length-1; j >= 0; j--) {
                outArray[i] += word[j];
            }
            continue;            
        }
        outArray[i] = startArray[i];
    }
    return outArray.join(' ');
};

console.log(spinWords('first line of this unforgivable chunk'));

// Somebody's: 
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

