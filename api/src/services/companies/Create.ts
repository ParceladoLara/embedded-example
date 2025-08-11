import type { Database } from "better-sqlite3";
import { database } from "../../database";

export interface CreateCompanyDTO {
	cnpj: string;
	name: string;
}

export class CreateCompanyService {
	private readonly db: Database;

	constructor(db: Database = database) {
		this.db = db;
	}

	public execute({ cnpj, name }: CreateCompanyDTO): void {
		const stmt = this.db.prepare(
			"INSERT INTO companies (cnpj, name) VALUES (?, ?)",
		);
		stmt.run(cnpj, name);
	}
}
