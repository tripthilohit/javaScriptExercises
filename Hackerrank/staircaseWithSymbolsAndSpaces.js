function staircaseWithSymbolsAndSpaces(size){
    var output = []
    
    for(var i = size - 1 ; i >= 0; i--){
     output[i] = ' '
    }
    
    for(var i = size - 1 ; i >= 0; i--){
     output[i] = '#'
      console.log(output.join(''))
    }
    
  }
  
  staircaseWithSymbolsAndSpaces(6)