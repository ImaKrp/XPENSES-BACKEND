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

    return transactions;
  }
}

export { DeleteTransactionService };
