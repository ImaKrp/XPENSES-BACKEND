import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

class CreateUserService {
  async execute(email: string, password: string) {
    let user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      throw { error: "email", code: 400 };
    }

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          email: email,
          password: password,
        },
      });
    }

    delete user.password;
    return { user };
  }
}

export { CreateUserService };
