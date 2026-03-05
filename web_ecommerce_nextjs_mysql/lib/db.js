import mysql from "mysql2/promise";

export async function connect() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "ijeny46",
    database: "ecommerce_db",
    port: 3307,
  });

  return connection;
}