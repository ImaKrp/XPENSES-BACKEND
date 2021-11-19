import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

class AuthenticateUserService {
  async execute(email: string, password: string) {
    const errors: String[] = [];
    !email && errors.push("Email");
    !password && errors.push("Password");

    if (errors.length !== 0) {
      if (errors.length === 1) {
        throw { error: `Field is required: ${errors[0]}`, code: 400 };
      } else {
        throw { error: `Fields are required: ${errors}`, code: 400 };
      }
    }

    let user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw { error: "email", code: 400 };
    }

    if (user.password !== password) {
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
