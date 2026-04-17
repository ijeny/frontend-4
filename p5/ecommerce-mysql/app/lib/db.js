import mysql from "mysql2/promise";

export async function query(sql, values = []) {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "ijeny46",
    database: "ecommerce",
  });

  const [rows] = await connection.execute(sql, values);

  await connection.end();

  return rows;
}
