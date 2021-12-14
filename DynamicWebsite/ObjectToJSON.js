const player = {name: "Rayhan", HighScore: 106};
const JSONdata = JSON.stringify(player);
console.log("JSON Data: ", JSONdata);

// JSON Date to Object
const playerObject = JSON.parse(JSONdata);
console.log("Object Data: ", playerObject);