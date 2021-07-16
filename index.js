/*

var name1 = "Ali";
var aliweight = 12;
var bagweight = 4;
totalweight = aliweight + bagweight;
var myname;
var my2name = null;

//Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it 


Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it 
Hi This is it Hi This is it Hi This is it Hi This is it 
Hi This is it Hi This is it Hi This is it Hi This is it 
Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it Hi This is it 


console.log(name1);
console.log(aliweight);
console.log(totalweight);
console.log(myname);
console.log(my2name);
console.log(typeof name1);
console.log(typeof aliweight);

var while1 = 21;
//va


var a = 2;
console.log(a);
var b = a++; // now 'b' is 2, but 'a' becomes 2+1 = 3
console.log(b);
var c = ++a; // now 'c' is 1+3 = 4,  and thus a = 4
console.log(c);
console.log(a);

var comp = 24;
console.log(comp == 24);
console.log(comp < 25);
console.log(comp > 25);

//======================================================================================================
var yourAge = prompt("What is your age?")

if (yourAge > 18 && yourAge < 30) {
    var gender = prompt("Gender?")
    if (gender === "male") {
        alert("Elligible");
    }
    else {
        alert("Sorry! You are not elligble")
    }
}
else {
    alert("Sorry! You are not elligble")
}
*/

//===============================================================================================================
/*   THis is an age calculator:
line 65 to line 130

//var userName = prompt("What is Your Name?")
var userDobDate = prompt("What is your date of birth: Date?");
var userDobMonth = prompt("What is your date of birth: Month?");
var userDobYear = prompt("What is your date of birth: Year?");

var a = new Date().getDate();
var b = new Date().getMonth() + 1;
var c = new Date().getFullYear();

var x = Number(userDobDate);
var y = Number(userDobMonth);
var z = Number(userDobYear);

if (a >= x) {
    var d = a - x;
}

if (a < x && b === 4) {
    a = a + 30;
    b = b - 1;
    d = a - x;
}

if (a < x && b === 6) {
    a = a + 30;
    b = b - 1;
    d = a - x;
}

if (a < x && b === 9) {
    a = a + 30;
    b = b - 1;
    d = a - x;
}

if (a < x && b === 11) {
    a = a + 30;
    b = b - 1;
    d = a - x;
}

if (a < x && b === 2) {
    a = a + 28;
    b = b - 1;
    d = a - x;
}

if (a < x && (b === 1 || b === 3 || b === 5 || b === 7 || b === 8 || b === 10 || b === 12)) {
    a = a + 31;
    b = b - 1;
    d = a - x;
}

if (b >= y) {
    var m = b - y;
}
if (b < y) {
    b = b + 12;
    c = c - 1;
    m = b - y;
}

e = c - z;

console.log(d + "-" + m + "-" + e);
alert("Hello, " + "You are " + d + " Days, " + m + " Month, " + e + " Years Old")
*/
//console.log(1);


//=================================================================================================================
//for loop practice

/*
var num = Number(prompt("What is the Number"));
for(var i = 1; i <= 10; i++){
    console.log(num*i);
}
*/

/*
//===================================================================================================================
//BREAK AND CONTINUE IN FOR LOOP

// BREAK ==== break loop after if-condition

for(x = 0; x <= 10; x++){
    if(x == 6){
        break;
    }
    console.log(x);
}

// CONTINUE ===== only skip if-condition

for(x = 0; x <= 10; x++){
    if(x == 6){
        continue;
    }
    console.log(x);
}

*/


//======================================================================================================
//TASK PRACTICE 'PRIME NUMBER'
/*
var num = Number(prompt("what is Numner"));
var isPrime = true;

for(i = 2; i < num; i++){    
    var result = num % i;
    if(result == 0){
        console.log(num + " is not prime and is divisible by " + i);
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num + " is prime")
}
*/


//======================================================================================================
//TASK PRACTICE TRIANGLE
/*

for(var i = 1; i <= 10; i++){
    for(var k = 1; k<= (10 - i); k++){
        document.write("&nbsp;");
    }
    for (var j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br/>");
}


for (let line = "*"; line.length < 8; line += "*")
console.log(line);
*/

//=========================================================================================================
//ARRAYS 

var x = [1, 2, "Hello", true, 5];
console.log(x);

//ADD ARRAYS
x[10] = "Hi";
console.log(x);

//UPDATE ARRAY OBJECTS
x[3] = false;
console.log(x);
console.log(x[1]);

