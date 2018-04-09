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