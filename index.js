let colors = ["yellow", "blue", "red", "orange"];

let x = 0;
while (x < colors.length) {
    console.log(colors[x]);
    x++;
}

for (x = 0; x < colors.length; x++) {
    console.log(colors[x]);
}

colors.forEach(element => console.log(element));


//1 #regels while: 5,  #regels for: 3
//2
//3 foreach is makkelijker leesbaar, doordat alle informatie in 1 regel staat en minder tekens worden gebruikt en meer woorden
//4 looping through the properties of een object:

let person = { 
    name: "jill",
    date: "21-4-2021",
    place: "placename",
    academy: "winc"
};

for (let property in person) {
    console.log(person[property]);
}

