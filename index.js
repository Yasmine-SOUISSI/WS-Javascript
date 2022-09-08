// Logging output & console
console.log("Hello world!");
//Alerter utilisateur
alert("Hello world!");
//Interaction avec l'utilisateur
prompt("How old are you ?");
confirm("Are you sure you want to continue?");
// Declaration d'une variable
var variable = 10;
console.log("variable", variable);
var propmtResponse = prompt("Enter a string");
console.log("propmtResponse", propmtResponse);
//Affectation d'une nouvelle valeur attribuer a la var a
variable = "hello";
console.log(variable);
//Can't use keyword
//Can't start with a number
//Can't use hyphen(-) and space
//Can't declare a variable 2x

//Data Types

//number
let chiffre = 55;
console.log("chiffre variable", chiffre);
console.log(typeof chiffre);

//string ""
let string = "Mansouri 58 ? *";
console.log(string);
console.log(typeof string);

//Boolean
let bool = true;
let bool2 = false;
console.log(bool);
console.log(typeof bool);
console.log(bool2);
console.log(typeof bool2);

//undefined
let und;
console.log(und);
console.log(typeof und);
und = 55;
console.log(und);
console.log(typeof und);

//null

var timer = null;
console.log(timer);
console.log(typeof timer);

// String method
let lastName = "Dachraoui";
let firstName = "Hasna";

// Concatination
// Meth1
console.log("Hello" + " " + lastName + " " + firstName);

let concat = lastName + " " + firstName;
console.log(concat);

//Meth2 Template Litteral
//Role : print variable inside string
console.log(`Hello ${firstName} ${lastName}`);
// get one character by index
console.log(lastName[0]);
console.log(lastName[1]);
console.log(lastName[2]);
console.log(lastName[3]);
//get length of string
let lengthOfString1 = firstName.length;
let lengthOfString2 = lastName.length;
console.log(lengthOfString1);
console.log(lengthOfString2);

//change case
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
// split string into array
let hello = "Hello-World";
let stringSplit = hello.split("-");
console.log(stringSplit);
// get index of character
console.log(lastName.indexOf("a"));
let str = firstName.split("");
console.log(str);

//
let tab = ["mohamed", "hasna", "nesrine", 25, 22, 23, true, false, true];
console.log(tab);

console.log(tab.length);

console.log(tab[0]);
// Add an element
console.log(tab.push("last"));
console.log(tab);

console.log(tab.unshift("first"));
console.log(tab);

//Delete
console.log(tab.shift());
console.log(tab);
console.log(tab.pop());
console.log(tab);
//check array is array
console.log(Array.isArray(tab));

//Index of an element in the array
let indexOfAnElement = tab.indexOf("mohamed");
console.log(indexOfAnElement);
console.log(tab[indexOfAnElement]); // => console.log(tab[0])
//Declare an object
let person = {
    firstName: "John",
    lastName: "Doe",
    obj2: {
        hello: "hhh",
        hey: "hhhh55",
    },
    tab: [5, 6, "hhh"],
    isbool: true,
};
// key
let key = Object.keys(person);
console.log(key);
//value
let value = Object.values(person);
console.log(value);
// key,value
let key_value = Object.entries(person);
console.log(key_value);
//Output

console.log(typeof obj);
//Accessing properties
console.log(person.firstName); //Output: John
console.log(person["lastName"]); //Output : Doe
console.log(person.obj2.hello);

//Modifying the value of a property
person.firstName = "Jane";
console.log(person); //Output : { firstName: 'Jane', lastName: 'Doe’ }

//Adding a new property
person.age = 25;
console.log(person);

//Delete a property
delete person.age;
console.log(person);

//Check if a property  exists
console.log("age" in person); //Output: true

let arrayOfObjects = [
    {
        firstName: "John",
        lastName: "Doe",
        obj2: {
            hello: "hhh",
            hey: "hhhh55",
        },
        tab: [5, 6, "hhh"],
        isbool: true,
    },
    {
        firstName: "John",
        lastName: "Doe",
        obj2: {
            hello: "hhh",
            hey: "hhhh55",
        },
        tab: [5, 6, "hhh"],
        isbool: true,
    },
    {
        firstName: "John",
        lastName: "Doe",
        obj2: {
            hello: "hhh",
            hey: "hhhh55",
        },
        tab: [5, 6, "hhh"],
        isbool: true,
    },
    {
        firstName: "John",
        lastName: "Doe",
        obj2: {
            hello: "hhh",
            hey: "hhhh55",
        },
        tab: [5, 6, "hhh"],
        isbool: true,
    },
];
// Accesiing to the key of an object
console.log(arrayOfObjects[0].firstName);

//  Arithmetic operator
// + , - , * , / , % , ++ , -- , **

let a = 55;
let b = 100;
//Addition
console.log(a + b);
//Soustraction
console.log(b - a);
//Multiplication
console.log(a * b);
//Divison
console.log(a / b);
//Reste
console.log(a % b);

var timer = 10;
console.log(timer);
//Incremention
timer++;
console.log(timer);
timer = timer + 1;
console.log(timer);
timer += 1;
console.log(timer);
timer += 6;
console.log(timer);

//Affectation

timer = +1;
//+ signe positif  //1=valeur affecté

console.log(timer);

//Decrementation

let counter = 20;

counter--;
console.log(counter);
counter = counter - 1;
console.log(counter);
counter -= 1;
console.log(counter);

//Operator logic

//ET &&
let number1 = 5;
let number2 = 10;
console.log(number1 > 0);
console.log(number1 < number2);

