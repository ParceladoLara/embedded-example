import { Router } from "express";
import { CompanyController } from "../../controllers/companies/Create";

export class CompaniesRouter {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.post("/company", (req, res) =>
			new CompanyController().createCompany(req, res),
		);
		this.router.post("/update", (req, res) =>
			new CompanyController().updateCompany(req, res),
		);
	}
}
