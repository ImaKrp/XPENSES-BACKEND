import prismaClient from "../../prisma";

interface ITransaction {
  alias: string;
  value: number;
  user_id: string;
}

class GetAllTransactionsServices {
  async execute(user_id: string) {
    const transactions = await prismaClient.transaction.findMany({
      where: {
        user_id: user_id,
        deleted: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const allTransactions = transactions.map((transaction: ITransaction) => {
      delete transaction.user_id;
      return transaction;
    });
    return allTransactions;
  }
}

export { GetAllTransactionsServices };
