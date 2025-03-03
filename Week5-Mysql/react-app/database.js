// database.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0075",
  database: "mysql_nodejs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
