const bcryptjs = require('bcryptjs');
let pass = "juancarlos"

let hash = bcryptjs.hashSync(pass, 10);

console.log(hash);