import { Router } from "express";
import { GetUsersController } from "./usecases/GetUsers/GetUsersController";
import { RegisterUserController } from "./usecases/RegisterUser/RegisterUserController";

export const routes = Router();

routes.post("/users", new RegisterUserController().handle);
routes.get("/users", new GetUsersController().handle);
