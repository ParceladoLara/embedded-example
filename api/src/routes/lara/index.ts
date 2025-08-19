import { Router } from "express";
import { LaraController } from "../../controllers/lara";

export class LaraRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/initialize-lara-proposal", (req, res) =>
      new LaraController().initialize(req, res)
    );

    this.router.post("/complete-lara-proposal", (req, res) =>
      new LaraController().complete(req, res)
    );
  }
}
