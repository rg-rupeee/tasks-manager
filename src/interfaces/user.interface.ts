export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IUserMethods {
  correctPassword(
    candidatePassword: string,
    userPassword: string,
  ): Promise<boolean>;
}

export default IUser;
