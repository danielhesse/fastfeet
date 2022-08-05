import { prisma } from "../../prisma";

export class GetUsers {
  async execute() {
    return prisma.user.findMany({
      where: { deliveryman: false },
      orderBy: { createdAt: "desc" },
    });
  }
}
