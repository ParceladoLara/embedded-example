import type { Request, Response } from "express";
import {
  InitializeLaraProposalService,
  InitializeLaraProposalServiceDTO,
} from "../../services/lara/initializeProposal";
import {
  CompleteLaraProposalService,
  CompleteLaraProposalServiceDTO,
} from "../../services/lara/completeProposal";
import { LaraWebhookBody } from "../../types/WebhookBodyType";
import { UpdateCollectionURLService } from "../../services/lara/updateCollectionURL";

export class LaraController {
  private readonly initializeProposalService =
    new InitializeLaraProposalService();
  private readonly completeProposalService = new CompleteLaraProposalService();
  private readonly updateCollectionURLService =
    new UpdateCollectionURLService();

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

  public webhook = async (req: Request, res: Response): Promise<Response> => {
    const {
      data: { collectionUrl, id },
    }: LaraWebhookBody = req.body;

    try {
      if (collectionUrl && id) {
        await this.updateCollectionURLService.execute({
          lara_proposal_id: id,
          collection_url: collectionUrl,
        });
      }
    } catch (error) {
      console.error("Webhook Lara error:", error);
    }

    return res.status(200).json({ received: true });
  };
}
