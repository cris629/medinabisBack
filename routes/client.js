const routerx = require('express-promise-router');
const clientController = require('../controllers/clientsControllers');

const router = routerx();

router.get('/',(req, res) => {
    res.send('Estoy en clientes');
})

//router.get('/list', auth.verifyUsuario, UserController.listar);
router.post('/add', clientController.register);
router.post('/login',  clientController.login);
/*router.put('/update',  UserController.update);
router.put('/activate', UserController.activate);
router.put('/deactivate', UserController.deactivate);*/

module.exports = router;