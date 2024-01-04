import { Schema, model } from 'mongoose';
import IUser from '@interfaces/user.interface';

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: false,
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
});

export const User = model<IUser>('User', userSchema);
