import type { Database } from "better-sqlite3";
import type { Request, Response } from "express";
import { database } from "../../database";
import {
	type CreateCompanyDTO,
	CreateCompanyService,
} from "../../services/companies/Create";

export class CompanyController {
	private readonly db: Database;
	private readonly createCompanyService = new CreateCompanyService();

	constructor(db: Database = database) {
		this.db = db;
	}

	public createCompany = (req: Request, res: Response): Response => {
		const { cnpj, name }: CreateCompanyDTO = req.body;

		if (!cnpj || !name) {
			return res.status(400).json({ error: "Invalid parameters" });
		}

		try {
			this.createCompanyService.execute({ cnpj, name });
			return res.status(201).json({ message: "Success" });
		} catch (error) {
			return res.status(500).json({ error });
		}
	};

	public updateCompany = (req: Request, res: Response): Response => {
		const stmt = this.db.prepare("UPDATE companies SET cnpj = ? WHERE id = ?");
		stmt.run("38710249000163", 1);

		return res.status(200).json({ message: "Success" });
	};
}
