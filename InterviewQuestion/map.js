const numbers = [1, 2, 3, 4, 5];
const sqrNumbers = numbers.map(number => number*number);
console.log(sqrNumbers);

// Array এর ভিতরে object Property কে Map 

const friends = [
    {
        id: 1,
        name: "Mojnu"
    },
    {
        id: 2,
        name: "Asad"
    },
    {
        id: 3,
        name: "Morshed"
    },
    {
        id: 4,
        name: "Edirish"
    }
]

const names = friends.map(friend => friend.name);
console.log(names);