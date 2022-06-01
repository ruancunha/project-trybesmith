import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const login = async (username: string, password: string): Promise<User> => {
  const result = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  const [rows] = result;
  return rows[0] as User;
};

export default {
  create,
  login,
};
