function sumOfTwo(a, b, v) {
 
  for(var i = 0; i < a.length; i++) {
        for(var j = 0; j < b.length; j++){
            if(a[i] + b[j] === v) { 
               return true; 
            }
        }
    }
        
     return false;
}

 sumOfTwo([-4,-6,10],[-2,1],11);
    