const db = require('./models');

let usuarioDB = db.User.findByPk(1);


db.User.update({clave:"chota"}, {where : {id : 1}}).then(console.log);