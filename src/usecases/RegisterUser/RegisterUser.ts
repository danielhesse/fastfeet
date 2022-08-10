import { hash } from "bcrypt";
import { prisma } from "../../prisma";

interface RegisterUserRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  deliveryman: boolean;
}

export class RegisterUser {
  async execute({
    name,
    email,
    cpf,
    password,
    deliveryman,
  }: RegisterUserRequest) {
    const userExistWithThisEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const userExistWithThisCpf = await prisma.user.findFirst({
      where: {
        cpf,
      },
    });

    if (userExistWithThisEmail || userExistWithThisCpf) {
      throw new Error("User already exist!|400");
    }

    const passwordHashed = await hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        cpf,
        password: passwordHashed,
        deliveryman,
      },
    });

    return;
  }
}
