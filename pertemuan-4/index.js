// Javascript Function

//function greetings() { //argumen
//    return "Hello";
//}

//cara ke2
//const greetings = function(name) { //parameter
//    return "Hello";
//}
//console.log(greetings());

//const age = 17;

//const greetings = function (name) {
    //parameter
//    console.log(age);
//    const job = "teacher"; //local
//    if(job === "teacher") {
//        const address = "manado"; //blok
//    }
//    return "Hello";
//}
//console.log(job);
//console.log(greetings("John")); //argument

//IIFE (Immediately Invoked Function Expression)
//Anonymous function

//(function () {
//    console.log("hello IIFE");
//})();


//const output = (function () {
//    return "Hello IIFE";
//})();

//console.log(output)


//Callback function

function createGreetings(name, callback){
    const greetings = "hello" + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings("John", logGreetings);