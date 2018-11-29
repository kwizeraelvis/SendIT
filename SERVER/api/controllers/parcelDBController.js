/* eslint-disable no-console */
import Joi from 'joi';
import execute from '../../db/connector';

class DbConnectors {
  static getAllParcels(req, res) {
    const query = 'SELECT Pid,Powner,Plocation,Pdestination,Pstatus,Pweight from Parcels';
    const parcel = execute(query);
    parcel.then((response) => {
      res.status(200).send(response);
    }).catch(error => console.log(error));
  }

  static async getParcelById(req, res) {
    const query = 'SELECT * from Parcels where Pid = $1';
    // eslint-disable-next-line prefer-destructuring
    const Pid = req.params.Pid;
    const result = await execute(query, [Pid]);
    const record = result.rows[0];
    if (result.rows) {
      res.status(200).send(record);
    } else {
      res.status(400).json({
        message: 'The parcel with specified Id does not exist',
      });
    }
  }

  static createParcel(req, res) {
    const query = 'insert into parcels(powner,plocation,pdestination,pstatus,pweight) values ($1,$2,$3,$4,$5) returning *';
    const schema = Joi.object().keys({
      Powner: Joi.string().required(),
      Plocation: Joi.string().required(),
      Pdestination: Joi.string().required(),
      Pweight: Joi.number().required(),
      Pstatus: Joi.string().required(),
    });
    // eslint-disable-next-line consistent-return
    Joi.validate(req.body, schema, async (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: ' Invalid Input',
        });
      }
      const data = [
        req.body.Powner,
        req.body.Plocation,
        req.body.Pdestination,
        req.body.Pstatus,
        req.body.Pweight,
      ];
      const result = await execute(query, data);
      if (result.rows) {
        const newParcel = result.rows[0];
        res.status(200).json({
          message: 'Parcel has been created',
          Parcel: newParcel,
        });
      }
    });
  }

  static async changeDestination(req, res) {
    const query = 'update parcels set pdestination=$1 where pid=$2 returning *';
    // eslint-disable-next-line prefer-destructuring
    const Pid = req.params.Pid;
    const data = [req.body.Pdestination, Pid];
    const result = await execute(query, data);
    if (result.rows) {
      const updatedParcel = result.rows[0];
      res.status(200).json({
        message: 'Parcel has been updated',
        Parcel: updatedParcel,
      });
    }
  }

  static async changeStatus(req, res) {
    const query = 'update parcels set pstatus=$1 where pid=$2 returning *';
    // eslint-disable-next-line prefer-destructuring
    const Pid = req.params.Pid;
    const data = [req.body.Pstatus, Pid];
    const result = await execute(query, data);
    if (result.rows) {
      const updatedStatus = result.rows[0];
      res.status(200).json({
        message: 'Parcel status has been upadted',
        Parcel: updatedStatus,
      });
    }
  }
}
export default DbConnectors;
