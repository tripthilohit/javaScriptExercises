// The number of characters to remove to make a string unique 

function uniqueCharToRemove(input){
    var uniqueString = ""
    var duplicate = ""
    var count = 0
    
    for(var i=0; i<=input.length-2; i++){
        var flag = true
        for(var j=i+1; j<=input.length-1; j++){
        if(input[i]==input[j] && !duplicate.includes(input[i])){
            count++
            flag = false
            duplicate += input[i]
            break
        }
        }
        if(flag && !duplicate.includes(input[i]))
        uniqueString += input[i]
    }
    console.log("The number of characters to remove to make the string unique is "+ count)
    console.log("The characters in the String is/are "+ uniqueString.toString() + " "+duplicate.toString())
}

uniqueCharToRemove('aaaba')




