import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user.interface';
import connection from './connection';

const create = async (user: User): Promise<number> => {
  const { username, classe, level, password } = user;  
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  
  return insertId;
};

export default {
  create,
};
