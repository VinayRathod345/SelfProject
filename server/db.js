
var mysql = require('mysql');

var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Root@123",
    database: "JobPortal"
});

module.exports=pool;