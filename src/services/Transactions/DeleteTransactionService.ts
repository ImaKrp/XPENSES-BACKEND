import prismaClient from "../../prisma";

class DeleteTransactionService {
  async execute(id: string) {
    const transactions = await prismaClient.transaction.update({
      where: {
        id: id,
      },
      data: {
        deleted: true,
      },
    });
    
    delete transactions.user_id;
    return transactions;
  }
}

export { DeleteTransactionService };
