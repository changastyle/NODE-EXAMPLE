const db = require('./models');

let arrUsers = db.User.findAll().then(console.log).catch(console.error);


console.log("ARR-USERS: " + arrUsers);
// arrUsers.forEach(usrLoop => {
//       console.log(usrLoop);
// });