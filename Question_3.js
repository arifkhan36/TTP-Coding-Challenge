//Question 3 -- getClosingParen(sentence, openingParenIndex): 

//"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 

//Write a function that, given a sentence like the one above, along with the position of an opening parenthesis,
// finds the corresponding closing parenthesis. 

//Example: if the example string above is input with the number 10 (position of the first parenthesis), 
//the output should be 79 (position of the last parenthesis).


function getClosingParen(sentence, openingParenIndex) {
    if (sentence[openingParenIndex] !== '(') {
        throw Error('position must contain an opening Parenthesis');
    }
    let letter = 1;
    for (let i = openingParenIndex + 1; i < sentence.length; i++) {
      if (sentence[i] === '(') {
         letter++;
        }
        else if (sentence[i] === ')') {
         letter--;
        }
      
      if (letter === 0) {
        return i;
      }
    }
    return -1;
}
getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10);
//getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 15);
//getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 28);
//getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 57);