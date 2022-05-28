import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import tokenGen from '../middlewares/jwtGenerator';

const create = async (user: User) => {
  const userResult = await UserModel.create(user);
  const token = tokenGen(userResult);
  return token;
};

const login = async (username: string, password: string) => {
  const result = await UserModel.login(username, password);

  if (result) {
    const token = tokenGen(result);
    return { token };
  }
  return { message: 'Username or password invalid' };
};

export default {
  create,
  login,
};
