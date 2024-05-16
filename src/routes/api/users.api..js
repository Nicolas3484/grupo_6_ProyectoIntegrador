const router = require("express").Router()
const { listapi, /* renderImg, */ detailUserApi, } = require("../../controllers/api/users");

//  /api/users
router.get("/users",listapi);
router.get("/users/:id", detailUserApi);
/* router.get('/:image', renderImg); */



module.exports = router;