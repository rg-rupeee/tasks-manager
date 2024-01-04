import AppError from '@core/Error';
import { User } from '@models/User/index';
import { generateToken } from '@/utils/token';

class AuthService {
  public signup = async ({ name, email, password }) => {
    const user = new User({ name, email, password });
    try {
      await user.save();
    } catch (err) {
      if (err.code === 11000) {
        throw new AppError('email already exists', 400);
      }
      throw err;
    }
    delete user.password;
    const token = generateToken(user.id);
    return { token, user };
  };

  public login = async ({ email, password }) => {
    const user = await User.findOne({
      email,
    }).select('+password');

    if (!user) {
      throw new AppError('User Not Found', 400);
    }

    if (!(await user.correctPassword(password, user.password))) {
      throw new AppError('Password Does Not Match', 401);
    }

    delete user.password;

    const token = generateToken(user.id);

    return { token, user };
  };
}

export default AuthService;
