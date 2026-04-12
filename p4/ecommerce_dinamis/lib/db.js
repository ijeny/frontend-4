import mysql from 'mysql2/promise';
import { Passero_One } from 'next/font/google';

export async function connect() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ijeny46',
        database: 'crud_toko_baju'
    });
    return connection;
}