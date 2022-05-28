import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import tokenGen from '../middlewares/jwtGenerator';

const create = async (user: User) => {
  const userResult = await UserModel.create(user);
  const token = tokenGen(userResult);
  return token;
};

export default {
  create,
};
