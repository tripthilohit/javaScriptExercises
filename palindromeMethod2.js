//Palindrome efficient method

function palindrome(input){
    if(typeof input != 'string')
    input = input.toString()
    var j = input.length-1
    var flag = true
    for(var i=0;i<input.length/2;i++){
        if(input[i]!=input[j]){
            console.log("This "+input+" is not a palindrome")
            flag = false
            break;
        }
        j--
    }
    if(flag)
    console.log("This "+input+" is a palindrome.")
}

palindrome(111211)