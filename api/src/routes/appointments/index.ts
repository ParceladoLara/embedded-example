import { Router } from "express";
import { AppointmentController } from "../../controllers/appointments";

export class AppointmentsRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/appointment", (req, res) =>
      new AppointmentController().create(req, res)
    );
    this.router.get("/appointment/:id", (req, res) =>
      new AppointmentController().get(req, res)
    );
    this.router.get("/appointments", (req, res) =>
      new AppointmentController().list(req, res)
    );
    this.router.patch("/appointment", (req, res) =>
      new AppointmentController().updateValue(req, res)
    );
  }
}
