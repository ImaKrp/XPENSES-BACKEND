"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTransactionsServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetAllTransactionsServices {
    async execute(user_id) {
        const transactions = await prisma_1.default.transaction.findMany({
            where: {
                user_id: user_id,
                deleted: false
            },
            orderBy: {
                created_at: "desc",
            },
        });
        return transactions;
    }
}
exports.GetAllTransactionsServices = GetAllTransactionsServices;
