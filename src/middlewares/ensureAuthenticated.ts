import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
  sub: string;
};

export function ensureAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token is missing.|401");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, String(process.env.JWT_SECRET));

    const { sub: userId } = decoded as TokenPayload;

    request.user = {
      id: userId,
    };

    return next();
  } catch {
    throw new Error("Invalid token.|401");
  }
}