console.log(number1 > 0 && number1 < number2);

//OU ||

console.log(number1 > 0);
console.log(number1 < number2);
console.log(number1 > 0 || number1 < number2);

//Exercice 1

let arr = [1, 500, "chaima", "hella"];
//Concatination meth 1
console.log("Hello " + arr[3] + " and " + arr[2]);

//Template literals
console.log(`Hello ${tab[tab.indexOf("hella")]} and ${tab[2]}`);

//delete last element (Hella)
tab.pop();

//add new element
tab.unshift(800);
tab.unshift(100);

console.log(tab);

let bb = tab.length;

console.log(bb + 1);

//Exercice 2
console.log(5 > 6);

console.log(5 > 7);

console.log(6 > 5);

console.log(true && false);
console.log(true || false);
console.log(true && true);

console.log(70 + 5);
console.log(70 - 5);
console.log(70 / 5);
console.log(70 % 5);
// Comparaison
// equal to (==)

// Conditional

// If

let num1 = 5;
let num2 = 10;

if (a > b) {
    console.log("A is greater than B");
} else {
    console.log("B is greater than A");
}

if (a == b) {
    console.log("A is equal B");
} else if (a > b) {
    console.log("A is less than B");
} else {
    console.log("B is greater than A");
}

//comparaison valeur
console.log(5 == "5");
//comparaison type&&valeur
console.log(5 === "5");
// = => affectation

//Switch case

switch (a) {
    case 1:
        console.log("A is 1");
        break;
    case 2:
        console.log("A is 2");
        break;
    case 3:
        console.log("A is 3");
        break;
    default:
        console.log("hello");
}

//For loop
let tabb = [1, 2, 5, 6];
var sum = 0;
for (let i = 0; i < tabb.length; i++) {
    sum = sum + tabb[i];
    console.log(sum);
}

// Exercice 3 Max-Min

let array = [6, 10, 25, 1];
let max = tab[0];
let min = tab[0];

for (let i = 1; i < tab.length; i++) {
    if (max < tab[i]) {
        max = tab[i];
    }
    if (min > tab[i]) {
        min = tab[i];
    }
    console.log(max);
    console.log(min);
}

// Exercice trie
let table = [6, 10, 25, 1];
let temp = 0;

for (let j = 0; j < tab.length; j++) {
    if (tab[j] < tab[j + 1]) {
        temp = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = temp;
        temp = 0;
    }
}
console.log(tab);
//Functions

function say() {
    return `Hello`;
}
function say(name) {
    return `Hello ${name}`;
}

console.log(say());
console.log(say("Weal and Talel"));

//a&b are parameters
function add(a, b) {
    return a + b;
}
// 1,2 are arguments
let returnOfFunction = add(1, 2);
console.log(returnOfFunction);

let number = 4;
if ((number = 5)) {
} else {
}
if ((number = 5)) {
} else if (a < 5) {
} else {
}

//Declaration function

function op(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
    return "You must enter an operator (+,-,*,*/)";
}

//appel de la function

let result = op(5, 8, "+");
console.log(result);

function op2(a, b, operator) {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "/") {
        return a / b;
    } else if (operator == "*") {
        return a * b;
    } else {
        return "You must enter an operator (+,-,*,*/)";
    }
}

let result2 = op2(8, 9, "+");
console.log(result2);

function sheep(n) {
    let res = "";
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            res += `${i}sheep ...`;
        }
        return res;
    } else {
        return "You must enter a positve number ";
    }
}

console.log(sheep(5));

function GoodJob(n) {
    let res = "";
    if (n > 0 && n > 5 && n < 100) {
        for (i = 1; i < n; i++) {
            res += `${i} Good Job `;
        }
        return res;
    } else return "You must enter a positve number between 5 and 100";
}

console.log(GoodJob(10));

function phrase(arr) {
    let res = "";
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        res += `${arr[i]} `;
    }
    obj.phrase = res;
    return obj;
}

console.log(phrase(["hello", "world", "this", "is", "great"]));

function leo(oscar) {
    if (oscar == 88) {
        return "Leo finally won the oscar! Leo is happy";
    } else if (oscar == 86) {
        return "Not even for Wolf of wallstreet?!";
    } else if ((oscar != 88 || oscar != 86) && oscar < 88) {
        return "When will you give Leo an Oscar?";
    } else {
        return "Leo got one already!";
    }
}

console.log(leo(800));

var t = ["a", "o", "i", "e", "y", "u"];
var d = "yasmine aime les series turques";
var chaine = "";
var k = "";
var l = "";

var s = "equipment_by_id_";
console.log(s.replaceAll("_", " "));

function somme(a, b) {
    return a + b;
}

console.log(somme(5, 6));

function voyelles(v, str) {
    for (let i = 0; i < str.length; i++) {
        if (v.includes(str[i])) {
            str = str.replaceAll(str[i], "");
        }
    }
    return str;
}
console.log(voyelles(t, d));

let website = {
    title: "JavaScript Tutorial",
    url: "https://www.javascripttutorial.net",
    tags: ["es6", "javascript", "node.js", "reactjs"],
};

for (let key in website) {
    console.log(key);
}
var sum = 0;
for (let i of website.tags) {
    sum = sum + a;
    console.log("website.tags sum", sum);
}
let k = "c";
switch (k) {
    case "a":
        console.log("a");
        break;
    case "b":
        console.log("b");
        break;
    case "c":
        console.log("c");
        break;
    default:
        console.log("default");
}
