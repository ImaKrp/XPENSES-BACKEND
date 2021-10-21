import { Request, Response } from "express";
import { CreateTransactionService } from "../services/Transactions/CreateTransactionService";
import { GetAllTransactionsServices } from "../services/Transactions/GetAllTransactionsServices";
import { DeleteTransactionService } from "../services/Transactions/DeleteTransactionService";

class TransactionsController {
  async create(req: Request, res: Response) {
    const { alias, transaction } = req.body;
    const { user_id } = req;

    const service = new CreateTransactionService();

    const result = await service.execute(alias, transaction, user_id);

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.body;

    const service = new DeleteTransactionService();

    const result = await service.execute(id);

    return res.json(result);
  }

  async list(req: Request, res: Response) {
    const { user_id } = req;

    const service = new GetAllTransactionsServices();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { TransactionsController };
