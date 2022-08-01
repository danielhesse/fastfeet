import express, { Request, Response } from "express";

const server = express();

server.use(express.json());

server.use("/", (_: Request, response: Response) => {
  return response.json({
    code: 200,
    message: "Hello World!",
  });
});

server.listen(3333, () => {
  console.log("Server running on port 3333!");
});
