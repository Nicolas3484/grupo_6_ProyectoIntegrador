const bcryptjs = require('bcryptjs');
let pass = "pepito"

let hash = bcryptjs.hashSync(pass, 10);

console.log(hash);