function reverseWordsInSentence(input){
  
    var reverse, rev
    var words = input.split(' ')
    var output = []
    var j =0
  do{
    rev = ''
    reverse = words[j]
  
   for(var i=words[j].length-1; i>=0; i--){
    rev += reverse[i]
   }
    output.push(rev)
  
    j++
  }
  while(j<words.length)
    
    console.log("The reversed Sentence is "+output.join(' ')) 
  }
  
  
  
  reverseWordsInSentence('hello how are you ?')