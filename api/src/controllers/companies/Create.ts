import type { Request, Response } from "express";
import {
  type CreateCompanyDTO,
  CreateCompanyService,
} from "../../services/companies/Create";

export class CompanyController {
  private readonly createCompanyService = new CreateCompanyService();

  public createCompany = (req: Request, res: Response): Response => {
    const { cnpj, name }: CreateCompanyDTO = req.body;

    if (!cnpj || !name) {
      return res.status(400).json({ error: "Invalid parameters" });
    }

    try {
      this.createCompanyService.execute({ cnpj, name });
      return res.status(201).json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
