import { Router } from "express";
import { RegisterUserController } from "./usecases/RegisterUser/RegisterUserController";

export const routes = Router();

routes.post("/users", new RegisterUserController().handle);
