/* Destructuring object */
const person = {
    name: "Nur Mohammad",
    age: 23,
    info: {
        adress: "BSMRH",
        phone: "01744620719",
        friends: ["Shanto", "Sopnil", "Kawsar", "Raj"]
    }
}
const {name} = person;
const {phone, friends} = person.info;
console.log("Name: ", name, "\n", "Phone", phone);

/* destructuring array */

const [firstFriend, secondFriend, ...remaingFriend] = friends;
console.log(firstFriend, secondFriend, remaingFriend);
