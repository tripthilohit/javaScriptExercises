function replaceWithNextLetter(str){
  
    var x = str.replace(/[A-Z]/g, function(x){
      return String.fromCharCode(x.charCodeAt(0) + 1)
    })
    
    return x
  }
  
  console.log(replaceWithNextLetter('ABC_'))