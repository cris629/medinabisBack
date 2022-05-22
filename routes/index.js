const routerx = require('express-promise-router');
const productRouter = require('./product');
const clientRoute = require('./client')

const router = routerx();

router.use('/product', productRouter);
router.use('/client', clientRoute);

module.exports = router;