import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserMapper } from "../../mappers/UserMapper";
import { prisma } from "../../prisma";

interface AuthenticateUserRequst {
  cpf: string;
  password: string;
}

export class AuthenticateUser {
  async execute({ cpf, password }: AuthenticateUserRequst) {
    const user = await prisma.user.findFirst({
      where: {
        cpf,
      },
    });

    if (!user) {
      throw new Error("User does not exist!|404");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("CPF/password is incorrect!|400");
    }

    const token = sign({}, String(process.env.JWT_SECRET), {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return { user: UserMapper.toDTO(user), token };
  }
}
