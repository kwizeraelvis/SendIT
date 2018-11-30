/* eslint-disable no-console */
import uuidv4 from 'uuid/v4';
import execute from '../db/db';


class parcelDbController {
  static async getAllParcels(req, res) {
    const findAllQuery = 'SELECT * FROM parcels where owner_id = $1';
    try {
      const { rows, rowCount } = await execute(findAllQuery, [req.user.id]);
      return res.status(200).send({
        rows, rowCount,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async getParcelById(req, res) {
    const selectById = 'SELECT * FROM parcels WHERE pid = $1 AND owner_id = $2';
    try {
      const { rows } = await execute(selectById, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'Parcel not found',
        });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async createParcel(req, res) {
    const query = 'insert into parcels(pid,plocation,pdestination,pstatus,pweight) values ($1,$2,$3,$4,$5,$6) returning *';
    const values = [
      uuidv4(),
      req.body.plocation,
      req.body.pdestination,
      req.body.pstatus,
      req.body.pweight,
      req.user.id,
    ];
    try {
      const result = await execute(query, values);
      return res.status(201).send(result.rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async changeParcelDestination(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE pid=$1 AND owner_id = $2';
    const query = 'update parcels set pdestination=$1 where pid=$2 and owner_id=$3 returning *';
    try {
      const result = await execute(findOneQuery, [req.params.pid, req.user.id]);
      if (!result.rows[0]) {
        return res.status(404).send({
          message: 'Parcel has not been found',
        });
      }
      const values = [
        req.body.pdestination || result.rows[0].pdestination,
        req.params.id,
        req.user.id,
      ];
      const response = await execute(query, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  static async changeParcelStatus(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE pid=$1 AND owner_id = $2';
    const query = 'update parcels set pstatus=$1 where pid=$2 and owner_id=$3 returning *';
    try {
      const result = await execute(findOneQuery, [req.params.pid, req.user.id]);
      if (!result.rows[0]) {
        return res.status(404).send({
          message: 'Parcel has not been found',
        });
      }
      const values = [
        req.body.pstatus || result.rows[0].pdestination,
        req.params.id,
        req.user.id,
      ];
      const response = await execute(query, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

export default parcelDbController;
