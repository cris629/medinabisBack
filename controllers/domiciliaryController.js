const conection = require('../configConection/config');

exports.list = async (req, res, next) => {
    let mensaje="OK";
	const connectionDB = conection.createConectionSQL();
    let results = null;
	try{
        results = await connectionDB.query("SELECT * FROM domiciliario");
        res.status(200);
	} catch ( err ) {
		console.log('Error while performing Query');
		console.log(err);
		mensaje= "NO_OK";
	} finally {
		await connectionDB.close();
		res.send(results);
	}
}

exports.register = async (req, res, next) => {
    let mensaje="OK";
	const bodyInformation = req.body;
	const connectionDB = conection.createConectionSQL();
	try{
        const verify = await connectionDB.query("SELECT * FROM domiciliario WHERE correo = ? ", req.body.correo)
        if(verify.length > 0){
            mensaje = "correo ya registrado"
            res.status(401);
        }else{
            const results = await connectionDB.query("INSERT INTO domiciliario SET nombre = ?, puntaje =?, correo = ?, contrasena = ? ", [bodyInformation.nombre, bodyInformation.puntaje, bodyInformation.correo, bodyInformation.pass]);
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
}

exports.login = async (req, res, next) => {
    let mensaje="OK";
    const bodyInformation = req.body;
    console.log(bodyInformation);
    const connectionDB = conection.createConectionSQL();
    
    try{
        const user = await connectionDB.query("SELECT * FROM domiciliario WHERE correo = ? AND contrasena = ? ", [req.body.correo, req.body.pass])
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
}