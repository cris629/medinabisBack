const routerx = require('express-promise-router');
const productController = require('../controllers/productsController');

const router = routerx();

router.get('/',(req, res) => {
    res.send('Estoy en products');
})

router.get('/list', productController.list);
router.get('/listAll', productController.listAll);
router.post('/add', productController.add);
router.delete('/delete',  productController.delete);

module.exports = router;