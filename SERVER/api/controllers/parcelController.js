import Parcels from '../modal/parcel';


class parcelController {
  static getAllParcels(req, res) {
    return res.json({
      message: 'List of All parcels',
      parcels: Parcels,
    });
  }
}


export default parcelController;
