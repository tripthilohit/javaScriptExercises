function ransomNote(noteStr, magazineStr){
  
    var noteStrArr = noteStr.split(' ')
    var magazineStrArr = magazineStr.split(' ')
    var flag
    
    for(var i = 0; i < noteStrArr.length; i++){
      flag = false
      for(var j = 0; j < magazineStrArr.length; j++){
        if(noteStrArr[i] === magazineStrArr[j]){
          magazineStrArr[j] = " "
          flag = true
          break
        }
      }
      if(!flag){
        return 'No'
      }
    }
     return 'Yes'
  }
  
  console.log(ransomNote('ive got some coconuts', 'ive got a lovely bunch of coconuts'))