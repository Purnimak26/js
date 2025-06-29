let score=undefined
//server sends value but don't know thw type then typeof is used to find the data type
console.log(typeof score);
//when number is converted it is easy 
//cannot convert string+num to num ex 3345ui it's type will be num but value is nan
//null is 0
//undefined is undefined

let num=Number(score);
console.log(typeof num);
console.log(num);
let isLoggedIn=1;
let booleanloggedin=Boolean(isLoggedIn);
console.log(booleanloggedin);
console.log(typeof booleanloggedin);


