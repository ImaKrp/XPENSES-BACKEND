import prismaClient from "../prisma";
import { io } from "../app";

class CreateTransactionService {
  async execute(value: number, user_id: string) {
    const transactions = await prismaClient.transaction.create({
      data: {
        value,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      value: transactions.value,
      user_id: transactions.user_id,
      created_at: transactions.created_at,
      user: {
        id: transactions.user.id,
        email: transactions.user.email,
      },
    };

    io.emit("new_message", infoWS);

    return transactions;
  }
}

export { CreateTransactionService };
