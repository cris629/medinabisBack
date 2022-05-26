const routerx = require('express-promise-router');
const domiciliaryController = require('../controllers/domiciliaryController');

const router = routerx();

router.get('/',(req, res) => {
    res.send('Estoy en domiciliarios');
})

router.get('/list', domiciliaryController.list);
router.post('/add', domiciliaryController.register);
router.post('/login',  domiciliaryController.login);

module.exports = router;