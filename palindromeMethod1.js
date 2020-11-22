// Plaindrome reverse method 

function palindrome(input){
    console.log(typeof(input))
if(typeof input != 'string')
input = input.toString()
var rev=''
for(var i=input.length-1;i>=0;i--)
{
    rev += (input[i])
    console.log(rev)
}
console.log("Reversed string is "+ rev)
if(rev === input)
{
    console.log(" Yes, "+ input +" is a palindrome")
}
else
{
    console.log(" No, "+input+" is not a palindrome")
}
}

palindrome(998999)