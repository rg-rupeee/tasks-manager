import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';

import IUser, { IUserMethods } from '@interfaces/user.interface';

export const userSchema = new Schema<IUser>(
  {
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
      select: false,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 8);

  return next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  return next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

type UserModel = Model<IUser, {}, IUserMethods>;

export const User = model<IUser, UserModel>('User', userSchema);
