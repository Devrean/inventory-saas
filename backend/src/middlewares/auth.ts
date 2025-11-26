import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "../lib/customError";
import { AuthRepository } from "../repositories/auth.repository";
import { ACCESS_SECRET, REFRESH_SECRET } from "../config/env.config";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authRepository = new AuthRepository();
  const accessToken = req.cookies.accessToken || "";
  const refreshToken = req.cookies.refreshToken || "";

  if (accessToken && accessToken !== "") {
      const decodedJwt = jwt.verify(accessToken, ACCESS_SECRET!);
      req.user = decodedJwt as Record<string, any>;
      next()
  }
  if (!refreshToken || refreshToken === "") {
    throw new CustomError("refreshToken is missing");
  }
  const decodedRefresh = jwt.verify(refreshToken, REFRESH_SECRET!);
  let user 
  if (typeof decodedRefresh !== "string"){
    user = await authRepository.findById(decodedRefresh.id);
  }
  res.cookie("accessToken",accessToken,{
    httpOnly:true,
    sameSite : "strict",
    maxAge : 1000 * 30 * 60
  })
  next()
};
