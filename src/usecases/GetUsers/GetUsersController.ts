import { Request, Response } from "express";
import { GetUsers } from "./GetUsers";

export class GetUsersController {
  async handle(_: Request, response: Response) {
    const getUsers = new GetUsers();

    const users = await getUsers.execute();

    return response.json(users);
  }
}
