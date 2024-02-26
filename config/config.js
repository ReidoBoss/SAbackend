const {createConnection } = require('mysql');
const con = createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"swiftaid"
});

con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

module.exports = con;
