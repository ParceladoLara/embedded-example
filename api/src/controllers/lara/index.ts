import type { Request, Response } from "express";
import {
  InitializeLaraProposalService,
  InitializeLaraProposalServiceDTO,
} from "../../services/lara/initializeProposal";
import {
  CompleteLaraProposalService,
  CompleteLaraProposalServiceDTO,
} from "../../services/lara/completeProposal";

export class LaraController {
  private readonly initializeProposalService =
    new InitializeLaraProposalService();
  private readonly completeProposalService = new CompleteLaraProposalService();

  public initialize = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const data: InitializeLaraProposalServiceDTO = req.body;

    try {
      const employee = await this.initializeProposalService.execute(data);
      return res.status(201).json(employee);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  public complete = async (req: Request, res: Response): Promise<Response> => {
    const data: CompleteLaraProposalServiceDTO = req.body;

    try {
      const employee = await this.completeProposalService.execute(data);
      return res.status(201).json(employee);
    } catch (error: any) {
      return res
        .status(error?.status ?? 500)
        .json({ error: error?.response?.data });
    }
  };
}
