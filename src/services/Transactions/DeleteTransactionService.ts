import prismaClient from "../../prisma";

class DeleteTransactionService {
  async execute(id: string) {
    let transaction = await prismaClient.transaction.findFirst({
      where: {
        id: id,
      },
    });
    if (transaction.deleted === true) {
      throw { error: "Transaction already deleted", code: 406 };
    }
    transaction = await prismaClient.transaction.update({
      where: {
        id: id,
      },
      data: {
        deleted: true,
      },
    });

    delete transaction.user_id;
    return transaction;
  }
}

export { DeleteTransactionService };
