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
}

export default usersController;
