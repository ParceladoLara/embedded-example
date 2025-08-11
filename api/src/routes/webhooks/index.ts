import { Router } from "express";
import { WebhooksController } from "../../controllers/webhooks";

export class WebhooksRouter {
	public readonly router: Router;

	constructor() {
		this.router = Router();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.router.post("/webhooks", (req, res) =>
			new WebhooksController().receiptWebhook(req, res),
		);
	}
}
