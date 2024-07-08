import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";



const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          role: {
            type: String,
            required: true,
            enum: ['admin', 'user'],
          },
    }
)


export const User = model<TUser>('User', userSchema)