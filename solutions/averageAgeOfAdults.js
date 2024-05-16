/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/


function averageAgeOfAdults(users) {
let adultUsers = [];
for ( let i=0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adultUsers.push(users[i]);
  }

}
console.log(adultUsers)

let totalAge = 0;
for ( const user of adultUsers) {
  totalAge += user.age;
}
let averageAge = totalAge / adultUsers.length;
return averageAge
}

module.exports = averageAgeOfAdults;
