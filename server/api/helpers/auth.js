/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import execute from '../db/db';


class Auth {
  static async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(400).send({
        message: 'Token has not been provided',
      });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      const query = 'select * from users where Uid = $1';
      const result = await execute(query, [decoded.owner_id]);
      if (!result.rows[0]) {
        return res.status(400).send({
          message: 'The token provided is invalid',
        });
      }
      req.user = { uid: decoded.owner_id };
      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
export default Auth;
