import Database from "better-sqlite3";
import path from "path";

const database = new Database(path.resolve(__dirname, "database.sqlite"));

database
	.prepare(`CREATE TABLE IF NOT EXISTS companies 
    (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    cnpj TEXT NOT NULL UNIQUE, 
    name TEXT NOT NULL, 
    apiKey TEXT
    )`)
	.run();

database
	.prepare(`
    CREATE TABLE IF NOT EXISTS employees
    (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    cellphone TEXT NOT NULL,
    cpf TEXT NOT NULL,
    birthDate TEXT NOT NULL,
    email TEXT NOT NULL,
    company_id INTEGER NOT NULL,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    )
    `)
	.run();

export { database };
