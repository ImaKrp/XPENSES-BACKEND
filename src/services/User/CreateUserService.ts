import prismaClient from "../../prisma";
import bcrypt from 'bcrypt'

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

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          email: email,
          password: hashedPassword,
        },
      });
    }

    delete user.password;
    return { user };
  }
}

export { CreateUserService };
