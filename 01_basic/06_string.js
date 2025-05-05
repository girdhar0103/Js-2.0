const name = "Girdhar"
const repoCount = 5

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String(`Girdha=r`)

console.log(gameName[0]);
console.log(gameName.__proto__);




console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`r`));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 3)
console.log(newString);


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newString1 = "   girdhar    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://hitesh.com/girdhar%20kumar"

console.log(url.replace(`%20`, `-`));

 console.log(url.includes(`girdhar`));

 console.log(gameName.split(`-`));
 