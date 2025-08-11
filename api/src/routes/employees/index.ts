import { Router } from "express";
import { EmployeeController } from "../../controllers/employees/create";

export class EmployeesRouter {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.post("/employee", (req, res) =>
			new EmployeeController().createEmployee(req, res),
		);
	}
}
