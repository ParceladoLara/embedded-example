import type { Request, Response } from "express";
import {
	type CreateEmployeeDTO,
	CreateEmployeeService,
} from "../../services/employees/create";

export class EmployeeController {
	private readonly createEmployeeService = new CreateEmployeeService();

	public createEmployee = (req: Request, res: Response): Response => {
		const data: CreateEmployeeDTO = req.body;

		try {
			this.createEmployeeService.execute(data);
			return res.status(201).json({ message: "Success" });
		} catch (error) {
			return res.status(500).json({ error });
		}
	};
}
