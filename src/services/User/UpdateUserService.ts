import prismaClient from "../../prisma";

interface IData {
  region?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  async execute(
    user_id: string,
    region?: string,
    email?: string,
    password?: string
  ) {
    let data: IData = {};
    email && (data.email = email);
    region && (data.region = region);
    password && (data.password = password);

    if (email) {
      const user = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });
      console.log(user);
      if (user && user.id !== user_id) {
        throw { error: "email", code: 400 };
      }
    }

    const user = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        ...data,
      },
    });

    delete user.password;
    return user;
  }
}

export { UpdateUserService };
