import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

class AuthenticateUserService {
  async execute(email: string, password: string) {
    let user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {"error": "email"};;
    }

    if(user.password !== password) {
      return {"error": "password"};
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

    return { token, user };
  }
}

export { AuthenticateUserService };
