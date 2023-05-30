import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
   id: {
      type: String,
      required: true,
      unique: true
   },
   name: {
      firstName: {
         type: String,
         required: true
      },
      middleName: {
         type: String
      },
      lastName: {
         type: String,
         required: true
      }
   },
   role: {
      type: String,
      required: true
   },
   dateofBirth: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true
   },
   contactNo: {
      type: String,
      required: true,
      unique: true
   },
   address: {
      type: String,
      required: true
   }
});

userSchema.method('fullName', function fullName() {
   return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>('User', userSchema);

export default User;