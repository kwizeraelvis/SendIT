import uuidv4 from 'uuid/v4';
import execute from '../../db/connector';
import helper from '../../helpers/helper';

class userDbControllers {
  static async userSignUp(req, res) {
    if (!req.body.uemail || !req.body.upassword) {
      return res.status(400).send({
        message: 'Username or Password Missing',
      });
    }
    if (!helper.isValidEmail(req.body.uemail)) {
      return res.status(400).send({
        message: 'Please enter a valid email',
      });
    }
    const hashPassword = helper.hashPassword(req.body.upassword);
    const createUserQuery = `insert into users(uid,ufirstname,ulastname,uemail,upassword)
    values($1, $2, $3, $4, $5)`;
    const data = [
      uuidv4(),
      req.body.ufirstname,
      req.body.ulastname,
      req.body.uemail,
      hashPassword,
    ];
    try {
      const result = await execute(createUserQuery, data);
      const token = helper.generateToken(result.rows[0].uid);
      return res.status(201).send({
        token,
      });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({
          message: 'A user with that email already exists',
        });
      }
      return res.status(400).send(error);
    }
  }

  static async userLogin(req, res) {
    if (!req.body.Uemail || !req.body.Upassword) {
      return res.status(400).send({
        message: 'Password or Username is missing',
      });
    }
    if (!helper.isValidEmail(req.body.uemail)) {
      return res.status(400).send({
        message: 'Please enter a valid email',
      });
    }
    const userLoginQuery = 'select * from users where uemail=$1';
    try {
      const result = await execute(userLoginQuery, [req.body.uemail]);
      if (!result.rows[0]) {
        return res.status(400).send({
          message: 'Invalid login details',
        });
      }
      if (!helper.comparePassword(result.rows[0].Upassword, req.body.upassword)) {
        return res.status(400).send({
          message: 'Invalid login details',
        });
      }
      const token = helper.generateToken(result.rows[0].uid);
      return res.status(200).send({
        token,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
export default userDbControllers;
