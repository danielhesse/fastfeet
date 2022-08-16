import { UserMapper } from "../../mappers/UserMapper";
import { prisma } from "../../prisma";

type GetUsersRequest = {
  deliveryman: boolean;
};

export class GetUsers {
  async execute({ deliveryman }: GetUsersRequest) {
    const users = await prisma.user.findMany({
      where: { deliveryman },
      orderBy: { created_at: "desc" },
    });

    return users.map((user) => UserMapper.toDTO(user));
  }
}
