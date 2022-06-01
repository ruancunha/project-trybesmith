import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import tokenGen from '../middlewares/jwtGenerator';

const create = async (user: User) => {
  const { username } = user;
  const userResult = await UserModel.create(user);
  const token = tokenGen({ userResult, username });
  return token;
};

const login = async (username: string, password: string) => {
  const result = await UserModel.login(username, password);
  console.log(`Service: ${username}`);

  if (result) {
    const payload = { id: result.id, username };
    console.log(payload);

    const token = tokenGen(payload);
    console.log(token);
    
    return { token };
  }
  return { message: 'Username or password invalid' };
};

export default {
  create,
  login,
};
