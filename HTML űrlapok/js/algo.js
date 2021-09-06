//Összegző algoritmus
let numericArrey = [1,3,2,5,4,10,7,6,8];
let sum = 0;
for (let i = 0; i < numericArrey.length; i++) {
    sum += numericArrey[i];
}
console.log("Sum: ", sum);

//Számlálási algoritmus
let db = 0;
for (let i = 0; i < numericArrey.length; i++) {
    if (numericArrey[i] % 2 == 0) {
        db++;
    }
}
console.log("Páros számok ", db);

//Szélsőérték keresés
let highest = numericArrey[0];
let lowest = numericArrey[0];
for (let i = 0; i < numericArrey.length; i++) {
    if (highest < numericArrey[i]) {
        highest = numericArrey[i];
    }
    if (lowest > numericArrey[i]) {
        lowest = numericArrey[i];
    }
}
console.log("Legnagyob szám ", highest);
console.log("Legkisebb szám ", lowest);

//Eldöntés tétele (algoritmusa)
let contains = false;
for (let i = 0; i < numericArrey.length && !contains; i++) {
    if (numericArrey[i] == 8) {
        contains = true;
    }
}

console.log("Tartalmazza? ", contains);

//Objects
let user = {
    name: "Nemtudom",
    age: 20,
    city: "Budapest"
  };
console.log(user);


let admin = new Object();
console.log(admin);

let costumer = {};
console.log(costumer);