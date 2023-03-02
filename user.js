


const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id)
}


// test
// console.log(getUser(3));

module.exports = {getUsers , getUser};
