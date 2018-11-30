/* eslint-disable eqeqeq */
import Joi from 'joi';
import Users from '../modal/users';

class usersController {
  static getParcelByUser(req, res) {
    const { Uid } = req.params;
    const userparcel = Users.find(parcel => parcel.Uid === Uid);
    if (userparcel) {
      res.status(200).json({
        message: `Parcels for ${Users.Unames}`,
        parcels: userparcel.Parcels,
      });
    } else {
      res.status(400).json({
        message: 'The user has no packages',
      });
    }
  }

  static addUser(req, res) {
    const { Uid } = req.params;
    const {
      Ufirstname, Ulastname, Uusername, Uemail, Upassword,
    } = req.body;
    const newUser = {
      id: Uid,
      Ufirstname,
      Ulastname,
      Uusername,
      Uemail,
      Upassword,
      parcels: [],
    };
    Users.push(newUser);
    return res.status(200).json({
      message: 'user registered',
    });
  }

  static userLogin(req, res) {
    const userdata = req.body;
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
    });
    Joi.validate(userdata, schema, (err, value) => {
      const user = Users.find(oneuser => oneuser.email == value.email);
      if (user && user.password == value.password) {
        res.status(200).json({
          message: 'user logged in',
          loggedinUser: user,
        });
      } else {
        res.status(400).json({
          message: 'failed to login',
        });
      }
    });
  }
}

export default usersController;
