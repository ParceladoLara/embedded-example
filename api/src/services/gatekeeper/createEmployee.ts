import type { Database } from "better-sqlite3";
import { database } from "../../database";
import type { CreateEmployeeDTO } from "../employees/create";
import { JWTIssuer } from "./builder";

export class SetEmployeeLaraIdService {
	private readonly db: Database;
	private readonly gatekeeperUrl: string;
	private readonly playerApiKey: string;

	constructor(db: Database = database) {
		this.db = db;
		this.gatekeeperUrl = process.env.GATEKEEPER_URL as string;
		this.playerApiKey = process.env.PLAYER_API_KEY as string;
	}

	public async execute(
		data: CreateEmployeeDTO,
		companyKey: string,
	): Promise<void> {
		const issuer = new JWTIssuer();
		const { companyId, laraId: id, ...rest } = data;

		const issuerJwt = issuer.build("employee:create");

		const response = await fetch(`${this.gatekeeperUrl}/v1/employee/`, {
			method: "POST",
			headers: {
				client_assertion: issuerJwt,
				client_assertion_key: this.playerApiKey,
				company_key: companyKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(rest),
		});

		console.log(response);

		const text = await response.json();

		const laraId = text.data;

		const stmt = this.db.prepare(`
    UPDATE employees
    SET laraId = ?
    WHERE cpf = ? AND companyId = ?
  `);

		stmt.run(laraId, data.cpf, companyId);

		return laraId;
	}
}
