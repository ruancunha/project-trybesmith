import Jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '1d',
};

export const SECRET = 'yadayada';

export default (payload = {}) => Jwt.sign({ data: payload }, SECRET, jwtConfig);
