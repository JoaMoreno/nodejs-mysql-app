const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("./keys");
const {code} = require("./symbols")
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.error(`${code.error} DATABASE CONNECTION WAS CLOSED`)
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.error(`${code.error} DATABASE HAS TO MANY CONNECTIONS`)
        }
        if(err.code === "ECONNREFUSED"){
            console.error(`${code.error} DATABASE CONNECTION WAS REFUSED`)
        }
        return console.error(`${code.error} ${err.message}`);
    }

    if(connection) {
        connection.release();
        console.log(`${code.ok} DB is Connected`);
        return;
    }
})

// Promisify Pool Querys
pool.query = promisify(pool.query)

module.exports = pool;