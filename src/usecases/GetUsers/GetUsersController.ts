import { Request, Response } from "express";
import { GetUsers } from "./GetUsers";

export class GetUsersController {
  async handle(request: Request, response: Response) {
    const { type } = request.query;

    const getUsers = new GetUsers();

    const users = await getUsers.execute({
      deliveryman: type === "deliveryman" ? true : false,
    });

    return response.json(users);
  }
}
