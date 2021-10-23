"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransactionService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteTransactionService {
    async execute(id) {
        const transactions = await prisma_1.default.transaction.update({
            where: {
                id: id,
            },
            data: {
                deleted: true,
            },
        });
        return transactions;
    }
}
exports.DeleteTransactionService = DeleteTransactionService;
