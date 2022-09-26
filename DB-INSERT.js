const db = require('./models');
const user = require('./models/user');


const usuario = db.User.build({nombre:"Nicolas",email:"nico@g.com",clave:"123456"});


usuario.save().then(console.log()).catch(console.error);