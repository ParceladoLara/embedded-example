import type { Database } from "better-sqlite3";
import { database } from "../../database";

export interface CreateEmployeeDTO {
	name: string;
	cellphone: string;
	cpf: string;
	birthDate: string;
	email: string;
	companyId: number;
	laraId?: string;
}

export class CreateEmployeeService {
	private readonly db: Database;

	constructor(db: Database = database) {
		this.db = db;
	}

	public execute(data: CreateEmployeeDTO): void {
		const stmt = this.db.prepare(`
      INSERT INTO employees (
        name, cellphone, cpf, birthDate, email, companyId
      ) VALUES (?, ?, ?, ?, ?, ?)
    `);

		stmt.run(
			data.name,
			data.cellphone,
			data.cpf,
			data.birthDate,
			data.email,
			data.companyId,
		);
	}
}
