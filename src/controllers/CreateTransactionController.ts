import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";

class CreateTransactionController {
  async handle(req: Request, res: Response) {
    const { transaction } = req.body;
    const { user_id } = req;

    const service = new CreateTransactionService();

    const result = await service.execute(transaction, user_id);

    return res.json(result);
  }
}

export { CreateTransactionController };