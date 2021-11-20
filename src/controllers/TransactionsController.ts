import { Request, Response } from "express";
import { CreateTransactionService } from "../services/Transactions/CreateTransactionService";
import { GetAllTransactionsServices } from "../services/Transactions/GetAllTransactionsServices";
import { DeleteTransactionService } from "../services/Transactions/DeleteTransactionService";

interface IQuery {
  id: string;
}

class TransactionsController {
  async create(req: Request, res: Response) {
    const { alias, transaction } = req.body;
    const { user_id } = req;

    const errors: String[] = [];
    !alias && errors.push("Alias");
    !transaction && errors.push("Transaction (Value)");

    if (errors.length !== 0) {
      return res.status(400).json({
        error:
          errors.length === 1
            ? `Field is required: ${errors[0]}`
            : `Fields are required: ${errors}`,
      });
    }

    const service = new CreateTransactionService();

    try {
      const result = await service.execute(alias, transaction, user_id);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.query;

    const convertedId = String(id);

    const service = new DeleteTransactionService();
    try {
      const result = await service.execute(convertedId);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }

  async list(req: Request, res: Response) {
    const { user_id } = req;

    const service = new GetAllTransactionsServices();

    try {
      const result = await service.execute(user_id);
      return res.json(result);
    } catch (err) {
      return res
        .status(err.code ?? 401)
        .json({ error: err.error ?? err.message });
    }
  }
}

export { TransactionsController };
