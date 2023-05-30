import { Request, Response } from "express";
import { createUserToDB, getUserfromDB, getUserfromDbById } from "./user.service";

export const getUsers = async (req: Request, res: Response) => {
   const users = await getUserfromDB();
   res.status(200).json({
      status: true,
      data: users
   });
};

export const getUsersById = async (req: Request, res: Response) => {
   const { id } = req.params;
   const user = await getUserfromDbById(id);
   res.status(200).json({
      status: true,
      data: user
   });
};

export const createUser = async (req: Request, res: Response) => {
   const payload = req.body;
   const user = await createUserToDB(payload);
   res.status(200).json({
      status: true,
      message: 'Data save successfully',
      data: user
   });
};