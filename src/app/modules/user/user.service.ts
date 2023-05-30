import { IUser } from "./user.interface";
import User from "./user.model";

export const getUserfromDB = async (): Promise<IUser[]> => {
   const users = await User.find();
   return users;
}

export const getUserfromDbById = async (payload: string) => {
   const user = await User.findOne({ id: payload });
   if (user) {
      const userWithFullName = {
         ...user.toObject(),
         fullName: user.fullName()
      };
      
      return userWithFullName;
   }
};

export const createUserToDB = async(payload: IUser): Promise<IUser> => {
   const user = new User<IUser>(payload);
   await user.save();
   return user;
};
