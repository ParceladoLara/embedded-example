import type { Request, Response } from "express";

export class WebhooksController {
	public receiptWebhook = (req: Request, res: Response): Response => {
		const data = req.body;

		try {
			console.log(data);

			return res.status(201).json({ message: "ok" });
		} catch (error) {
			return res.status(500).json({ error });
		}
	};
}
