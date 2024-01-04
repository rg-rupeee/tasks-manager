import AppError from '@core/Error';
import { User } from '@models/User/index';

class AuthService {
  public signup = async ({ name, email, password }) => {
    let user;
    try {
      user = await User.create({ name, email, password });
    } catch (err) {
      if (err.code === 11000) {
        throw new AppError('email already exists', 400);
      }
      throw err;
    }

    return { message: 'signup route', user };
  };

  public login = async () => {
    return { message: 'login route' };
  };
}

export default AuthService;
