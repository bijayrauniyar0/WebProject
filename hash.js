const bcrypt = require('bcryptjs');
let pw = 'password';
let hash = bcrypt.hashSync(pw, 10);
console.log(hash)

