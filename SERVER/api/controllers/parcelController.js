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
}


export default parcelController;