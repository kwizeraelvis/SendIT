import Parcels from '../modal/parcel';


class parcelController {
  static getAllParcels(req, res) {
    return res.json({
      message: 'List of All parcels',
      parcels: Parcels,
    });
  }

  static getParcelByID(req, res) {
    const { Pid } = req.params;
    // eslint-disable-next-line eqeqeq
    const foundParcel = Parcels.find(e => e.Pid == Pid);
    if (foundParcel) {
      res.status(200).json({
        message: 'The parcel has been Found',
        parcel: foundParcel,
      });
    } else {
      res.status(400).json({
        error: 'The parcel with the provided Id does not exist',
      });
    }
  }

  static createParcel(req, res) {
    const newPid = parseInt(Parcels.length, 10) + 1;
    // eslint-disable-next-line object-curly-newline
    const { Powner, Plocation, Pdestination, Pweight } = req.body;
    const newParcel = {
      id: newPid,
      Powner,
      Plocation,
      Pdestination,
      Pweight,
    };
    Parcels.push(newParcel);
    res.status(201).json({
      message: 'The parcel was cretaed',
      parcel: newParcel,
    });
  }

  static cancelParcel(req, res) {
    const { Pid } = req.params;
    // eslint-disable-next-line eqeqeq
    const findParcel = Parcels.find(e => e.Pid == Pid);
    if (findParcel) {
      const newParcels = Parcels.filter(e => e !== findParcel);
      res.status(200).json({
        message: 'The specified parcel was successfully canceled',
        Parcels: newParcels,
      });
    } else {
      res.status(400).json({
        error: 'could not cancel the specified parcel',
      });
    }
  }

  static updateParcel(req, res) {
    const { Pid } = req.params;
    const findParcel = Parcels.find(e => e.Pid === Pid);
    if (findParcel) {
      (findParcel.Pdestination = req.body);
      res.status(200).json({
        message: 'The parcel was successfully updated',
      });
    } else {
      res.status(400).json({
        error: 'The parcel could not be updated',
      });
    }
  }
}


export default parcelController;
