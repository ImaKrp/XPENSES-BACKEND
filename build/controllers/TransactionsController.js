"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const CreateTransactionService_1 = require("../services/Transactions/CreateTransactionService");
const GetAllTransactionsServices_1 = require("../services/Transactions/GetAllTransactionsServices");
const DeleteTransactionService_1 = require("../services/Transactions/DeleteTransactionService");
class TransactionsController {
    async create(req, res) {
        const { alias, transaction } = req.body;
        const { user_id } = req;
        const service = new CreateTransactionService_1.CreateTransactionService();
        const result = await service.execute(alias, transaction, user_id);
        return res.json(result);
    }
    async delete(req, res) {
        const { id } = req.query;
        const convertedId = String(id);
        const service = new DeleteTransactionService_1.DeleteTransactionService();
        const result = await service.execute(convertedId);
        return res.json(result);
    }
    async list(req, res) {
        const { user_id } = req;
        const service = new GetAllTransactionsServices_1.GetAllTransactionsServices();
        const result = await service.execute(user_id);
        return res.json(result);
    }
}
exports.TransactionsController = TransactionsController;
