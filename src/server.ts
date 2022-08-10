import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { routes } from "./routes";

const server = express();

server.use(express.json());

server.use(routes);

server.use((err: Error, _1: Request, response: Response, _2: NextFunction) => {
  if (err instanceof Error) {
    const [error, code] = err.message.split("|");

    const statusCode = Number(code);

    return response.status(statusCode | 400).json({
      error: {
        code: statusCode,
        message: error,
      },
    });
  }

  return response.status(500).json({
    error: {
      code: 500,
      message: err,
    },
  });
});

server.listen(3333, () => {
  console.log("Server running on port 3333!");
});
