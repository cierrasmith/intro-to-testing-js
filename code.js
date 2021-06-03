// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === false) {
        return "Hello, World!";
    } else if (name === true) {
        return "Hello, World!";
    } else if (name === undefined) {
        return "Hello, World!";
    }
        return "Hello, " + name + "!";
}
/*if (typeof name === 'undefined') {
   return "Hello, World!";
   } else if (name === "Summer") {
           return "Hello, Summer!"
       } else if (name === "Alex") {
           return "Hello, Alex!";
       } else if (name === "Pat") {
           return "Hello, Pat!";
       }
} else if (typeof name === "string") { */