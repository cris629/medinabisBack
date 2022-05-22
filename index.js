const express    = require("express"); // Gestión de las peticiones HTTP
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');

var app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({extended: false,limit: '60mb'}));

app.use('/api', router);

app.set('port', process.env.PORT || 3000);

app.get('/',(req, res) => {
    res.send('Mi primer server!');
})

app.listen(app.get('port'), () =>{
    console.log('server up en el puerto: '+ app.get('port'));
})

module.exports = app;