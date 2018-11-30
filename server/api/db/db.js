import { Pool } from 'pg';
import dotenv from 'dotenv';
// import dbQueries from './queries';

dotenv.config();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

const connect = async () => pool.connect();

// eslint-disable-next-line consistent-return
const execute = async (sql, data = []) => {
  const connection = await connect();
  try {
    return await connection.query(sql, data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  } finally {
    connection.release();
  }
};
export default execute;
