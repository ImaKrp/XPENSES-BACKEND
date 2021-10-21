import { Request, Response } from "express";
import { GetAllTransactionsServices } from "../services/GetAllTransactionsServices";

class GetAllTransactionsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new GetAllTransactionsServices();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { GetAllTransactionsController };
