const mysql = require("mysql2/promise");

exports.pool = mysql.createPool ({
  host: "www.scplan.shop",
  user: "dummy-client",
  port: "3306",
  password: "238569",
  database: "MyTodoDB",
})