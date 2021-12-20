const numbers = [10, 29, 39, 38, 7, 0, 1, 9];
const isFiveThere = numbers.find(numbers => numbers  === 7);
console.log(isFiveThere);

// array object find
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
const showTopStudent = friends.find(friend => friend.id === 1);
console.log(showTopStudent);