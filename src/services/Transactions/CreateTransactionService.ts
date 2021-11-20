import prismaClient from "../../prisma";

class CreateTransactionService {
  async execute(alias: string, value: number, user_id: string) {
    const transactions = await prismaClient.transaction.create({
      data: {
        alias,
        value,
        user_id,
      },
    });
    
    delete transactions.user_id;
    return transactions;
  }
}

export { CreateTransactionService };
