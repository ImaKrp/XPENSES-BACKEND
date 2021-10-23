"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTransactionService {
    async execute(alias, value, user_id) {
        const transactions = await prisma_1.default.transaction.create({
            data: {
                alias,
                value,
                user_id,
            },
        });
        return transactions;
    }
}
exports.CreateTransactionService = CreateTransactionService;
