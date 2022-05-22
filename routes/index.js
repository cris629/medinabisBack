const routerx = require('express-promise-router');
/*const articuloRouter = require('./articulo');
const categoriasRouter = require('./categorias')*/
const clientRoute = require('./client')

const router = routerx();

//router.use('/articulo', articuloRouter);
router.use('/client', clientRoute);
//router.use('/categoria', categoriasRouter);


module.exports = router;