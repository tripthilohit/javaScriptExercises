function gradingStudents(num) {
    for(var i = 0; i < num.length; i++){
        if(num[i] < 38)
        num[i] = num[i]
        else if(num[i] % 5 >2){
            var divisor =  Math.trunc(num[i]/5)
     num[i] = (divisor+1) * 5
        }
        else num[i] = num[i]
    }
    return num
}

console.log(gradingStudents([75,67,40,33]))