const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  database: "inventory_sys",
  host: "localhost",
  port: 5432,
});

export default pool;
