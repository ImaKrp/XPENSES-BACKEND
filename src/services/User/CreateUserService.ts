import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

class CreateUserService {
  async execute(email: string, password: string) {

    if(!email || !password){
      throw { error: "Fields are required: 'Email', 'Password'", code: 400 };
    }

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

    return { user };
  }
}

export { CreateUserService };
