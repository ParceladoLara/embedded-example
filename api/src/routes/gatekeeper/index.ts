import { Router } from "express";
import { GatekeeperController } from "../../controllers/gatekeeper/Login";

export class GatekeeperRouter {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.post("/login", (req, res) =>
			new GatekeeperController().gatekeeperLogin(req, res),
		);
	}
}
