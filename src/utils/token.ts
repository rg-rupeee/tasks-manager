import jsonwebtoken from 'jsonwebtoken';

import config from '@core/config';

export const generateToken = (id: string) => {
  const token = jsonwebtoken.sign({ id }, config.JWT.SECRET, {
    expiresIn: config.JWT.EXPIRY,
  });

  return token;
};
