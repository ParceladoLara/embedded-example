import type { Request, Response } from "express";
import { database } from "../../database";
import { GetEmployeeService } from "../../services/employees/get";
import { SetEmployeeLaraIdService } from "../../services/gatekeeper/createEmployee";
import { OnboardingLoginService } from "../../services/gatekeeper/onboardingLogin";
import { PlatformLoginService } from "../../services/gatekeeper/platformLogin";

interface CompanyType {
	id: number;
	cnpj: string;
	name: string;
	apiKey: string;
}

export class GatekeeperController {
	private readonly getEmployeeService = new GetEmployeeService();
	private readonly setEmployeeLaraIdService = new SetEmployeeLaraIdService();
	private readonly onboardingLoginService = new OnboardingLoginService();
	private readonly platformLoginService = new PlatformLoginService();

	public async gatekeeperLogin(req: Request, res: Response): Promise<Response> {
		const {
			ssoId,
			documentNumber,
			cellphone,
			companyName,
			contactName,
			email,
		} = req.body;

		if (!ssoId && !documentNumber) {
			return res.status(400).json({ error: "Invalid parameters" });
		}

		const company: CompanyType = database
			.prepare(`
		SELECT * FROM companies 
		WHERE cnpj = ?
		`)
			.get(documentNumber) as CompanyType;

		if (!company) {
			return res.status(404).json({ error: "Company not found" });
		}

		if (!company?.apiKey) {
			const jwt = await this.onboardingLoginService.execute({
				documentNumber,
				cellphone,
				companyName,
				contactName,
				email,
			});

			console.log(jwt);

			return res.status(200).json({
				url: `${process.env.ONBOARDING_URL}?credential=${jwt}`,
			});
		}

		const employee = this.getEmployeeService.execute(ssoId);

		if (!employee) {
			return res.status(404).json({ error: "Employee not found" });
		}

		// Se o employee ainda não tem lara_id, registra e gera token
		if (!employee?.laraId) {
			await this.setEmployeeLaraIdService.execute(employee, company.apiKey);
		}

		if (!employee?.laraId) {
			return res.status(404).json({ error: "laraId not found" });
		}

		const jwt = await this.platformLoginService.execute(
			{ ssoId: employee.laraId },
			company.apiKey,
		);

		return res.status(200).json({
			url: `${process.env.PLATFORM_URL}?credential=${jwt}`,
		});
	}
}
