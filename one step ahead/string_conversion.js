/*
3 Important Func: 
a- parseInt()
b- parseFloat()
c- Number()
*/

var temp = prompt("What is the outside temprature?")
console.log(temp,typeof(temp))
console.log(temp + 5) //concatination not addition

/*
temp = parseInt(temp)
console.log(temp,typeof(temp))
console.log(temp+5)
*/

/*
temp = parseFloat(temp)
console.log(temp,typeof(temp))
console.log(temp+5)
*/

temp = Number(temp)
console.log(temp,typeof(temp))
console.log(temp+5)