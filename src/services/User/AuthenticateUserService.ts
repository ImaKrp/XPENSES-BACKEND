import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt'

class AuthenticateUserService {
  async execute(email: string, password: string) {
    let user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw { error: "email", code: 400 };
    }

    const validateHash = await bcrypt.compare(password, user.password);


    if (!validateHash) {
      throw { error: "password", code: 400 };
    }

    const token = sign(
      {
        user: {
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
      }
    );

    delete user.password;
    return { token, user };
  }
}

export { AuthenticateUserService };
