import type { Database } from "better-sqlite3";
import { database } from "../../database";
import type { CreateEmployeeDTO } from "./create";

export interface GetEmployeeDTO extends CreateEmployeeDTO {
	id: number;
	laraId?: string;
}

export class GetEmployeeService {
	private readonly db: Database;

	constructor(db: Database = database) {
		this.db = db;
	}

	public execute(id: number): GetEmployeeDTO | null {
		const stmt = this.db.prepare(`SELECT * FROM employees WHERE id = ?`);
		const employee = stmt.get(id) as GetEmployeeDTO | undefined;

		return employee ?? null;
	}
}
