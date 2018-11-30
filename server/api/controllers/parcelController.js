import Joi from 'joi';
import Parcels from '../modal/parcel';

class parcelsController {
  static getAllParcels(req, res) {
    return res.status(200).json({
      message: 'List of all parcels',
      parcels: Parcels,
    });
  }

  static createParcel(req, res) {
    const data = req.body;
    const schema = Joi.object().keys({
      Powner: Joi.string().required(),
      Plocation: Joi.string().required(),
      Pdestination: Joi.string().required(),
      Pweight: Joi.number().required(),
      Pstatus: Joi.string().required(),
    });
    Joi.validate(data, schema, (err, value) => {
      const newPid = Parcels.length + 1;
      if (err) {
        res.status(400).json({
          message: 'invalid data',
        });
      } else {
        Parcels.push(value);
        res.status(200).json({
          message: 'created a new parcel',
          data: Object.assign({ newPid }, value),
        });
      }
    });
  }

  // get one parcel
  static getParcelByID(req, res) {
    const { Pid } = req.params;
    const oneParcel = Parcels.find(parcel => parcel.Pid === Pid);
    if (oneParcel) {
      return res.status(200).json({
        message: 'parcel found',
        parcel: oneParcel,
      });
    }
    return res.status(400).json({
      message: 'parcel not found',
    });
  }

  // change parcel status
  static changeParcelStatus(req, res) {
    const { Pid } = req.params;
    const oneParcel = Parcels.find(parcel => parcel.Pid === Pid);
    if (oneParcel) {
      const { updatedStatus } = req.body;
      oneParcel.Pstatus = updatedStatus;
      return res.status(200).json({
        message: 'status changed',
      });
    }
    return res.status(400).json({
      message: 'status could not be changed',
    });
  }

  static changeParcelDestination(req, res) {
    const { Pid } = req.params;
    const oneParcel = Parcels.find(parcel => parcel.Pid === Pid);
    if (oneParcel) {
      const { updatedDestination } = req.body;
      oneParcel.Pdestination = updatedDestination;
      return res.status(200).json({
        message: 'Destination has been changed',
      });
    }
    return res.status(400).json({
      message: 'Destination  could not be changed',
    });
  }
  // cancel a parcel order

  static cancelParcel(req, res) {
    // eslint-disable-next-line prefer-destructuring
    const Pid = req.params.Pid;
    const cancelParcel = Parcels.find(parcel => parcel.Pid === Pid);
    if (cancelParcel) {
      const toCancel = req.body.cancelled;
      res.status(200).json({
        message: 'order cancelled',
      });
      // eslint-disable-next-line no-return-assign
      return (cancelParcel.cancel = toCancel);
    }
    return res.status(400).json({
      message: 'parcel cannot be cancelled',
    });
  }

  // remove one parcel
  static removeParcel(req, res) {
    const { Pid } = req.params;
    const oneParcel = Parcels.find(
      parcel => parcel.Pid === Pid, // returns true if the parcel is found with the Pid from params
    );
    const parcelIndex = Parcels.indexOf(oneParcel);
    if (oneParcel) {
      Parcels.splice(parcelIndex, 1);
      return res.status(200).json({
        message: 'parcel deleted',
        Parcels,
      });
    }
    return res.status(400).json({
      message: 'parcel do not exist',
    });
  }
}

export default parcelsController;
