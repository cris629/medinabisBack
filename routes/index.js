const routerx = require('express-promise-router');
const productRouter = require('./product');
const clientRouter = require('./client')
const domiciliaryRouter = require('./domiciliary')

const router = routerx();

router.use('/product', productRouter);
router.use('/client', clientRouter);
router.use('/domiciliary', domiciliaryRouter)

module.exports = router;