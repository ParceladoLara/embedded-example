import { Router } from "express";
import { EmployeeController } from "../../controllers/employees";

export class EmployeesRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/employee", (req, res) =>
      new EmployeeController().createEmployee(req, res)
    );
    this.router.get("/employee/:search", (req, res) =>
      new EmployeeController().getEmployee(req, res)
    );
    this.router.get("/employees", (req, res) =>
      new EmployeeController().listEmployees(req, res)
    );
  }
}
