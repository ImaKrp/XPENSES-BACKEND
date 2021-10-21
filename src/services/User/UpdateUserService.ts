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
    if (email) data.email = email;
    if (region) data.region = region;
    if (password) data.password = password;

    const user = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        ...data
      },
    });

    return user;
  }
}

export { UpdateUserService };
