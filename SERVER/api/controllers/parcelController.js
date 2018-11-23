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
    const newParcel = {
      Pid: newPid,
      powner: req.body.Powner,
      plocation: req.body.Plocation,
      pdestination: req.body.Pdestination,
      pweight: req.body.Pweight,
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

  static updaetParcel(req, res) {
    const { Pid } = req.params;
    const findParcel = Parcels.find(e => e.Pid === Pid);
    if (findParcel) {
      (findParcel.Pdestination = req.body.Pdestination);
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
