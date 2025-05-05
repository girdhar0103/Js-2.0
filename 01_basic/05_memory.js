// Stack and Heap memory
// Stack memory used in primitive data type and Heap memory used in nonprimitive data type.

let myYoutubeName = "GirdharKiPathshala"

let anotherName = myYoutubeName
anotherName = "chaipecharcha"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "kumargirdhar804@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "girdhar@google.com"

console.log(userOne.email);
console.log(userTwo.email);

