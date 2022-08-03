import { Request, Response } from "express";
import { RegisterUser } from "./RegisterUser";

export class RegisterUserController {
  async handle(request: Request, response: Response) {
    const { name, email, deliveryman } = request.body;

    const registerUser = new RegisterUser();

    await registerUser.execute({
      name,
      email,
      deliveryman,
    });

    return response.status(201).json();
  }
}
