import prismaClient from "../../prisma";

class CreateTransactionService {
  async execute(alias: string, value: number, user_id: string) {

    const errors: String[] = [];
    !alias && errors.push("Alias");
    !value && errors.push("transaction (Value)");

    if (errors.length !== 0) {
      if (errors.length === 1) {
        throw { error: `Field is required: ${errors[0]}`, code: 400 };
      } else {
        throw { error: `Fields are required: ${errors}`, code: 400 };
      }
    }

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
