import jsonwebtoken from 'jsonwebtoken';

import config from '@core/config';
import AppError from '@core/Error';

export const generateToken = (data: { email: string; id: string }) => {
  const token = jsonwebtoken.sign(data, config.JWT.SECRET, {
    expiresIn: config.JWT.EXPIRY,
  });

  return token;
};

export const decode = async (token: string) => {
  try {
    const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);
    return decoded;
  } catch (err) {
    throw new AppError('Invalid token or Token expired', 401);
  }
};
