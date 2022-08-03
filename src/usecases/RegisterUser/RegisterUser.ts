import { prisma } from "../../prisma";

interface RegisterUserRequest {
  name: string;
  email: string;
  deliveryman: boolean;
}

export class RegisterUser {
  async execute({ name, email, deliveryman }: RegisterUserRequest) {
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("User already exist!|400");
    }

    await prisma.user.create({
      data: {
        name,
        email,
        deliveryman,
      },
    });

    return;
  }
}
