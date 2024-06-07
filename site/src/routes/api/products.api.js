const router = require('express').Router();
const { listApi, renderImg, detailProductApi } = require('../../controllers/api/product');

router.get('/products', listApi);
router.get('/products/:id', detailProductApi);
router.get('/:image', renderImg);

module.exports = router;