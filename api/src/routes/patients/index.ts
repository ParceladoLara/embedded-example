import { Router } from "express";
import { PatientController } from "../../controllers/patients";

export class PatientsRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/patient", (req, res) =>
      new PatientController().create(req, res)
    );
    this.router.get("/patient/:id", (req, res) =>
      new PatientController().get(req, res)
    );
    this.router.get("/patients", (req, res) =>
      new PatientController().list(req, res)
    );
  }
}
