import { Request, Response } from "express";
import { AuthenticateUser } from "./AuthenticateUser";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { cpf, password } = request.body;

    const authenticateUser = new AuthenticateUser();

    const { user, token } = await authenticateUser.execute({
      cpf,
      password,
    });

    return response.json({ user, token });
  }
}
