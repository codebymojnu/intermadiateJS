const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(element => element % 2 === 0);
console.log(evenNumbers);

// Array এর ভিতরে Object Property কে ফিল্টার 
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
const smallName = friends.filter(friend => friend.name.length < 6);
console.log(smallName);