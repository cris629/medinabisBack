const mysql = require('mysql');
const util = require('util'); // Gestión de la base de datos

exports.createConectionSQL = () => {
    connection=  mysql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : '',
        database : 'medinabisdb'
	});
	return {
	query( sql, args ) {
		return util.promisify( connection.query )
		.call( connection, sql, args );
		},
	close() {
		return util.promisify( connection.end ).call( connection );
		}
	};
}