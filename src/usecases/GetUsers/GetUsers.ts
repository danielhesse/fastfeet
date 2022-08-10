import { prisma } from "../../prisma";

type GetUsersRequest = {
  deliveryman: boolean;
};

export class GetUsers {
  async execute({ deliveryman }: GetUsersRequest) {
    return prisma.user.findMany({
      where: { deliveryman },
      orderBy: { created_at: "desc" },
    });
  }
}
