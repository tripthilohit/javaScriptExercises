var jsonExample = '{ "name": "Peter"}'
console.log(jsonExample.name)

var obj = JSON.parse(jsonExample)
console.log(obj.name)


// Exercise 1 – Creating an JavaScript Object

// Create an object called person with name = John, age = 50. Then, access the object to display "John is 50 years old”. I have written some code here.

var example = '{"name" : "John", "age": 50}'
var obj = JSON.parse(example)
console.log( obj.name+" is "+obj.age+" years old")


var clubMember = '{"firstname":"John", "lastname": "Doe", "memberStatus":"Full"}'
var str = JSON.stringify(clubMember)
console.log(clubMember)