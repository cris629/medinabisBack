const routerx = require('express-promise-router');
const clientController = require('../controllers/clientsController');

const router = routerx();

router.get('/',(req, res) => {
    res.send('Estoy en clientes');
})

router.get('/list', clientController.list);
router.post('/add', clientController.register);
router.post('/login',  clientController.login);

module.exports = router;