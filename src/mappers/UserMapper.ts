import { User } from "@prisma/client";

type UserMapperResponse = {
  id: string;
  name: string;
  email: string;
  deliveryman: boolean;
  created_at: Date;
};

export class UserMapper {
  static toDTO(user: User): UserMapperResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      deliveryman: user.deliveryman,
      created_at: user.created_at,
    };
  }
}
