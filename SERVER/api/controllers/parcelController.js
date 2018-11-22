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
    const parcel = Parcels.find(e => e.Pid === Pid);
    if (parcel) {
      res.status(200).json({
        message: 'The parcel has been Found',
        Parcel: parcel,
      });
    } else {
      res.status(400).json({
        error: 'The parcel with the provided Id does not exist',
      });
    }
  }

  static createParcel(req, res) {
    const newPid = parseInt(Parcels.length, 10) + 1;
    const {
      Powner, Plocation, Pdestination, Pweight,
    } = req.body;
    const newParcel = {
      Pid: newPid,
      Powner,
      Plocation,
      Pdestination,
      Pweight,
    };
    Parcels.push(newParcel);
    return res.status(200).json({
      message: 'created a new parcel',
    });
  }

  static cancelParcel(req, res) {
    const { Pid } = req.params;
    const findParcel = Parcels.find(e => e.Pid === Pid);
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
}


export default parcelController;
