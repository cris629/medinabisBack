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

/*app.post("/loginUser", async function(req,res){
	let mensaje="OK";
	const bodyInformation = req.body;
	console.log(bodyInformation);
	const connectionDB = crearConexion();
	
	try{
        const user = await connectionDB.query("SELECT * FROM usuario WHERE correo = ? AND contrasena = ? ", [req.body.correo, req.body.pass])
        if(user.length > 0){
            mensaje = {auth: true, user:user}
            res.status(200);
        }else{
            mensaje = "Usuario o contraseña incorrecto"
            res.status(401);
        }

	} catch ( err ) {
		console.log('Error while performing Query');
		console.log(err);
		mensaje= "NO_OK";
	} finally {
		await connectionDB.close();
		res.send(mensaje);
	}
});

app.post("/registerUser", async function(req,res){
	let mensaje="OK";
	const bodyInformation = req.body;
	const connectionDB = crearConexion();
	try{
        const verify = await connectionDB.query("SELECT * FROM usuario WHERE correo = ? ", req.body.correo)
        if(verify.length > 0){
            mensaje = "correo ya registrado"
            res.status(401);
        }else{
            const results = await connectionDB.query("INSERT INTO usuario SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, fechaDeNacimiento = ?, cedula = ? ", [bodyInformation.nombre, bodyInformation.apellido, bodyInformation.correo, bodyInformation.pass, bodyInformation.fechaDeNacimiento, bodyInformation.cedula]);
            res.status(200);
        }

	} catch ( err ) {
		console.log('Error while performing Query');
		console.log(err);
		mensaje= "NO_OK";
	} finally {
		await connectionDB.close();
		res.send(mensaje);
	}
});
*/