import { Router } from "express";
import { AuthenticateUserController } from "./usecases/AuthenticateUser/AuthenticateUserController";
import { GetUsersController } from "./usecases/GetUsers/GetUsersController";
import { RegisterUserController } from "./usecases/RegisterUser/RegisterUserController";

export const routes = Router();

routes.post("/users", new RegisterUserController().handle);
routes.post("/login", new AuthenticateUserController().handle);
routes.get("/users", new GetUsersController().handle);
