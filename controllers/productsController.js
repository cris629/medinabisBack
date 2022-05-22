const conection = require('../configConection/config');

exports.listAll = async (req, res, next) => {
    let mensaje="OK";
	const connectionDB = conection.createConectionSQL();
    let results = null;
	try{
        results = await connectionDB.query("SELECT * FROM productos");
        console.log(page);
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

exports.list = async (req, res, next) => {
    let mensaje="OK";
	const connectionDB = conection.createConectionSQL();
    let results = null;
	try{
        let query = `SELECT * FROM productos LIMIT 2 OFFSET ${(req.query.page - 1)*2}`
        results = await connectionDB.query(query);
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