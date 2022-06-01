import Jwt, { SignOptions } from 'jsonwebtoken';

const jwtConfig: SignOptions = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

export const SECRET = 'yadayada';

export default (payload = {}) => {
  console.log(payload);
  Jwt.sign(payload, SECRET, jwtConfig);
};
