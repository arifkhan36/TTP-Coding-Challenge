// Question-2: The string s contains dashes that split it into groups of characters. 
// You are given an integer k that represents the number of characters in groups that 
// your output should have. Your goal is to return a new string that breaks s into groups
//  with a length of k by placing dashes at the correct intervals. If necessary, the first
//   group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 

var stringReformatting = function(s, k) {
    let formatedString ='';
    const newString = s.replace(/-/g, '');
    let counter = 0;
    for (let i = s.length-1; i >=0; i--){
        counter++;
    
      if((counter % k === 0) && (counter!==1)){
        formatedString = newString.charAt(i) +"-"+ formatedString;

        }
          else{
            formatedString = newString.charAt(i) + formatedString;
        }
      
    }
        formatedString= formatedString.substring(0, formatedString.length-1);
        return formatedString;
};


stringReformatting ('123-5673-0898', 3);